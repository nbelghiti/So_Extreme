import { Component, ViewChild } from '@angular/core';
import {  Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { MesReservationsPage } from '../pages/mes-reservations/mes-reservations';
import { HomePage } from '../pages/home/home';
import { MonComptePage } from '../pages/mon-compte/mon-compte';
import { GroupePage } from '../pages/groupe/groupe';
import { ContactPage } from '../pages/contact/contact';
import { MesPhotosPage } from '../pages/mes-photos/mes-photos';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage  : any;
  data      : any;

  constructor( private storage : Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.initializeApp();
  }
  
  getPageHome(){
    this.nav.setRoot(HomePage);
  }
  
  getPageCompte(){
    this.nav.setRoot(MonComptePage);
  }
  getPageReservations(){
    this.nav.setRoot(MesReservationsPage); 
  }
  getPagePhoto(){
    this.nav.setRoot(MesPhotosPage); 
  }
  getPageGroupe(){
    this.nav.setRoot(GroupePage); 
  }
  getPageContact(){
    this.nav.setRoot(ContactPage); 
  }

  checkPreviousAuthorization() {
    this.storage.get('email').then((res) => {
      if (res !== null) {
        this.data = res.params;
        if(this.data === false || this.data === undefined || this.data === null) {
          this.rootPage = LoginPage;
          console.log("LoginPage");
        } else {
          this.rootPage = HomePage;
          console.log("HomePage");
        }
      }else {
        this.rootPage = LoginPage;
        console.log("LoginPage");
      }
    });
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.checkPreviousAuthorization();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
