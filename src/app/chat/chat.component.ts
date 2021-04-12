import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../service/appdata.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  loggedInUser: String;

constructor(private appDataService: AppDataService) {
    this.loggedInUser = appDataService.userName;
  }
  ngOnInit(): void {
  }

}
