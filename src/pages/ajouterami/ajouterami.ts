import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import { GroupeIdPage } from '../groupe-id/groupe-id';

@Component({
  selector: 'page-ajouterami',
  templateUrl: 'ajouterami.html',
})
export class AjouteramiPage {
	id 			: any;
	amis 		: any;
	amis1 		: any;
	mesamis 	: any;
	name		: any;
	nom 		: string[] = [];
	client  	= { id_groupe :'', id_client_invite:'', id_client:'', nom:''}

	constructor(public storage:  Storage, public auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {
		this.id = this.navParams.get('id'); 

		this.name = this.navParams.get('nom');
		this.getClient(this.id);
	    this.storage.get('id_Client').then((val) => {
	      	if (val !== null) {
		        this.client.id_client = val.params;
		        console.log(this.client.id_client);
	      	} else {
	      		console.log("eeeeeeeeeeeee")
	      	}

	    });
	}
	getClient(id){
  		this.auth.getClient(id).then((data) => {
	  		this.amis			= data;
	  		console.log(this.amis)
	  		this.friend(this.amis)	
	  	}, (error) => {
	  		console.log(error)
	  	});
  	}

  	friend(data){
  		for (let i = 0; i < data.length; i++) {
  			console.log(data[i].nom)
  		 	this.nom.push(data[i].nom)
  		}
  		console.log(this.nom);
  	}
  	idclient(nom){
	  	for (var i = 0; i < this.amis.length; i++) {
	  		if (this.amis[i].nom === nom) {
	  			this.client.id_client_invite = this.amis[i]._id
	  			console.log(this.amis[i].nom )
	  		}
	  	}
	  	console.log(this.client)  	
  	}

  	ajouterAmi(name){
  		console.log(name)
  		this.idclient(name)
  		this.client.id_groupe = this.id
  		this.client.nom		  = name
  		console.log(this.client)
  		this.auth.AjouterAmi(this.client).then((data) => {
	  		this.mesamis		= data;
	  		console.log(this.mesamis);
	  		this.navCtrl.setRoot(GroupeIdPage, {
	  			id: this.id,
	  			nom: this.name
	  		});
	  	}, (error) => {
	  		console.log(error);
	  	});
  	}

	getItems(ev: any) {
		// set val to the value of the searchbar
		let val = ev.target.value;
		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.amis1 = this.nom.filter((item) => {
				return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		} else {
				this.amis1= [];
		}
	}
}