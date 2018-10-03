import { Component, OnInit, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../models/weather-forecast';
import { CityDetails } from '../models/city-details';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  cityDetails: CityDetails;
  @Input() searchText: string;
  constructor(private http: HttpClient) {
    this.cityDetails = {
      cityName : '',
      stateCode : ''
    }
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    //subscribe to weatherbit forecase results here
    this.http.get(this.weatherBitUrl).subscribe( (results: any) => {
      console.log('WEATHER RESULTS ...');
      console.log(results);
      console.log('WEATHER RESULTS ...');
      this.weatherForecasts = results['data'];
      this.cityDetails.cityName = results['city_name'];
      this.cityDetails.stateCode = results['state_code']
    });
  }

  ngOnInit() {
  }

}
