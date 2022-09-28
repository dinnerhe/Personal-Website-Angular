import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  pass(): boolean{
    /*
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)) //use for check cors
    let a = undefined;
    this.http.get('https://localhost:7280/WeatherForecast').subscribe(data =>console.log(data));

     */
    return localStorage.getItem('jwt') !== null;

  }

  getResource():void{
    this.http.get('https://localhost:7280/WeatherForecast').subscribe(data =>console.log(data));
  }

  login(username: string, password: string){
    let a = "";
    this.http.post<any>('https://localhost:7280/api/Admin/login', {username, password}).subscribe((data) => {
      a = data.jwt;
      localStorage.setItem('jwt', data.jwt);
      console.log(a);
    });


  }

}
