import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 //Backend server Address
 weatherURL: string = "http://localhost:3000/weather";
  constructor(private httpClient: HttpClient) { }
getWeather(weather:any){
  return this.httpClient.post<{ result: any }>(this.weatherURL, weather);
}
}
