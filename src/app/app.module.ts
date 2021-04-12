import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from './directives/directives.module';
import { Material2Module } from './material2.module';

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
import {HttpClientModule}     from '@angular/common/http';

//ng g component intro/intro --module=app.module.ts
// lsof -i:3000
//kill -9 "PID"

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
    ChatComponent
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
        NgxWebstorageModule.forRoot(),

    AppRoutingModule
  ],
  providers: [AppService, XHRHandler, AppDataService, WebSocketService],
  entryComponents: [ ContactDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
