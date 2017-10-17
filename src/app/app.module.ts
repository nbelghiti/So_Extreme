import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SO_extreme } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { UserPage } from '../pages/user/user';
import { RegisterPage } from '../pages/register/register';

import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule  } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Rest } from '../providers/rest/rest';
import { AuthService } from '../providers/auth-service/auth-service';
import { SafePipe } from '../pipes/safe/safe';


@NgModule({
  declarations: [
    SO_extreme,
    HomePage,
    ListPage,
    LoginPage,
    UserPage,
    MapPage,
    RegisterPage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule ,
    HttpClientModule,
    IonicModule.forRoot(SO_extreme)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SO_extreme,
    HomePage,
    ListPage,
    LoginPage,
    UserPage,
    MapPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Rest,
    AuthService 
  ]
})
export class AppModule {}