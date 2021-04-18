import { Component, OnInit } from '@angular/core';
import {HostListener}     from '@angular/core';
import {AppService}       from '../service/app.service';
import {User}             from '../data/user';
import {WebSocketService} from '../service/websocket.service';
import {AppDataService}   from '../service/appdata.service';
import {Message}          from '../data/message';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  users: User[] = new Array();
  websocket: WebSocket;

  constructor(private appService: AppService,
              private appDataService: AppDataService,
              private websocketService: WebSocketService) {
    this.websocket = this.websocketService.createNew();
    this.websocket.onopen = (event: any) => {
      let message: Message = {
        type: 'JOINED',
        from: this.appDataService.userId,
        fromUserName: this.appDataService.userName,
        message: ''
      }
      this.websocket.send(JSON.stringify(message));
    }
    this.initUserList();
    this.startListening();
  }

    ngOnInit(): void {
  }

  startListening() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'JOINED') {
        this.setUserStatus(message.from, true);
      } else if (message.type == 'LEFT') {
        this.setUserStatus(message.from, false);
      }
    }
  }

  initUserList() {
    this.appService.listUser().subscribe(response => {
      this.users = response;
      this.setEachUserOnlineOffline();
    });
  }

  setEachUserOnlineOffline() {
    this.users.forEach(user => user.isOnline = false);
  }

  setUserStatus(userId: Number, isOnline: boolean) {
    let user: any = this.users.find(u => u.id == userId);
    user.isOnline = isOnline;
  }

  
}
