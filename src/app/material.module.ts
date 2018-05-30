import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [
    MatInputModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatButtonToggleModule
  ],
  providers: [],
  exports: [MatInputModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatButtonToggleModule]
})
export class MaterialModule { }
