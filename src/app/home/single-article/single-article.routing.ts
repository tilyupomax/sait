import { Routes, RouterModule } from '@angular/router';
import { SingleArticleComponent } from './single-article.component';

const routes: Routes = [
  { path: '', component: SingleArticleComponent},
];

export const SingleArticleRoutes = RouterModule.forChild(routes);
