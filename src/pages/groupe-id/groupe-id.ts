import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { AjouteramiPage } from '../ajouterami/ajouterami';
import { GroupePage } from '../groupe/groupe';

@Component({
  selector: 'page-groupe-id',
  templateUrl: 'groupe-id.html',
})
export class GroupeIdPage {
	id  			: any;
  	amis 			: any;
  	nbr_ami			: any;
  	nom				: any;
  	id_cli 			: any;

  	constructor(public appCtrl: App, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {
  		//recuperer les paramettre 
		this.id = this.navParams.get('id');
		this.nom = this.navParams.get('nom');
		console.log(this.id)
		console.log(this.nom)
		this.getClient(this.id)
  	}
  	ajouterAmi(){
  		this.navCtrl.push(AjouteramiPage, {
  			id:this.id,
        nom: this.nom
  		});
  	}
    backGroupePage(){
      this.navCtrl.setRoot(GroupePage);
    }

  	getClient(id){
  		this.auth.getClientGroupe(id).then((data) => {
	  		this.amis 			= data;
	  		console.log(this.amis);	
	  		this.nbr_ami = this.amis.length;
	  	}, (error) => {
	  		console.log(error);
	  	});
  	}

  	supprimerAmi(id_cli){	
  		console.log(id_cli)
  		this.auth.supprimerAmi(id_cli).then((data) => {
  			console.log(data)
  			this.appCtrl.getRootNav().push(GroupeIdPage, { id: this.id, nom: this.nom });
	  	}, (error) => {
	  		console.log(error);
	  	});
  	}
}