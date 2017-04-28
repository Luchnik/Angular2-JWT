import { Component } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map'

import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-new-instructor',
  templateUrl: './new-instructor.component.html',
  styleUrls: ['./new-instructor.component.css']
})
export class NewInstructorComponent {

  instructor: any;
  errorMessage: string;

  constructor(private instructorService: InstructorService, private location: Location) { }

  addInstructor(data) {
    this.instructorService.addInstructor(data)
      .map(res => res.json())
      .subscribe(
        data => this.goBack(),
        error => this.errorMessage = error.json().message
      )
  }

  goBack() {
    this.location.back()
  }

}
