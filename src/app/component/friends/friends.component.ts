import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import * as $ from "jquery";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends: any;
  isAdmin: boolean = false;

  constructor(private service: FriendsService) { 
  }

  async ngOnInit(): Promise<void> {
    await this.getFriends();
    this.isAdmin = localStorage.getItem('jwt') !== null;
  }

  getFriends(){
    let resp = this.service.getFriends();
    resp.subscribe((data) =>{
      this.friends = data;
      console.log(this.friends);
    });
  }

  deleteFriend(id: number){
    if(confirm("Confirm deleting Friend with id " +id + "?")){
      this.service.deleteFriend(id).subscribe((data)=>{
        location.reload();
      });
    }
    
  }

}
