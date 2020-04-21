import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClarityModule } from "@clr/angular";
import { TaskListComponent } from './task-list/task-list.component';
import { NewOrderComponent } from './new-order/new-order.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './_services/auth-service';
import { JwtInterceptor } from './_services/jwt-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NewOrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }