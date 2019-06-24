import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Food01 } from './food01';

@NgModule({
  declarations: [
    Food01,
  ],
  imports: [
    IonicPageModule.forChild(Food01),
  ],
  exports: [
    Food01
  ]
})
export class Food01Module {}
