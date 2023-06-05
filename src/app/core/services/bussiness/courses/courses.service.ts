import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coursesKey } from 'src/app/core/consts/storage-keys.consts';
import { Course } from 'src/app/core/models/bussiness/course.type';
import { LocalStorageService } from '../../utilities/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private localStorageService: LocalStorageService) { }

  get localData(): Course[] {
    return this.localStorageService.getData(coursesKey) || [];
  }

  public getCourses(): Observable<Course[]> {
    return of(this.localData);
  }

  public getCourseById(id: number): Observable<Course | undefined> {
    return of(this.localData!.find( course => course.id === id  ));
  }

  public saveCourse(data: Course): Observable<boolean> {
    const saveData = { ...data, id: Math.floor(Math.random() * 100) + 1};
    const newList = [ ...this.localData, saveData ];
    this.localStorageService.setData(coursesKey, newList);
    return of(true);
  }

  public deleteCourse(id: number): Observable<boolean> {
    const newList = this.localData.filter( course => course.id !== id);
    this.localStorageService.setData(coursesKey, newList);
    return of(true);
  }
}
