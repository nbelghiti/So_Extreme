import { Component } from '@angular/core';
//import { NgForm }    from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service/auth-service';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-mes-photos',
  templateUrl: 'mes-photos.html',
})
export class MesPhotosPage {
  fd = { email : '', imgUploader:'' };
	id_client : any
	imageURI:any;
	imageFileName:any;
	datas	:any;
  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private storage : Storage) {
	  	this.storage.get('id_Client').then((val) => {
     		if (val !== null) {
		      	this.id_client = val.params;
		      	console.log(this.id_client);
	        	//this.mesPhoto(this.id_client);
     		}
    	});
  }

	fileUpload(event) {
		console.log(event)
	  	this.fd.imgUploader= event.target.files[0];
		console.log(this.fd)

	}



	postPicture(event) {
		console.log(event)
		this.auth.postPicture(this.fd).then((data) => {
			this.datas = data;	
			console.log(this.datas);	
		}, (error) => {
			console.log(error);
		});
	}

}
