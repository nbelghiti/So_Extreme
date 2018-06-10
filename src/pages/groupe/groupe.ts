import { Component } from '@angular/core';
import { App, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service/auth-service';
import { GroupeIdPage } from '../groupe-id/groupe-id';

@Component({
  selector: 'page-groupe',
  templateUrl: 'groupe.html',
})
export class GroupePage {
	id_client	: any;
	groupes 	: any;
	groupe    = {id_client : '', nom : '', nbre_client : ''};
	constructor(public appCtrl: App, private alertCtrl: AlertController, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private storage : Storage) {
	  this.storage.get('id_Client').then((val) => {
     	if (val !== null) {
	      this.id_client = val.params;
	      console.log(this.id_client);
        this.mesGroupes(this.id_client);
     	}
    });
	}
	mesGroupes(id){
  	this.auth.mesGroupes(id).then((data) => {
  		this.groupes = data;
  		console.log(this.groupes);
  	}, (error) => {
  		console.log(error);
  	});
	}
  supprimer(id){
    this.auth.supprimerGroupe(id).then((data) => {
      this.navCtrl.setRoot(GroupePage, {id:id}); 
    }, (error) => {
      console.log(error);
    });
  }
	ajouterGroupe(data){
  	this.auth.ajouterGroupe(data).then((data) => {
      console.log(data)
     
    this.navCtrl.setRoot(GroupePage); 
  	}, (error) => {
  		console.log(error);
  	});
	}
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Ajouter un Groupe',
      inputs: [
        {
          name: 'Nom',
          type: 'text',
          placeholder: 'nom du groupe'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          console.log('Cancel clicked');
          }
        },
        {
          text: 'save',
          handler: data => {
            this.groupe.id_client = this.id_client
            this.groupe.nom = data.Nom;
            this.groupe.nbre_client = "0";
            console.log(this.groupe);
            this.ajouterGroupe(this.groupe);
          }
        }
      ]
    });
    alert.present();
  }

  getPage(id,nom){
    this.appCtrl.getRootNav().setRoot(GroupeIdPage, { 
      id: id,
      nom: nom
    });
  }

}