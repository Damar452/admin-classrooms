import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { studentsKey } from 'src/app/core/consts/storage-keys.consts';
import { Student } from 'src/app/core/models/bussiness/student.type';
import { LocalStorageService } from '../../utilities/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private localStorageService: LocalStorageService) { }

  get localData(): Student[] {
    return this.localStorageService.getData(studentsKey)! || [];
  }

  public getStudents(): Observable<Student[]> {
    return of(this.localData);
  }

  public getStudentsByCourseId(id: number): Observable<Student[]> {
    return of(this.localData!.filter( student => student.courseId === id ) || []);
  }

  public saveStudent(data: Student): Observable<boolean> {
    const newStudents = [...this.localData, data];
    this.localStorageService.setData(studentsKey, newStudents);
    return of(true);
  }

  public removeStudent(id: number): Observable<boolean> {
    const newStudents = this.localData.filter( student => student.id !== id);
    this.localStorageService.setData(studentsKey, newStudents);
    return of(true);
  }
}
