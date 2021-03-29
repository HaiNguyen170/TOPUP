import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MagTableComponent } from './mag-table/mag-table.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SubmitComponent } from './submit/submit.component';
import { RegisterComponent } from './register/register.component';
import { TeacherTableComponent } from './teacher-table/teacher-table.component';
import { ArticleComponent } from './article/article.component';
import { DetailComponent } from './detail/detail.component';
import { EventComponent } from './event/event.component';
import { EventCreateComponent } from './event-create/event-create.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Login', component: LoginComponent},
  {path:'Submit/:year', component: SubmitComponent},
  {path:'Statistic', component: StatisticComponent},
  {path:'Error', component: ErrorComponent},  
  {path:'Table', component: DataTableComponent}, 
  {path:'Mag-Table', component: MagTableComponent}, 
  {path:'Register', component: RegisterComponent },
  {path:'Teach', component: TeacherTableComponent},
  {path:'Article', component:ArticleComponent},
  {path:'Detail/:id', component:DetailComponent},
  {path:'Event', component:EventComponent},
  {path:'Create', component:EventCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
