import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public idStudent = this.activatedRoute.snapshot.params['id'];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private studentService: StudentsService,
    private router: Router,
    private alertService: AlertsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.initializeCreateForm();
    this.idStudent && this.getStudent();
  }

  public saveStudent(): void {
    const form = this.createForm.value;
    this.studentService.saveStudent({ ...form, courseId: Number(form.courseId) })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(saved => {
        saved && this.alertRedirect('¡Student saved successfully!')
      });
  }

  public updateStudent(): void {
    const form = this.createForm.value;
    this.studentService.updateStudent({ ...form, courseId: Number(form.courseId) })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(saved => {
        saved && this.alertRedirect('¡Student updated successfully!')
      });
  }

  private alertRedirect(alertText: string) {
    this.alertService.notifyAlert(alertText, 'success');
    this.router.navigate(['/students']);
  }

  public getValidation(controlName: string, validator: string): boolean | undefined {
    const control = this.createForm.get(controlName);
    return control?.touched && control.hasError(validator);
  }

  private getStudent() {
    this.studentService.getStudentById(Number(this.idStudent))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((student) => {
        this.createForm.patchValue(student!);
      });
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
      courseId: [undefined, [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(); //It is terminated since it is not a real http request
    this.unsubscribe$.complete();
  }
}
