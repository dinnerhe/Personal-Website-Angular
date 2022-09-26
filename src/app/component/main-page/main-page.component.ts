import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
  }

  emailme(){
    window.open('mailto:test@example.com?subject=subject&body=body');
  }
}
