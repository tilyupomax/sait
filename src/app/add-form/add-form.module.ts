import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddFormComponent } from './add-form.component';
import { AddFormRoutes } from './add-form.routing';
import { MaterialModule } from '../material.module';
import { FormGuard } from '../candeactivate.guard';

@NgModule({
  imports: [
    CommonModule,
    AddFormRoutes,
    FormsModule,
    MaterialModule
  ],
  declarations: [AddFormComponent]
})

export class AddFormModule {
}
