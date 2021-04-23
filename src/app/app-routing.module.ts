import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {IntroComponent} from './intro/intro.component';
import { SignupComponent } from './signup/signup.component';
import {ChatComponent}        from './chat/chat.component';




const routes: Routes = [
	{ path: 'login', component: LoginComponent },
  { path: 'intro', component: IntroComponent },
      { path: 'signup', component: SignupComponent },
      {path: 'chat', component: ChatComponent},

    // home route protected by auth guard
    { path: '**', redirectTo: 'intro', pathMatch: 'full' },

     

      
   // children: [
   //    { path: 'create-party', component: CreatePartyComponent },
   //    { path: 'search-party', component: RequestPartyComponent }
   //  ]
   //   }


    // otherwise redirect to home
    { path: '**', redirectTo: 'intro' }



];

@NgModule({
  imports: [    RouterModule.forRoot(routes, { useHash: true })
],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
