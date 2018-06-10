import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service/auth-service';


@Component({
	selector: 'page-mon-compte',
	templateUrl: 'mon-compte.html',
})
export class MonComptePage {
	id_client 	: any;
	prenom 		: any;
	nom 		: any;
	email 		: any;
	telephone 	: any;
	datas 		: any;
	mesReservation :any;
	count		: any;
  	constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private storage : Storage) {
	  	this.storage.get('id_Client').then((val) => {
     		if (val !== null) {
		      	this.id_client = val.params;
		      	console.log(this.id_client);
	        	this.monCompte(this.id_client);
				this.mesReservations(this.id_client);
     		}
    	});
  	}

  	mesReservations(id){
		this.auth.mesReservations(id).then((res) => {
			this.mesReservation = res;
			console.log(this.mesReservation);
	  		this.count = this.mesReservation.length;
			console.log(this.count)
		}, (error) => {
			console.log(error);
		});
	}

  	monCompte(id){
	  	this.auth.monCompte(id).then((data) => {
	  		this.datas 			= data
	  		this.prenom			= this.datas.prenom
	  		this.nom			= this.datas.nom
	  		this.email			= this.datas.email
	  		this.telephone		= this.datas.telephone
	  		console.log(data);
	  	}, (error) => {
	  		console.log(error);
	  	});	
  	}
}