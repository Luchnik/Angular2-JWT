import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { InstructorComponent } from './instructor/instructor.component';
import { AuthService } from "./auth.service";
import { InstructorService } from './instructor.service';
import { NewInstructorComponent } from './new-instructor/new-instructor.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'instructors/new', component: NewInstructorComponent },
  { path: 'instructors', component: InstructorComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    InstructorComponent,
    NewInstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService, 
    InstructorService,
    provideAuth({
      tokenGetter: () => { return localStorage.getItem('token') }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
