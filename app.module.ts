import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackinvestmentComponent } from './trackinvestment/trackinvestment.component';
import { TotalinvestmentComponent } from './totalinvestment/totalinvestment.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { PortfolioperformanceComponent } from './portfolioperformance/portfolioperformance.component';
import { AddinvestmentComponent } from './addinvestment/addinvestment.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackinvestmentComponent,
    TotalinvestmentComponent,
    TransactiondetailsComponent,
    PortfolioperformanceComponent,
    AddinvestmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
