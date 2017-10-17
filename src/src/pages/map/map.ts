import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError  } from '@ionic-native/geolocation';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map         : any;
  option      : GeolocationOptions;
  currentPos  : Geoposition;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private auth: AuthService) {

  }

  ionViewDidLoad(){
    this.getUserPosition();
  }
  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();

  } 
  addMarker(){
      let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      });

      let content = "<p>C'est votre position actuelle !</p>";          
      let infoWindow = new google.maps.InfoWindow({
      content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });
  }
  getUserPosition(){
      this.option = {
      enableHighAccuracy : false
      };
      this.geolocation.getCurrentPosition(this.option).then((pos : Geoposition) => {

          this.currentPos = pos;     

          //console.log(pos);
          this.addMap(pos.coords.latitude,pos.coords.longitude);

      },(err : PositionError)=>{
          console.log("error : " + err.message);
      ;
      })
  }
  public logout() {
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('password');
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }
}