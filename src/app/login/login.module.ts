import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes,
    MaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
