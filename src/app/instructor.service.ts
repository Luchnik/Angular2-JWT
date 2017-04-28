import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';

import { API_URL } from './app.constants';

@Injectable()
export class InstructorService {

  constructor(private authHttp: AuthHttp) { }

  getInstructors(): Observable<Response> {
    return this.authHttp.get(`${API_URL}/instructors`);
  }

  addInstructor(data): Observable<Response> {
    return this.authHttp.post(`${API_URL}/instructors`, data);
  }

}
