import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { genderList } from 'src/app/core/consts/data-select.consts';
import { Course } from 'src/app/core/models/bussiness/course.type';
import { Gender } from 'src/app/core/models/bussiness/student.type';
import { CoursesService } from 'src/app/core/services/bussiness/courses/courses.service';
import { StudentsService } from 'src/app/core/services/bussiness/students/students.service';
import { AlertsService } from 'src/app/core/services/utilities/alerts.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit, OnDestroy {

  public createForm!: FormGroup;
  public genders: Gender[] = genderList;
  public courses!: Observable<Course[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private studentService: StudentsService,
    private router: Router,
    private alertService: AlertsService
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.initializeCreateForm();
  }

  public saveStudent(): void {
    this.studentService.saveStudent(this.createForm.value)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(saved => {
      if (saved) {
        this.alertService.notifyAlert('¡Student saved successfully!', 'success');
        this.router.navigate(['/students']);
      }
    });
  }

  public getValidation(controlName: string, validator: string): boolean | undefined {
    const control = this.createForm.get(controlName);
    return control?.touched && control.hasError(validator);
  }

  private getCourses(): void {
    this.courses = this.coursesService.getCourses();
  }

  private initializeCreateForm(): void {
    this.createForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(); //It is terminated since it is not a real http request
    this.unsubscribe$.complete();
  }
}
