import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { weatherBit } from '../../environments/environment';
import { WeatherForecast } from '../models/weather-forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  weatherBitUrl: string;
  @Input() weatherForecasts: WeatherForecast[];
  constructor(private http: HttpClient) {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=Chicago,IL&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe( (results: any) => {
    console.log('WEATHER RESULTS ...');
    console.log(results);
    console.log('WEATHER RESULTS ...');
    this.weatherForecasts = results['data'];
  });
  }

  

  ngOnInit() {
  }

}
