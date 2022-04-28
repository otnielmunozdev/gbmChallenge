import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataTypeView:boolean = true;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  typeView(){
    this.authService.isAuthenticated$.subscribe((datum)=>{
      if(datum){
        this.dataTypeView = !this.dataTypeView;
        console.log("Access Allowed");
      } else {
        console.log("Access Denied");
      }
    });
    
  }

}
