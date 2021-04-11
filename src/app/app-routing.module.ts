import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {IntroComponent} from './intro/intro.component';
import { SignupComponent } from './signup/signup.component';




const routes: Routes = [
	{ path: 'login', component: LoginComponent },

    // home route protected by auth guard
    
     

      { path: '', component: IntroComponent },
      { path: 'signup', component: SignupComponent },
   // children: [
   //    { path: 'create-party', component: CreatePartyComponent },
   //    { path: 'search-party', component: RequestPartyComponent }
   //  ]
   //   }


    // otherwise redirect to home
    { path: '**', redirectTo: '' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
