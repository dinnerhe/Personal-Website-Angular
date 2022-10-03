import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router) { }

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



  login(username: string, password: string){
    this.http.post<any>('https://localhost:7280/api/Admin/login', {username, password}).subscribe({
      next: (data) => {
          localStorage.setItem('jwt', data.jwt);
          console.log(data.jwt);
        this.router.navigate(['admin/dashboard']);
        },
      error: (error)=> {
          console.error(error);
          alert(error.error.message);
        }
      });
  }

  signup(username: string, password: string){
    this.http.post<any>('https://localhost:7280/api/Admin/signup', {username, password}).subscribe({
      next: (data) => {
        alert("Signup Success!")
        this.router.navigate(['admin/dashboard']);
      },
      error: (error)=> {
        console.error(error);
        alert(error.error.message);
      }
    });
  }


}
