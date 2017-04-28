import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import * as md5 from 'md5';

import { InstructorService } from '../instructor.service';
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  instructors: any[];
  errorMessage: string;

  constructor(private instructorService: InstructorService, private auth: AuthService) { }

  ngOnInit() {
    this.getInstructors();
  }

  getGravatar(email) {
    return `https://www.gravatar.com/avatar/${md5(email).toLowerCase().trim()}`;
  }

  getInstructors() {
    this.instructorService.getInstructors()
      .map(res => res.json())
      .subscribe(
        data => this.instructors = data,
        error => this.errorMessage = error.json().message
      );
  }

}
