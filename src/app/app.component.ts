
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Inject,OnInit } from '@angular/core';
import { SE } from './directives/scroll.directive';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
// import {
//   NgcCookieConsentService,
//   NgcNoCookieLawEvent,
//   NgcInitializeEvent,
//   NgcStatusChangeEvent,
// } from "ngx-cookieconsent";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy,OnInit {

   

  contactFabButton: any;
  bodyelement: any;
  sidenavelement: any;

  isActive = false;
  isActivefadeInDown = true;
  fixedTolbar = true;

	mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(@Inject(DOCUMENT) document, changeDetectorRef: ChangeDetectorRef,
   media: MediaMatcher, public dialog: MatDialog, private router :Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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

  ngOnInit(){
     let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#164969"
           },
           button: {
             background: "#ffe000",
             text: "#164969"
           }
         },
         theme: "classic",
         content: {
           message: "This website uses cookies to ensure you get the best experience on our website.",
           dismiss: "Got it!",
           link: "Learn more",
           href:   "https://www.cookiesandyou.com/",
           close: '&#x2drc;' ,
           allow: 'Allow cookies',
           deny: 'Decline',
         }
       });
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
        this.router.navigate(['']);

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