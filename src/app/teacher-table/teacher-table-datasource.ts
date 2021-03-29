import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TeacherTableItem {
  name: string;
  id: number;
  faculty:string;
  address:string;
  phone:string;
  email:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TeacherTableItem[] = [
  {id: 1, name: 'Bane', faculty:'I.T', address: '46 Berkeley Road', phone:'077 3458 0460', email:'MyBoundless@gmail.com'},
  {id: 2, name: 'Todd', faculty:'Business', address: '9 Jubilee Drive', phone:'079 8109 9975', email:'SuperWiggly@gmail.com'},
  {id: 3, name: 'Sarah', faculty:'Social', address: '63 Prince Consort Road', phone:'070 5691 5449', email:'sarahs@gmail.com'},
  {id: 4, name: 'Camron', faculty:'I.T', address: '77 Traill Street', phone:'079 7939 2759', email:'shrapnull@comcast.net'},
  {id: 5, name: 'Stewart', faculty:'Science', address: '10 Walden Road', phone:'070 5940 2054', email:'pplinux@gmail.com'},
  {id: 6, name: 'James', faculty:'Architect', address: '86 Telford Street', phone:'078 5271 1537', email:'rattenbt@gmail.com'},
  {id: 7, name: 'Celia', faculty:'Business', address: '79 St Denys Road', phone:'077 1054 7468', email:'falcao@outlook.com'},
  {id: 8, name: 'Macey', faculty:'Social', address: '36 Park Row', phone:'078 8789 0149', email:'srour@gmail.com'},
  {id: 9, name: 'Robert', faculty:'I.T', address: '54 Holburn Lane', phone:'077 7595 9519', email:'MyDaily@gmail.com'},
  {id: 10, name: 'Amy', faculty:'Science', address: '94 Stroud Road', phone:'070 7239 9339', email:'alhajj@comcast.net'},
  {id: 11, name: 'Luca', faculty:'Music & Art', address: '31 Great North Road', phone:'079 5297 5671', email:'nogin@gmail.com'},
  {id: 12, name: 'Ted', faculty:'Architect', address: '19 Hendford Hill', phone:'078 8842 6994', email:'peterhoeg@outlook.com'}
];

/**
 * Data source for the TeacherTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TeacherTableDataSource extends DataSource<TeacherTableItem> {
  data: TeacherTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TeacherTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TeacherTableItem[]): TeacherTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TeacherTableItem[]): TeacherTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'faculty': return compare(+a.faculty, +b.faculty, isAsc);
        case 'phone': return compare(+a.phone, +b.phone, isAsc);
        case 'address': return compare(+a.address, +b.address, isAsc);
        case 'email': return compare(+a.email, +b.email, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
