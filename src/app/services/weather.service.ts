import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='8c97454008603c6ed84ee2398d4e494f';
  URI: string='';

  constructor(private http: HttpClient) {

    this.URI = `https://api.openweathermap.org/data/2.5/weather?q=santiago,cl&appid=${this.apiKey}&units=metric&q=`

   }

   getWeather(cityName:string, countryCode:string){
    
      return this.http.get(`${this.URI}${cityName},${countryCode}`);

   }
}
