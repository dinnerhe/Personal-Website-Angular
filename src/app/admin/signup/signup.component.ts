import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup_form = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.pattern("[a-z|A-Z]+")]),
    password: new FormControl('', Validators.required)
  })
  constructor(private router:Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  signup() {
    const form_value = this.signup_form.value;
    console.log(this.signup_form.value);

    if (form_value['username'] && form_value['password']) {
      this.auth.signup(form_value['username'], form_value['password']);
    }
  }
  get signupFormControl() {
    return this.signup_form.controls;
  }

}
