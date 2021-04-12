import { Component, OnInit } from '@angular/core';
import {Message}              from '../data/message';
import {AppDataService}       from '../service/appdata.service';
import {WebSocketService}     from '../service/websocket.service';
@Component({
  selector: 'app-chatstream',
  templateUrl: './chatstream.component.html',
  styleUrls: ['./chatstream.component.css']
})
export class ChatstreamComponent implements OnInit {


  

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

}
