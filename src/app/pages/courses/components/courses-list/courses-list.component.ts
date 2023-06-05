import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Course } from 'src/app/core/models/bussiness/course.type';
import { TableHeader } from 'src/app/core/models/table.type';
import { CoursesService } from 'src/app/core/services/bussiness/courses/courses.service';
import { AlertsService } from 'src/app/core/services/utilities/alerts.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public coursesList!: Observable<Course[]>;
  public tableHeader: TableHeader[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(
    private coursesService: CoursesService,
    private alertsService: AlertsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.setTableHeader();
  }

  public addCourse() {
    this.router.navigate(['/courses/create']);
  }

  public viewCourse(id: number) {
    this.router.navigate(['/courses/detail', id]);
  }

  public async removeCourse(id: number) {
    const { isConfirmed } = await this.alertsService.confirmAlertDelete('Course');
    isConfirmed && this.coursesService.deleteCourse(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(resp => {
        if (resp) {
          this.alertsService.notifyAlert('¡Course successfully deleted!', 'success');
          this.getCourses();
        }
      });
  }

  private getCourses() {
    this.coursesList = this.coursesService.getCourses();
  }

  private setTableHeader() {
    this.tableHeader = [
      { title: 'Name', name: 'name' },
      { title: 'Director', name: 'director' },
      { title: 'Session', name: 'session' }
    ]
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
