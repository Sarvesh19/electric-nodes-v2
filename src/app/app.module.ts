import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from './directives/directives.module';
import { Material2Module } from './material2.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HeadingComponent } from './heading/heading.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { SignupComponent } from './signup/signup.component';
import { ChatstreamComponent } from './chatstream/chatstream.component';
import { UserComponent } from './user/user.component';
import { ChatComponent } from './chat/chat.component';
import {NgxWebstorageModule}  from 'ngx-webstorage';
import {AppService}           from './service/app.service';
import {XHRHandler}           from './service/xhrhandler.service';
import {AppDataService}       from './service/appdata.service';
import {WebSocketService}     from './service/websocket.service';
import {HttpClientModule,HTTP_INTERCEPTORS,HttpClientJsonpModule}     from '@angular/common/http';
// import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { environment } from './../environments/environment';
import  {AuthGuard} from './auth-service';
import {SidebarService} from './service/sidebar.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { EmailconfirmComponent } from './emailconfirm/emailconfirm.component';
import { AuthHtppInterceptorService } from './auth-intercepter.service';

// const cookieConfig:NgcCookieConsentConfig = {
//   cookie: {
//     domain: environment.cookieDomain  // or 'your.domain.com' 
//   },
//   palette: {
//     popup: {
//       background: '#000'
//     },
//     button: {
//       background: '#f1d600'
//     }
//   },
//   theme: 'edgeless',
//   type: 'opt-out'
// };

//ng g component home/home --module=app.module.ts
// lsof -i:3000
//kill -9 "PID"
//https://toolbox.googleapps.com/apps/dig/#CNAME/


// this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
//     this.router.navigate(['Your actualComponent']);
// }); 



// @HostListener('document:click', ['$event']) onDocumentClick(event) {

//     if (event.target.matches('.request')) {
//       // alert('click to editor div');
//       this.requestBtnLbl = 'Sent';
//       setTimeout(() => {
//         this.requestBtnLbl = 'Request';
//       }, 5000);



//     }
//   }

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    HeadingComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    ContactDialogComponent,
    LoginComponent,
    IntroComponent,
    SignupComponent,
    ChatstreamComponent,
    UserComponent,
    ChatComponent,
    HomeComponent,
    ProfileComponent,
    UserHomeComponent,
    EmailconfirmComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Material2Module,
    FlexLayoutModule,
    DirectivesModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule, 
    MDBBootstrapModule.forRoot(),
        NgxWebstorageModule.forRoot(),
        // NgcCookieConsentModule.forRoot(cookieConfig),

    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AppService, XHRHandler, AppDataService, WebSocketService,AuthGuard, SidebarService,
{
    provide: HTTP_INTERCEPTORS, useClass: AuthHtppInterceptorService, multi: true
  }

  ],
  entryComponents: [ ContactDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
