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
import { AuthService } from "./auth/auth.service";
import { InstructorService } from './instructor.service';
import { NewInstructorComponent } from './new-instructor/new-instructor.component';
import { AuthGuard } from './auth/authguard.service';
import { RoleGuard } from './auth/roleguard.service';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'instructors', component: InstructorComponent, canActivate: [AuthGuard] },
  { path: 'instructors/new', component: NewInstructorComponent, canActivate: [RoleGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
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
    }),
    AuthGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
