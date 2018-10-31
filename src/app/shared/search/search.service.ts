import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl= 'http://localhost:8080';
private sudentsUrl= '/students';
private getStudentsbycourseIdurl='/bycourseid/'
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl+this.sudentsUrl);
  }

  get(id: number) {
    return this.http.get(this.baseUrl+this.sudentsUrl+this.getStudentsbycourseIdurl+id);
  }
}

export class Student {
  id: number;
  name: string;
  dob: string;
  courses: [String];

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.dob = obj && obj.phone || null;
    this.courses = obj && obj.address || null;
  }
}
