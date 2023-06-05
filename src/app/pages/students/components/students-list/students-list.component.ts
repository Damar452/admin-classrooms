import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Student } from 'src/app/core/models/bussiness/student.type';
import { TableHeader } from 'src/app/core/models/table.type';
import { StudentsService } from 'src/app/core/services/bussiness/students/students.service';
import { AlertsService } from 'src/app/core/services/utilities/alerts.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit, OnDestroy {

  public studentsList!: Observable<Student[]>;
  public tableHeader: TableHeader[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(
    private studentsService: StudentsService,
    private alertsService: AlertsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStudents();
    this.setTableHeader();
  }

  public addStudent() {
    this.router.navigate(['/students/create']);
  }

  public editStudent(id: number) {
    this.router.navigate(['/students/edit', id]);
  }

  public async removeStudent(id: number): Promise<void> {
    const { isConfirmed } = await this.alertsService.confirmAlertDelete('Student');
    if (isConfirmed) {
      this.studentsService.removeStudent(id).pipe(takeUntil(this.unsubscribe$))
        .subscribe((resp: boolean) => {
          if (resp) {
            this.getStudents();
            this.alertsService.notifyAlert('Student successfully removed!', 'success');
          }
        });
    }
  }

  private getStudents() {
    this.studentsList = this.studentsService.getStudents();
  }

  private setTableHeader() {
    this.tableHeader = [
      { title: 'Name', name: 'name' },
      { title: 'Age (years)', name: 'age' },
      { title: 'Gender', name: 'gender' }
    ]
  }

  ngOnDestroy(): void {
     //It is terminated since it is not a real http request
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
