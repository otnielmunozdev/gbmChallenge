import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataTypeView:boolean = true;
  showNotification: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  typeView(){
    this.showNotification = false;
    this.authService.isAuthenticated$.subscribe((datum)=>{
      if(datum){
        this.dataTypeView = !this.dataTypeView;
        console.log("Access Allowed");
      } else {
        this.showNotification = true;
        setTimeout(() => {
    this.showNotification = false;
          
        }, 4000);
        console.log("Access Denied");
      }
    });
    
  }

}
