import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dash: DashboardService) { }

  ngOnInit(): void {
  }

  getresource(){
    this.dash.getResource();
  }
}
