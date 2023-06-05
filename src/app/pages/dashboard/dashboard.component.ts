import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/models/bussiness/course.type';
import { Student } from 'src/app/core/models/bussiness/student.type';
import { CoursesService } from 'src/app/core/services/bussiness/courses/courses.service';
import { StudentsService } from '../../core/services/bussiness/students/students.service';
import { LocalStorageService } from 'src/app/core/services/utilities/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public sidebarOpen: boolean = true;
  public courses!: Observable<Course[]>;
  public students!: Observable<Student[]>;

  constructor(
    private coursesService: CoursesService,
    private studentsService: StudentsService,
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.storageService.initializeMockData();
    this.getCourses();
    this.getStudents();
  }

  private getCourses() {
    this.courses = this.coursesService.getCourses();
  }

  private getStudents() {
    this.students = this.studentsService.getStudents();
  }

}
