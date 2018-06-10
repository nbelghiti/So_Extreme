import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-creercompte',
  templateUrl: 'creercompte.html',
})
export class CreercomptePage {
	registerCredentials = {
		email 		: '', 
		nom			: '',
		prenom		: '', 
		telephone	: '',
		password	: '' };
	datas		: any;
	loading     : Loading;

	constructor(private alertCtrl: AlertController, private auth: AuthService, private loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
	}

	public register(){
		this.showLoading();
		console.log(this.registerCredentials);
	  	this.auth.register(this.registerCredentials).then((data) => {
	  		this.loading.dismiss();
	  		this.datas = data;
	  		this.navCtrl.setRoot(LoginPage);
	  	}, (error) => {
			this.showError(error);
			console.log(error);
			this.loading.dismiss();

	  	});
	}
	showError(text) {
	    this.loading.dismiss();
	 
	    let alert = this.alertCtrl.create({
			title: 'erreur ',
			subTitle: text,
			buttons: ['OK']
	    });
	    alert.present();
	}

	showLoading() {
		this.loading = this.loadingCtrl.create({
			content: 'veuillez patienter...',
			dismissOnPageChange: true
		});
		this.loading.present();
	}

}
