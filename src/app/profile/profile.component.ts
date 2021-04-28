import { Component, OnInit } from '@angular/core';
import {Router}         from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: any;
public files: any[] = [];
  selectedFile: any;
  retrievedImage: any;
partyEntityList : any = [];
isEdit :boolean = false;
btnLabel = 'Edit';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  routeBack(){
  	this.router.navigate(['home']);
  }

  backToHome(){
	this.router.navigate(['home']);
  }

  public onFileChanged(event) {

    this.selectedFile = event.target.files[0];

  }

onUpload() {
  const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.user.email);

  // this.userLoginService.uploadProfileImg(uploadImageData).subscribe(data => {
  // 	console.info();
  // 	if(data.user_img !== null){
  // 	          this.retrievedImage = 'data:image/jpeg;base64,' + data.user_img;

  // 	}

  // });
}

 rating( stars ) {
 	let elem = document.getElementById("rating1") as HTMLElement;
 	let cw = elem.clientWidth; // save original 100% pixel width

  //document.getElementById("rating1").style.width = Math.round(cw * (stars / 5)) + 'px';
}

editUser(){

	if(this.isEdit){
		this.isEdit  =false	
		this.btnLabel = 'Edit';

	} else {
		this.isEdit  =true;
		this.btnLabel = 'Save';

	}


}

public sessionExpired() {
        // remove user from local storage to log user out
         localStorage.removeItem('start');
        localStorage.removeItem('end');
        localStorage.removeItem('distance');
        localStorage.removeItem('currentUser');
                localStorage.removeItem('token');

        localStorage.removeItem('username')
                this.router.navigate(['login']);



    }

}
