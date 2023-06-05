import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FilterListPipe } from 'src/app/shared/pipes/filter-list/filter-list.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentCreateComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
