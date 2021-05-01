import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl , Validators,FormBuilder} from '@angular/forms';
import { UserLoginService } from '../service/user-service';

import {MustMatch} from '../helper/must-match.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	loading :boolean = false;
	submitted :boolean = false;
	userExist :boolean = false;

  constructor(private router : Router,private userLoginService : UserLoginService,private formBuilder: FormBuilder) { }

  register: FormGroup = this.formBuilder.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    //user_city: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    //security1_ans: new FormControl('', Validators.required),
    //security2_ans: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
	phone: new FormControl('') }, {
            validator: MustMatch('password', 'confirmPassword')
        

    

  });

  ngOnInit(): void {
  }

  private passwordMatcher(control: FormControl): { [s: string]: boolean } {
    if (
        this.register &&
        (control.value !== this.register.controls.password.value)
    ) {
        return { passwordNotMatch: true };
    }
    return { passwordNotMatch: false };
}

  routeHome(){
        this.router.navigate(['intro']);

  }

      get f() { return this.register.controls; }


  registerFunc(event : any){
  		//this.notFilled = false;
  		
  	    //this.register.value.password = CryptoJS.AES.encrypt("sarvesh", this.register.value.password.trim()).toString();  
 	this.submitted  = true;
  	    if(!this.register.valid){
  	    	//this.notFilled = true;
  	    	return ;
  	    }
		this.loading = true;
		this.userExist = false;
  	    this.register.value.password = btoa(this.register.value.password.trim());  

  		this.userLoginService.registerUser(this.register.value).subscribe(data => {
			//this.trendTwitter = data.status;
			//this.isSent = true;
			if(data == null){
				this.userExist = true;
			} else {
					 localStorage.setItem('confirmEmail',data.email);
   //        let tokenStr= 'Bearer '+'token1';
   //        localStorage.setItem('token', tokenStr);
			//        localStorage.setItem('currentUser', JSON.stringify(data));
			this.router.navigate(['emailconfirmation']);
			}

					this.loading = false;


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
