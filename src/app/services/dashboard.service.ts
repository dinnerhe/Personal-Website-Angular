import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  getResource():void{
    this.http.get('https://localhost:7280/WeatherForecast').subscribe(data =>console.log(data));
  }

}
