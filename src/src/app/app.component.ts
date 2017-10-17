import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { UserPage } from '../pages/user/user';

@Component({
  templateUrl: 'app.html'
})
export class SO_extreme {
  @ViewChild(Nav) nav: Nav;

    rootPage: any;
  // fonction connexion authomatique si l'utilisateur est deja connecté et si il demander l'enregistrement de ces identifiant
  // verifier la disponibilité des IDs dans localStorage
  // definir la page de demarage si oui HomePage si nn LoginPage
  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('email') === "undefined" || window.localStorage.getItem('email') === null) && 
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage = LoginPage;
    console.log("LoginPage");
    } else {
      this.rootPage = HomePage;
    }
  }

  pages: Array<{title: any, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages =  [
      { title: 'Home Page', component: HomePage, icon: 'ios-home-outline' },
      { title: 'Ma List ', component: ListPage, icon: 'ios-clipboard-outline' },
      { title: 'Ma Position', component: MapPage, icon: 'ios-map-outline' },
      { title: 'Users', component: UserPage, icon: 'ios-people-outline' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkPreviousAuthorization();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
