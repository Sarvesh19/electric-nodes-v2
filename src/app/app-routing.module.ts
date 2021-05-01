import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {IntroComponent} from './intro/intro.component';
import { SignupComponent } from './signup/signup.component';
import {ChatComponent}        from './chat/chat.component';
import {HomeComponent}        from './home/home.component';
import {AuthGuard} from './auth-service';
import {HeadingComponent}  from './heading/heading.component';
import { ProfileComponent } from './profile/profile.component'
import {UserHomeComponent} from './user-home/user-home.component'
import {EmailconfirmComponent} from './emailconfirm/emailconfirm.component'




const routes: Routes = [
	{ path: 'login', component: LoginComponent },
  { path: 'intro', component: IntroComponent },
      { path: 'signup', component: SignupComponent },
      {path: 'chat', component: ChatComponent},
      {path: 'header', component: HeadingComponent},
       
      
       {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},

    //children: [
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path: 'home-user', component: UserHomeComponent},
      {path: 'emailconfirmation', component: EmailconfirmComponent},
       
   // ]
    // },
        
      

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
