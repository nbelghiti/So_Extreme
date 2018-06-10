import { Component } from '@angular/core';
import { NavController, NavParams,Platform, MenuController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

declare var google;
@Component({
  selector: 'page-activite',
  templateUrl: 'activite.html',
})
export class ActivitePage {
	datas			: any;
	activite_id		: any;
	condition 		: any;
	latitude 		: Number=44.061275;
	longitude 		: Number=6.854417;
	description 	: any;
	photo 			: any;
	prix 			: any;
	libelle 		: any;
	photos 			: any;
	commentaire		: any;
	com 			= { }
	id_client 		: any
	commentaires 	: any;
	nbr_commentaires : any;
	clients			: any;
	nom 			: string[] = []
	statut  		= false
  	mapElement: HTMLElement;
	mesReservation 	: any
	constructor( public menu: MenuController, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private storage : Storage, public platform: Platform) {
  	  	//recuperer les paramettre 

	}
	ionViewWillEnter(){
		this.activite_id = this.navParams.get('id');
				console.log(this.activite_id)
		this.statut = this.navParams.get('statut');
		
		this.getPhoto(this.activite_id);
		this.storage.get('id_Client').then((val) => {
	     	if (val !== null) {
		    	this.id_client = val.params
		    	this.getActivite(this.activite_id)
				console.log(this.id_client)
				this.mesReservations(this.id_client)
	     	}
	    });
	    this.getCommentaire();
	    this.getClientCommentaire()
	    
	}
	ionViewDidLoad() {
		this.initMap();
	}

	mesReservations(id){
		this.auth.mesReservations(id).then((data) => {
			this.mesReservation = data;
			console.log(this.mesReservation);
			this.getstatut()
		}, (error) => {
			console.log(error);
		});
	}


	getstatut(){
		console.log("start")
		for (var i = 0; i < this.mesReservation.length; i++) {
			if(this.mesReservation[i].id_act === this.activite_id ){
				this.statut = true

			}
		}
		console.log(this.statut)
	}
	initMap() {
	  var myLatLng = {lat: 44.061275, lng:  6.854417};
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 8,
	    center: myLatLng
	  });

	  var marker = new google.maps.Marker({
	    position: myLatLng,
	    map: map,
	    title: 'localisation activite'
	  });
	  marker.setMap(map);
	}

	getClientCommentaire(){
  		this.auth.getClientCommentaire().then((data) => {
	  		this.clients 	= data;
	  		this.setName(this.clients)
	  	}, (error) => {
	  		console.log(error);
	  	});
	}

	supprimerComment(id){
  		this.auth.supprimerComment(id).then((data) => {
			this.getCommentaire();
	  	}, (error) => {
	  	});
	}

	setName(clients){
	  	for (var i = 0; i < clients.length; i++) {
	  			this.nom[(clients[i]._id)] = clients[i].nom
	  	}
	}

	getCommentaire(){
  		this.auth.getCommentaire().then((data) => {
	  		this.commentaires 			= data;
	  		this.nbr_commentaires = this.commentaires.length;
	  	}, (error) => {
	  		console.log(error);
	  	});
  	}

	enoyerCommentaire(){
		this.com = { id_client: this.id_client, texte: this.commentaire , id_act: this.activite_id }
	    console.log(this.com)
	    this.commentaires.push(this.com);
	    this.auth.enoyerCommentaire(this.com).then((data) => {
	    }, (error) => {
	      console.log(error);
	    });
	}

  	getActivite(activite_id) {
		this.auth.getActivite(activite_id).then((data) => {
			this.datas 			= data;
			console.log(data)
			this.condition 		= this.datas.condition;
			this.latitude 		= this.datas.latitude;
			this.longitude 		= this.datas.longitude;
			this.photo 			= this.datas.photo;
			this.prix 			= this.datas.prix;
			this.description 	= this.datas.description;
			this.libelle 		= this.datas.libelle
		}, (error) => {
			console.log(error);
		});
	}
	seDeconnecter() {
  		this.menu.enable(false);
		this.auth.seDeconnecter().subscribe(succ => {
			this.navCtrl.setRoot(LoginPage);
		});
	}
  	getPhoto(data) {
		this.auth.getPhoto(data).then((data) => {
			this.photos 			= data;
		}, (error) => {
			console.log(error);
		});
	}
}