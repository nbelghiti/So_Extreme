import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesPhotosPage } from './mes-photos';

@NgModule({
  declarations: [
    MesPhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(MesPhotosPage),
  ],
})
export class MesPhotosPageModule {}
