import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { ActivitePage } from '../activite/activite';

@Component({
  selector: 'page-mes-reservations',
  templateUrl: 'mes-reservations.html',
})

export class MesReservationsPage {
	id_Client		: any;
	mesReservation	: any;
	id_act 			: any;
	id 				: any;
	datas			: any;
	activite 		: string[] = [];

	constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private storage : Storage) {
  	    this.storage.get('id_Client').then((val) => {
	      	if (val !== null) {
		        this.id_Client = val.params;
		        console.log(this.id_Client);
				this.mesReservations(this.id_Client);
				this.touteLesActivites() 
	      	}
	    });
	}

	mesReservations(id){
		this.auth.mesReservations(id).then((data) => {
			this.mesReservation = data;
			this.id_act = this.mesReservation.id_act
			console.log(this.mesReservation);
		}, (error) => {
			console.log(error);
		});
	}

	touteLesActivites() {
		this.auth.getactivites().then((data) => {
			this.datas = data;	
			console.log(this.datas);	
			this.setName(this.datas)
			console.log(this.activite)

		}, (error) => {
			console.log(error);
		});
	}
	setName(datas){
	  	for (var i = 0; i < datas.length; i++) {
	  			this.activite[(datas[i]._id)] = datas[i].photo
	  	}
	}

	seDeconnecter() {
		window.localStorage.removeItem('login');
		window.localStorage.removeItem('domaines');
		this.auth.seDeconnecter().subscribe(succ => {
			this.navCtrl.setRoot(LoginPage)
		});
	}
	getPageActivite(id){
		console.log(id);
	    this.navCtrl.push(ActivitePage, {
        	id : id
        });	
	}

}