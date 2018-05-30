import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutes } from './app.routing';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MaterialModule } from './material.module';
import { PositionGuard } from './canactivate.guard';
import { FormGuard } from './candeactivate.guard';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutes,
    MaterialModule
  ],
  providers: [PositionGuard, FormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
