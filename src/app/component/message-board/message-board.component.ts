import { Component, OnInit } from '@angular/core';
import $ from "jquery";
@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {
  message_exist = false;
  message_content: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  submitMessage(msg: string){
    this.message_content = msg;
    if(this.message_content !== ""){
      alert("Submitted!");
      this.message_exist = true;
      //$(".message").text(this.message_content);
      console.log(this.message_content);
    }else{
      this.message_exist = false;
    }

  }

}
