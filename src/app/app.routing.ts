import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormGuard } from './candeactivate.guard';
import { PositionGuard } from './canactivate.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  {
    path: 'home/:id', loadChildren: './home/single-article/single-article.module#SingleArticleModule',
    canActivate: [PositionGuard]
  },
  {
    path: 'add', loadChildren: './add-form/add-form.module#AddFormModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '**', component: NotFoundComponent}
];

export const AppRoutes = RouterModule.forRoot(routes);
