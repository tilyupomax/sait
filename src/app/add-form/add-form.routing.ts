import { Routes, RouterModule } from '@angular/router';
import { AddFormComponent } from './add-form.component';
import { FormGuard } from '../candeactivate.guard';

const routes: Routes = [
  {  path: '', component: AddFormComponent,
    canDeactivate: [FormGuard]},
];

export const AddFormRoutes = RouterModule.forChild(routes);
