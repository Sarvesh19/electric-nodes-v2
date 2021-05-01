import { Component, OnInit } from '@angular/core';
import {AppService}     from '../service/app.service';
import {Router}         from '@angular/router';
import {AppDataService} from '../service/appdata.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLoginService } from '../service/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 userName: string = '';
  showErrorMsg: boolean = false;
  loading : boolean = false;
  notvaliduser :boolean = false;
  isSubmitted :boolean =false;

  constructor(private router: Router,
              private appService: AppService,
              private appDataService: AppDataService,private userLoginService : UserLoginService) { 



  }
  ngOnInit(): void {
  	this.doLogin();
  }
form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  routeHome(){
        this.router.navigate(['intro']);

  }

   doLogin() {
    this.appService.userLogin({name: this.userName})
        .subscribe(response => {
          this.appDataService.userId = response.id;
          this.appDataService.userName = response.userName;
          this.router.navigate(['/chat']);
        });
    }

    routeSignUp(){
    	        this.router.navigate(['signup']);

    }

    submit(event: any) {
  //  this.wrongPassword = false;
    //this.mandatory = false;
    this.isSubmitted = true;
    
    let user = { username: this.form.value.username, password: this.form.value.password };

   // this.conversionEncryptPassWord = CryptoJS.AES.encrypt("sarvesh", user.password.trim()).toString();  

    let userencrypt =  { username: this.form.value.username, password: btoa(user.password.trim()) };

    if (this.form.valid) {
    	this.loading = true;
    	this.notvaliduser = false;
      this.userLoginService.getUser(userencrypt).subscribe(data => {
      //this.trendTwitter = data.status;
      //this.isSent = true;
         this.loading = false;

         if(data === null){
         	this.notvaliduser = true;
         }
         this.isSubmitted = false; 

          //sessionStorage.setItem('username',data.email);
          let tokenStr= 'Bearer '+data.token;
          localStorage.setItem('token', tokenStr);
                    localStorage.setItem('username',data.email);

             localStorage.setItem('currentUser', JSON.stringify(data));

      this.router.navigateByUrl('/home'); 

      console.info(data);
      
    },
      (err: any) => {
        // this.wrongPassword = true;
        console.info(err);
        this.loading = false;
      //this.isSent = false;
      }

    )
      // this.submitEM.emit(this.form.value);
    } else {
      // this.mandatory = true;
      // this.loading = false;
    }
  }

}
