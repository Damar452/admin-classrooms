import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'courses',
        loadChildren: () => import('../courses/courses.module').then(m => m.CoursesModule),
      },
      {
        path: 'students',
        loadChildren: () => import('../students/students.module').then(m => m.StudentsModule),
      },
      {
        path: '**',
        redirectTo: 'courses'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
