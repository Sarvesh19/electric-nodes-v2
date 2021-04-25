import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { UserLoginService } from '../service/user-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	loading :boolean = false;

  constructor(private router : Router,private userLoginService : UserLoginService) { }

  register: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    //user_city: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    //security1_ans: new FormControl('', Validators.required),
    //security2_ans: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
	phone: new FormControl('')  
    

  });

  ngOnInit(): void {
  }

  routeHome(){
        this.router.navigate(['intro']);

  }

  registerFunc(event : any){
  		//this.notFilled = false;
  		this.loading = true;
  	    //this.register.value.password = CryptoJS.AES.encrypt("sarvesh", this.register.value.password.trim()).toString();  
 
  	    if(!this.register.valid){
  	    	//this.notFilled = true;
  	    	return ;
  	    }

  	    this.register.value.password = btoa(this.register.value.password.trim());  

  		this.userLoginService.registerUser(this.register.value).subscribe(data => {
			//this.trendTwitter = data.status;
			//this.isSent = true;
			localStorage.setItem('username',data.email);
          let tokenStr= 'Bearer '+'token1';
          localStorage.setItem('token', tokenStr);
			       localStorage.setItem('currentUser', JSON.stringify(data));
			this.loading = false;
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
