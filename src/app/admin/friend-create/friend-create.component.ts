import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friend-create',
  templateUrl: './friend-create.component.html',
  styleUrls: ['./friend-create.component.scss']
})
export class FriendCreateComponent implements OnInit {

  friend_form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(private service: FriendsService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    /*
    if(form_value['first_name'] && form_value['last_name'] && form_value['email']){
      let a = this.service.createFriend(form_value['first_name'], form_value['last_name'], form_value['email']);
      console.log(a);
      a.subscribe({
        next: (data) => {
          alert("Create Success!")
          this.router.navigate(['admin/dashboard']);
        },
        error: (error)=> {
          console.error(error);
          alert(error.error.message);
        }
      });
    }
    */
    const form_value = this.friend_form.value;
    if(form_value['first_name'] && form_value['last_name'] && form_value['email']){
      let a = this.service.createFriend(form_value['first_name'], form_value['last_name'], form_value['email']);
      a.subscribe({
        next: (data) => {
          alert("Create Success!")
          this.router.navigate(['admin/dashboard']);
        },
        error: (error)=> {
          console.error(error);
          alert(error.error.message);
        }
      });
    }
    
  }

  get friendFormControl(){return this.friend_form.controls;}
}
