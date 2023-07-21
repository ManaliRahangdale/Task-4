import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartFormationFormComponent } from './chart-formation-form/chart-formation-form.component';
import { FormsModule } from '@angular/forms'; 
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
Chart.register(...registerables);


@NgModule({
  declarations: [
    AppComponent,
    ChartFormationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
