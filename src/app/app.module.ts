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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Material2Module,
    FlexLayoutModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ ContactDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
