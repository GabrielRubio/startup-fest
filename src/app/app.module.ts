import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modulos
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

// services
import { StartupsService } from './providers/startups.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { StartupPageComponent } from './pages/startup-page/startup-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { StartupCardComponent } from './components/startup-card/startup-card.component';
import { StartupDetailsComponent } from './components/startup-details/startup-details.component';
import { StartupListComponent } from './components/startup-list/startup-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ResultsPageComponent,
    StartupPageComponent,
    ErrorPageComponent,
    StartupCardComponent,
    StartupDetailsComponent,
    StartupListComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    GraphQLModule,
    HttpClientModule
  ],
  providers: [StartupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
