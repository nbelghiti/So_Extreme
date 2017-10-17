import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
 
  public logout() {
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('password');
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }
}