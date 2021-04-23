import { Component, OnInit } from '@angular/core';
import {AppService}     from '../service/app.service';
import {Router}         from '@angular/router';
import {AppDataService} from '../service/appdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 userName: string = '';
  showErrorMsg: boolean = false;

  constructor(private router: Router,
              private appService: AppService,
              private appDataService: AppDataService) { }
  ngOnInit(): void {
  	this.doLogin();
  }

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

}
