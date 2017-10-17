import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Rest } from '../../providers/rest/rest';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
	users: any;
	constructor(public rest: Rest, public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
		this.getUsers();
	}

	ionViewDidLoad() {
		//console.log('ionViewDidLoad UserPage');
	}
	getUsers() {
	  this.rest.getUsers()
	  .then(data => {
	    this.users = data;
	  });
	}
	public logout() {
	  window.localStorage.removeItem('email');
	  window.localStorage.removeItem('password');
	this.auth.logout().subscribe(succ => {
	  this.navCtrl.setRoot(LoginPage)
	});
	}
}
