import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_form = new FormControl('');
  constructor(private auth: AuthService) { }

  ngOnInit(): void {


  }

  getresource(){
    this.auth.getResource();

  }

  login(){
    this.auth.login("a", 'b');
  }
}
