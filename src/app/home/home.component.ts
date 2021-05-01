import {Router, RoutesRecognized}         from '@angular/router';

import { filter, pairwise } from 'rxjs/operators';
import {SidebarService} from '../service/sidebar.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Inject,OnInit } from '@angular/core';
import { SE } from '../directives/scroll.directive';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { DOCUMENT } from '@angular/common';
import { UserLoginService } from '../service/user-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	contactFabButton: any;
  bodyelement: any;
  sidenavelement: any;

  isActive = false;
  isActivefadeInDown = true;
  fixedTolbar = true;

	mobileQuery: MediaQueryList;
username : any;
  private _mobileQueryListener: () => void;
	counter = 0;

	

messageReceived: any;
        private subscriptionName: any; 
    constructor(private sidebarService: SidebarService,@Inject(DOCUMENT) document, changeDetectorRef: ChangeDetectorRef,
   media: MediaMatcher, public dialog: MatDialog, private router :Router,private userLoginService : UserLoginService) {
this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);


// subscribe to sender component messages
            this.subscriptionName= this.sidebarService.getUpdate().subscribe
             (message => { //message contains the data sent from service
             this.messageReceived = message;
             });   

              }

   

  ngOnInit(): void {
  	this.username = localStorage.getItem('username');
  	console.info("ccw");

  	      this.userLoginService.getProfile().subscribe(data => {
  	      	console.info(data);
  	      	this.username = data + ", "+ this.username;
  	      })



  }

  public detectScroll(event: SE) {
    
    if (event.header) {
      this.isActive = false;
      this.isActivefadeInDown = true;
      this.fixedTolbar = true;
    }
    
    if (event.bottom) {
      this.isActive = true;
      this.isActivefadeInDown  = false;
      this.fixedTolbar = false;
    }
    
  }

   openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '250px'
    });
  }

  setToggleOn(){

    this.bodyelement = document.getElementById('nglpage');
    this.bodyelement.classList.add("scrollOff");
    this.contactFabButton = document.getElementById('contact-fab-button');
    this.contactFabButton.style.display = "none";
    
  }

  routeHome(){
        this.router.navigate(['home']);

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('confirmEmail');
    localStorage.removeItem('username');
	localStorage.removeItem('token');

    
    this.router.navigate(['login']);
    

  }
  goProfile(){
  	this.router.navigate(['profile']);
  }

  routeBack(){
  	//this.router.navigate(['login']);
  }

  setToggleOff(){
    
    this.bodyelement = document.getElementById('nglpage');
    this.bodyelement.classList.remove("scrollOff");
    this.contactFabButton = document.getElementById('contact-fab-button');
    this.contactFabButton.removeAttribute("style");

  }

  routeSignup(){
            this.router.navigate(['/signup']);

  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
