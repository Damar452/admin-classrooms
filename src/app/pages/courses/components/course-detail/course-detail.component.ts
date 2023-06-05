import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/models/bussiness/course.type';
import { Student } from 'src/app/core/models/bussiness/student.type';
import { TableHeader } from 'src/app/core/models/table.type';
import { CoursesService } from 'src/app/core/services/bussiness/courses/courses.service';
import { StudentsService } from 'src/app/core/services/bussiness/students/students.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  public courseData!: Course | undefined;
  public students!: Observable<Student[]>;
  public tableHeader: TableHeader[] = [];
  private idCourse = this.activatedRoute.snapshot.params['id'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.getCourseData();
    this.getStudentsById();
    this.setTableHeader();
  }

  private getCourseData() {
    this.coursesService.getCourseById(Number(this.idCourse)).subscribe(course => {
      this.courseData = course;
      console.log(this.courseData)
    })
  }

  private getStudentsById() {
    this.students = this.studentsService.getStudentsByCourseId(Number(this.idCourse));
  }

  private setTableHeader() {
    this.tableHeader = [
      {
        title: 'Name',
        name: 'name'
      },
      {
        title: 'Age',
        name: 'age'
      },
      {
        title: 'Gender',
        name: 'gender'
      }
    ]
  }

}
