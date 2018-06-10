import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ActivitePage } from '../activite/activite';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	domaines 		: any;
	datas 			: any;
	lesDepeches  	: any;
	resvations 		: any =[];
	nbr 			: any =[];

	constructor(public navCtrl: NavController, public menu: MenuController, private auth: AuthService, private storage : Storage) {
		menu.enable(true);
		this.touteLesActivites(); 
	}


	getDomaines(){
		this.storage.get('domaines1').then((data) => {
		});
	}
	getToutesLesDepeches(){
		this.storage.get('toutesLesDepeches1').then((data) => {
		});
	}

	getPageActivite(id){
	    this.navCtrl.push(ActivitePage, {
        	id : id
        });	
	}
	
	reservationsnbr(id){
		this.auth.reservationsnbr(id).then((data) => {
			this.resvations = data;
			console.log(this.resvations);
			this.nbr = this.resvations.lenght
		}, (error) => {
			console.log(error);
		});
	}

	touteLesActivites() {
		this.auth.getactivites().then((data) => {
			this.datas = data;	
			console.log(data);	
		}, (error) => {
			console.log(error);
		});
	}

	seDeconnecter() {
		window.localStorage.removeItem('login');
		window.localStorage.removeItem('domaines');
		this.auth.seDeconnecter().subscribe(succ => {
			this.navCtrl.setRoot(LoginPage)
		});
	}
}