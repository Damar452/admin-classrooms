import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: 'list',
        component: CoursesListComponent
      },
      {
        path: 'detail/:id',
        component: CourseDetailComponent
      },
      {
        path: 'create',
        component: CourseCreateComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
