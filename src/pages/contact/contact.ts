import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	todo = {title:'', message :''}
	message : any
	id_client : any
  constructor(private auth: AuthService,public navCtrl: NavController, private storage : Storage) {
	  this.storage.get('id_Client').then((val) => {
     	if (val !== null) {
	      this.id_client = val.params;
	      console.log(this.id_client);
     	}
    });
  } 
  enoyerMessage() {
    console.log(this.todo)
    this.message = {  title:this.todo.title, message :this.todo.message, id_client : this.id_client  }
    console.log(this.message)
    this.auth.enoyerMessage(this.message).then((data) => {
    	console.log(data) 
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