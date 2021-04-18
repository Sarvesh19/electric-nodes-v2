import { Component, OnInit,DoCheck,Injectable } from '@angular/core';
import {Message}              from '../data/message';
import {AppDataService}       from '../service/appdata.service';
import {WebSocketService}     from '../service/websocket.service';

const WEBSOCKET_URL = 'ws://electricnodes-env-2.eba-ucms2ear.ap-south-1.elasticbeanstalk.com/websocket';
//const WEBSOCKET_URL = 'ws://localhost:5000/websocket';

@Component({
  selector: 'app-chatstream',
  templateUrl: './chatstream.component.html',
  styleUrls: ['./chatstream.component.css']
})


export class ChatstreamComponent implements OnInit  {


  

  message: string = ''; 
  publishedMessage: Message[] = new Array();
  showTypingIndicator: boolean = false;
  typingUser: any;
  loggedinUserId: number;
  websocket: WebSocket;

  constructor(private appDataService: AppDataService,
              private websocketService: WebSocketService) {
    this.websocket = this.websocketService.createNew();
    this.loggedinUserId = this.appDataService.userId;
    this.startListening();
  }

  ngOnInit(): void {
  }

  startListening() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'MESSAGE') {
        this.publishedMessage.push(message);
      } else if (message.type == 'TYPING') {
        if (message.from != this.loggedinUserId) {
          this.showUserTypingIndicator(message.fromUserName);
        }
      }
    };
  }

  sendMessage() {
    let msg = this.message;
    if (msg == '' || msg == undefined) return;

    

    let message: Message = {
      type: 'MESSAGE',
      from: this.appDataService.userId,
      fromUserName: this.appDataService.userName,
      message: msg
    }
    this.websocket.send(JSON.stringify(message));
    this.message = '';
  }

  sendTypeIndicator() {
//   	if (!this.isOpen()){
// this.websocket.onclose = function(e) {
//     console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
//     setTimeout(function() {
      
//     }, 1000);
//   };
//   this.connect();

		    

// 		console.info("Reconnecting Successful..");
// 	}
    let message: Message = {
      type: 'TYPING',
      from: this.appDataService.userId,
      fromUserName: this.appDataService.userName,
      message: ''
    }
    this.websocket.send(JSON.stringify(message));
  }

  showUserTypingIndicator(userName: string) {
    this.typingUser = userName;
    this.showTypingIndicator = true;
    setTimeout(() => {
      this.hideUserTypingIndicator();
    }, 1000);
  }

  hideUserTypingIndicator() {
    if (this.showTypingIndicator) {
      this.showTypingIndicator = false;
    }
  }

    

     isOpen() { return this.websocket.readyState === this.websocket.OPEN }


     connect() {
  		this.websocket = new WebSocket(WEBSOCKET_URL);
  		this.websocket.onopen = function() {
    	// subscribe to some channels
    //	this.websocket.send(JSON.stringify({
        //.... some message the I must send when I connect ....
    //}));
  };
}





}
