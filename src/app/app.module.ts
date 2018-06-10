import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MesReservationsPage } from '../pages/mes-reservations/mes-reservations';
import { AjouteramiPage } from '../pages/ajouterami/ajouterami';
import { ActivitePage } from '../pages/activite/activite';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { HttpModule  } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthService } from '../providers/auth-service/auth-service';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SafePipe } from '../pipes/safe/safe';
import { MonComptePage } from '../pages/mon-compte/mon-compte';
import { GroupePage } from '../pages/groupe/groupe';
import { MesPhotosPage } from '../pages/mes-photos/mes-photos';
import { GroupeIdPage } from '../pages/groupe-id/groupe-id';
import { CreercomptePage } from '../pages/creercompte/creercompte';

import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    LoginPage,
    SafePipe,
    MesReservationsPage,
    ActivitePage,
    MonComptePage,
    GroupePage,
    MesPhotosPage,
    GroupeIdPage,
    AjouteramiPage,
    CreercomptePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    LoginPage,
    MesReservationsPage,
    ActivitePage,
    MesPhotosPage,
    MonComptePage,
    GroupePage,
    MesPhotosPage,
    GroupeIdPage,
    AjouteramiPage,
    CreercomptePage
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}