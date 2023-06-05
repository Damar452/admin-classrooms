import { Injectable } from '@angular/core';
import { courseList } from 'src/app/mocks/course.mock';
import { studentList } from 'src/app/mocks/student.mock';
import { coursesKey, studentsKey } from '../../consts/storage-keys.consts';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getData(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public initializeMockData() {
    if(!this.getData(coursesKey)){
      this.setData(coursesKey, courseList);
      this.setData(studentsKey, studentList);
    }
  }

}
