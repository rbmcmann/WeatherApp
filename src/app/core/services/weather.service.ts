//@ts-nocheck
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../../environments/environment';
import { Weather, WeatherData } from '../../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    console.log(APP_CONFIG);
    return this.http.get<WeatherData>(APP_CONFIG.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          APP_CONFIG.XRapidAPIHostHeaderName,
          APP_CONFIG.XRapidAPIHostHeaderValue
        )
        .set(
          APP_CONFIG.XRapidAPIKeyHeaderName,
          APP_CONFIG.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}