import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gradeList, sessionList, subGroupList } from 'src/app/core/consts/data-select.consts';
import { Grade, Session, SubGroup } from 'src/app/core/models/bussiness/course.type';
import { CoursesService } from 'src/app/core/services/bussiness/courses/courses.service';
import { AlertsService } from 'src/app/core/services/utilities/alerts.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  public createForm!: FormGroup;
  public grades: Grade[] = gradeList;
  public subgroups: SubGroup[] = subGroupList;
  public sessions: Session[] = sessionList;

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private router: Router,
    private alertService: AlertsService
  ) { }

  ngOnInit(): void {
    this.initializeCreateForm();
  }

  public saveCourse() {
    const { grade, subGroup } = this.createForm.value;
    this.createForm.get('name')?.setValue(`${grade} ${subGroup}`);
    this.coursesService.saveCourse(this.createForm.value).subscribe( saved => {
      if(saved){
        this.alertService.successAlert('¡Course saved successfully!');
        this.router.navigate(['/courses']);
      }
    });
  }

  private initializeCreateForm() {
    this.createForm = this.fb.group({
      id: [''],
      name: [''],
      director: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      subGroup: ['', [Validators.required]],
      session: ['', [Validators.required]],
    });
  }

  public getValidation(controlName: string, validator: string) {
    const control = this.createForm.get(controlName);
    return control?.touched && control.hasError(validator);
  }

}
