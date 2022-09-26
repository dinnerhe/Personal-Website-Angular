import { Component, OnInit } from '@angular/core';
import $ from "jquery";
@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {
  message_exist = false;
  message_content: { time: string; message: string; }[] | undefined;
  constructor() { }

  ngOnInit(): void {
    let local_history =  localStorage.getItem("msg_history");
    if(local_history == null) this.message_content = undefined;
    else this.message_content = JSON.parse(local_history);
  }

  submitMessage(msg: string){
    if(msg !== ""){
      alert("Submitted!");
      let message_history = localStorage.getItem("msg_history");
      let cur = new Date(Date.now());
      let mbuf = {time: cur.toLocaleString('en-US'), message: msg};
      if(message_history == null) {
        let lbuf = [mbuf];
        localStorage.setItem("msg_history", JSON.stringify(lbuf));
        console.log(lbuf);
        this.message_content = lbuf;
      }else{
        let j_hisotory = JSON.parse(message_history);
        j_hisotory.push(mbuf);
        console.log(j_hisotory);
        localStorage.setItem("msg_history", JSON.stringify(j_hisotory));
        this.message_content = j_hisotory;
      }
    }

  }
  clearMessageStorage(){
    if(confirm("Clear all history messages?")){
      localStorage.removeItem("msg_history");
      this.message_content = undefined;
    }
  }
}
