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
  {id: 1, name: 'Robin', faculty:'Social', address: '74 Nottingham Road', phone:'079 4006 4683', email:'upopiro10z@gmail.com'},
  {id: 2, name: 'Lisa', faculty:'Music & Art', address: '27 Copthorne Way', phone:'077 3481 0875', email:'sahmarsak6@gmail.com'},
  {id: 3, name: 'Kim', faculty:'Architect', address: '89 Hudson Road', phone:'077 5356 1374', email:'gopalkarki1234@gmail.com'},
  {id: 4, name: 'Lee', faculty:'I.T', address: '41 Northgate Street', phone:'070 2004 5971', email:'tali.alma@comcast.net'},
  {id: 5, name: 'Paul', faculty:'Science', address: '95 Essex Road', phone:'070 5940 2054', email:'lbahaa.avcr@gmail.com'},
  {id: 6, name: 'Louis', faculty:'Music & Art', address: '23 Spilman Street', phone:'079 7545 2867', email:'ihuongo@gmail.com'},
  {id: 7, name: 'Isidro', faculty:'Architect', address: '15 Stroud Road', phone:'070 1108 0335', email:'malishba.malik.74@outlook.com'},
  {id: 8, name: 'Keiran', faculty:'Social', address: '7 Helland Bridge', phone:'078 8410 5822', email:'vcanada.201@gmail.com'},
  {id: 9, name: 'Johnathan', faculty:'Business', address: '96 Sutton Wick Lane', phone:'051 5243 0851', email:'gypatchica@gmail.com'},
  {id: 10, name: 'Ben', faculty:'I.T', address: '30 Iffley Road', phone:'078 7827 1949', email:'cjuniormora@comcast.net'},
  {id: 11, name: 'Liam', faculty:'Business', address: '97 Caxton Place', phone:'070 8817 7427', email:'jose_alvaro-127@gmail.com'},
  {id: 12, name: 'Ray', faculty:'Social', address: '45 Tadcaster Road', phone:'077 8024 3133', email:'nusrat12257@outlook.com'}
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
