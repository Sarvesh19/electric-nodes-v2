import { Component, OnInit } from '@angular/core';
import {Router, RoutesRecognized}         from '@angular/router';

import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	username: any;
	previousUrl : any;
  constructor(private router: Router) {
this.router.events
.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
.subscribe((events: RoutesRecognized[]) => {
  console.log('previous url', events[0].urlAfterRedirects);
  console.log('current url', events[1].urlAfterRedirects);
  this.previousUrl = events[0].urlAfterRedirects;
});
   }

  ngOnInit(): void {
  	this.username = localStorage.getItem("username");

  }

  routeBack(){
  	let url :any;
  	if(this.previousUrl !== undefined ){
  		url = this.previousUrl.substring(1);
  	}
  	this.router.navigate(['login']);
  }

}
