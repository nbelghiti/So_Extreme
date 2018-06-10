import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})

export class UserPage {
	datas = {
		nom		: "",
		vile 	: ""
	};
	erreur : any;
	dato:any;

	constructor(private auth: AuthService, public navCtrl: NavController) {
		
	}

	ionViewDidLoad() {
		this.getUsers();
	}

	getUsers() {
		
	}

	seDeconnecter() {
	  	window.localStorage.removeItem('email');
	  	window.localStorage.removeItem('password');
		this.auth.seDeconnecter().subscribe(succ => {
	  		this.navCtrl.setRoot(LoginPage)
		});
	}
}