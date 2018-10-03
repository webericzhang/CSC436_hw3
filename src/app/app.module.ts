import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherForecastListComponent } from './weather-forecast-list/weather-forecast-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    WeatherForecastListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
