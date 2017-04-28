import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import * as jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  person: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.person = jwtDecode(this.auth.getToken());
  }

}
