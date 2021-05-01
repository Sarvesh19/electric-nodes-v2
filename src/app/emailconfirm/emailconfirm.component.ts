import { Component, OnInit } from '@angular/core';
import {Router}         from '@angular/router';
import { UserLoginService } from '../service/user-service';

@Component({
  selector: 'app-emailconfirm',
  templateUrl: './emailconfirm.component.html',
  styleUrls: ['./emailconfirm.component.css']
})
export class EmailconfirmComponent implements OnInit {
	code :any;
	loading :any;
	notValidConfirmCode :boolean = false;
  constructor( private router :Router, private userLoginService : UserLoginService) { }

  ngOnInit(): void {
  }

  routeSignUp(){
        this.router.navigate(['signup']);

  }

  verify(){
  				 let user_ = localStorage.getItem('confirmEmail');

  	    let user = { username: user_, password: this.code };
  	    this.notValidConfirmCode = false;
  	         this.loading = true;

  	          this.userLoginService.confirmUser(user).subscribe(data => {
		if(!data){
				this.notValidConfirmCode = true;
				this.loading = false;
			return 
		}

  	         this.loading = false;

			let tokenStr= 'Bearer '+data.token;
          localStorage.setItem('token', data.token);

  	           localStorage.setItem('currentUser', JSON.stringify(data));
  	           localStorage.setItem('username', data.email);

  	           
			this.router.navigate(['home']);

			console.info(data);
			
		},
			(err: any) => {
				this.loading = false;
				console.info(err);
			//this.isSent = false;
			}

		)


  }

}
