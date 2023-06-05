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
    const saveData = { ...data, id: Math.floor(Math.random() * 100) + 1};
    const newStudents = [...this.localData, saveData];
    this.localStorageService.setData(studentsKey, newStudents);
    return of(true);
  }

  public getStudentById(id: number) {
    const student = this.localData.find( student => student.id === id);
    return of(student);
  }

  public updateStudent(data: Student): Observable<boolean> {
    let updatedArray = this.localData.map( student => {
      if(student.id === data.id) return {...data};
      return student;
    });
    this.localStorageService.setData(studentsKey, updatedArray);
    return of(true);
  }

  public removeStudent(id: number): Observable<boolean> {
    const newStudents = this.localData.filter( student => student.id !== id);
    this.localStorageService.setData(studentsKey, newStudents);
    return of(true);
  }
}
