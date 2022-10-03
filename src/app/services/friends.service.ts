import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http:HttpClient) { }

  getFriends(){
    console.log("getting data");
    return this.http.get('https://localhost:7280/api/friend');
  }

  deleteFriend(id: number){
    return this.http.delete('https://localhost:7280/api/friend'+'/' + id);
  }

  createFriend(first_name:string, last_name:string, email:string){
    return this.http.post<any>('https://localhost:7280/api/friend', {firstName: first_name, lastName: last_name, email: email});
  }
}
