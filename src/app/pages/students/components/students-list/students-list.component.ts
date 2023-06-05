import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/bussiness/student.type';
import { TableHeader } from 'src/app/core/models/table.type';
import { StudentsService } from 'src/app/core/services/bussiness/students/students.service';
import { AlertsService } from 'src/app/core/services/utilities/alerts.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  public studentsList!: Observable<Student[]>;
  public tableHeader: TableHeader[] = [];

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

  public viewStudent(id: number) {
    this.router.navigate(['/students/detail', id]);
  }

  public async removeStudent(id: number) {
    const { isConfirmed } = await this.alertsService.confirmAlertDelete('Student');
    isConfirmed && this.studentsService.removeStudent(id).subscribe( (resp: boolean) => {
      if (resp) {
        this.getStudents();
        this.alertsService.successAlert('Student successfully removed!');
      }
    })
  }

  private getStudents() {
    this.studentsList = this.studentsService.getStudents();
  }

  private setTableHeader() {
    this.tableHeader = [
      {
        title: 'Name',
        name: 'name'
      },
      {
        title: 'Age (years)',
        name: 'age'
      },
      {
        title: 'Gender',
        name: 'gender'
      }
    ]
  }

}
