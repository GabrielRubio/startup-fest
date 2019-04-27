import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StartupPageComponent } from './pages/startup-page/startup-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  // Home page
  {
      path: '',
      component: HomePageComponent
  },
  // Startups details
  {
      path: 'startup/:id',
      component: StartupPageComponent
  },
  // Results 
  {
      path: 'results',
      component: ResultsPageComponent
  },
  // Handing error 404
  {
      path: '**',
      component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
