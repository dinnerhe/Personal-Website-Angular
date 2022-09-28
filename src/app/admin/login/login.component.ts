import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_form = new FormGroup({
    username_field: new FormControl("", Validators.required),
    password_field: new FormControl('', Validators.required)
  })
  constructor(private router:Router, private auth: AuthService) { }

  ngOnInit(): void {
    if(this.auth.pass()){
      alert("You already logged in");
      this.router.navigate(['admin/dashboard']);
    }

  }

  login() {
    const form_value = this.login_form.value;
    console.log(this.login_form.value);

    if (form_value['username_field'] && form_value['password_field']) {
      this.auth.login(form_value['username_field'], form_value['password_field']);
    }
  }
  get loginFormControl() {
    return this.login_form.controls;
  }


}
