import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SubmitComponent } from './submit/submit.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { StatisticComponent } from './statistic/statistic.component';
import { ErrorComponent } from './error/error.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MagTableComponent } from './mag-table/mag-table.component';
import { ChartsModule } from 'ng2-charts';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { TeacherTableComponent } from './teacher-table/teacher-table.component';
import { ArticleComponent } from './article/article.component';
import { DetailComponent } from './detail/detail.component';
import { EventComponent } from './event/event.component';
import { EventCreateComponent } from './event-create/event-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SubmitComponent,
    StatisticComponent,
    ErrorComponent,
    DataTableComponent,
    MagTableComponent,
    RegisterComponent,
    ProfileComponent,
    TeacherTableComponent,
    ArticleComponent,
    DetailComponent,
    EventComponent,
    EventCreateComponent, 
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFileUploaderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
