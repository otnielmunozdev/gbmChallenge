import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
              public authService: AuthService) {}

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  loginWithRedirect(){
    this.authService.loginWithRedirect();
  }

  logout(){
    this.authService.logout();
  }


}
