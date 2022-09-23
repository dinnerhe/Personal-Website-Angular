import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  isShowingHidden = false;
  constructor() {
    this.isShowingHidden= false;
  }
  ngOnInit(): void {

  }

  changeHidden(): void{
    this.isShowingHidden = !this.isShowingHidden;
    console.log("Clicked: " + this.isShowingHidden);
  }



}
