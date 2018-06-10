import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, MenuController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { CreercomptePage } from '../creercompte/creercompte';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registerCredentials = { email : '', password : '' };
  datas       : any;
  id_Client   : any;
  loading     : Loading;

  constructor(public menu: MenuController, private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private storage : Storage) {
    this.menu.swipeEnable(false);
  }
  
  setEmail(params) {
    this.storage.set('email', {params});
    console.log("email storage");
  }

  setIdClient(params) {
    this.storage.set('id_Client', {params});
    console.log("id_Client storage");
  }
 
  public login() {
    this.showLoading()
    console.log(this.registerCredentials);
    this.auth.login(this.registerCredentials).then((result) => {
      this.loading.dismiss();
        this.datas = result;
        this.setEmail(this.registerCredentials.email );
        this.setIdClient(this.datas._id);
        this.nav.setRoot(HomePage, {
          id : this.id_Client
        });
 
     
    }, (error) => {
      this.showError(error);
      console.log(error);
      this.loading.dismiss();
      
    });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'veuillez patienter...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: "erreur d'authentification",
      subTitle: 'identifiant incorrect ',
      buttons: ['OK']
    });
    alert.present();
  }
  creerCompte(){
    this.nav.setRoot(CreercomptePage);
  }
}