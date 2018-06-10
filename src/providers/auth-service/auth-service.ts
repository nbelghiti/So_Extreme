import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private apiUrlLogin         = 'http://54.36.190.213:4040/client/login';
  private apiUrlClients       = 'http://54.36.190.213:4040/client/add';
  private apiUrlActivite      = 'http://54.36.190.213:4040/activite';
  private apiUrlActivites     = 'http://54.36.190.213:4040/activite/add';
  private apiUrlReservation   = 'http://54.36.190.213:4040/reservations';
  private apiUrlReservationsNbr   = 'http://54.36.190.213:4040/reservationsnbr';
  private apiUrlGroupe        = 'http://54.36.190.213:4040/groupe';
  private apiUrlGroupes       = 'http://54.36.190.213:4040/groupes';
  private apiUrlAddGroupe     = 'http://54.36.190.213:4040/groupe/add';
  private apiUrlAmis          = 'http://54.36.190.213:4040/amis';
  private apiUrlAjouterAmi    = 'http://54.36.190.213:4040/ami/add';
  private apiUrlAmisGroupe    = 'http://54.36.190.213:4040/mesamis';
  private apiUrlSupprimerGroupe = 'http://54.36.190.213:4040/groupe';
  private apiUrlSupprimerAmi    = 'http://54.36.190.213:4040/ami';
  private apiUrlClient          = 'http://54.36.190.213:4040/client';
  private apiUrlAddPhoto          = 'http://54.36.190.213:4040/photo/add';
  //private apiUrlGetPhotoClient          = 'http://54.36.190.213:4040/photos';
  private apiUrlGetPhotoctivite          = 'http://54.36.190.213:4040/photoss';
  private apiUrlSetCommentaire        = 'http://54.36.190.213:4040/commentaire/add';
  private apiUrldeleteCommentaire          = 'http://54.36.190.213:4040/commentaire';
  private apiUrlgetClientCommentaire  = 'http://54.36.190.213:4040/client/add'

  constructor(private http: HttpClient){
  }
  enoyerMessage(id_act){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlSetCommentaire, id_act)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }

  reservationsnbr(commentaire_id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrlReservationsNbr+'/'+commentaire_id)
      .subscribe(res =>{
        resolve(res);

      }, (err) =>{
        reject(err);
      });
    });
  }

  supprimerComment(commentaire_id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrldeleteCommentaire+'/'+commentaire_id)
      .subscribe(res =>{
        resolve(res);

      }, (err) =>{
        reject(err);
      });
    });
  }
  getClientCommentaire(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlgetClientCommentaire)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }
  getCommentaire(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlSetCommentaire)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }
  enoyerCommentaire(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlSetCommentaire, data)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }
  getPhoto(activite_id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlGetPhotoctivite+'/'+activite_id)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }
  /*getPhotoclient(id_cli){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlGetPhotoClient+'/'+id_cli)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }*/

  postPicture(credentials){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlAddPhoto, credentials)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }


  login(credentials){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlLogin, credentials)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }

  register(credentials){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlClients, credentials)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }

  monCompte(client_id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlClient+'/'+client_id)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }
  supprimerAmi(ami_id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrlSupprimerAmi+'/'+ami_id)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });
  }
  supprimerGroupe(id_groupe){
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrlSupprimerGroupe+'/'+id_groupe)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });  
  }
  getClientGroupe(id_groupe){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlAmisGroupe+'/'+id_groupe)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });  
  }
  AjouterAmi(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlAjouterAmi, data)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });  
  }

  getClient(id_groupe){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlClients, id_groupe)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });  
  }
  getAmis(id_groupe){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlAmis+"/"+id_groupe)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });  
  }
  ajouterGroupe(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlAddGroupe, data)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });  
  }
  monGroupe(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlGroupe+"/"+id)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });  
  }

  mesGroupes(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlGroupes+"/"+id)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });  
  }
  mesReservations(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlReservation+"/"+id)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });   
  }
  getactivites(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlActivites)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    });   
  }
  getActivite(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrlActivite+"/"+id)
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
        console.log(err);
      });
    }); 
  }

  public seDeconnecter() {
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }
}
