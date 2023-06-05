import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseDetailComponent,
    CourseCreateComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
