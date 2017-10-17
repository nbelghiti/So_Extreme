import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '', rememberMe: false};

 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  
  }
 

  public createAccount() {
    this.nav.push(RegisterPage);
  }
 
  public login() {
    this.showLoading()
   // this.addLocalStorage()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot(HomePage);
        if ( this.registerCredentials.rememberMe ) {  
            window.localStorage['email'] = this.registerCredentials.email; 
            window.localStorage['password'] = this.registerCredentials.password;
          }
    
      } else {
        this.showError("You entered invalid credentials !");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'identifiants invalide ',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}