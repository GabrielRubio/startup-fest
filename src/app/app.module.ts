import { environment } from '../environments/environment';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { BarRatingModule } from "ngx-bar-rating";

// services
import { StartupsService } from './providers/startups.service';

// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { StartupPageComponent } from './pages/startup-page/startup-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HeaderComponent } from './components/header/header.component';
import { StartupCardComponent } from './components/startup-card/startup-card.component';
import { StartupDetailsComponent } from './components/startup-details/startup-details.component';
import { StartupListComponent } from './components/startup-list/startup-list.component';
import { StarReviewComponent } from './components/star-review/star-review.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { RankingItemComponent } from './components/ranking-item/ranking-item.component';


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
    StarReviewComponent,
    RankingComponent,
    RankingItemComponent
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
    MatGridListModule,
    BarRatingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    GraphQLModule,
    HttpClientModule
  ],
  providers: [StartupsService, {provide: FirestoreSettingsToken, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
