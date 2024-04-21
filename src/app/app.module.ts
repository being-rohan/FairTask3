import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairCardsComponent } from './shared/component/fair-cards/fair-cards.component';
import { FairDashboardComponent } from './shared/component/fair-dashboard/fair-dashboard.component';
import { FairDetailsComponent } from './shared/component/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairCardsComponent,
    FairDashboardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
