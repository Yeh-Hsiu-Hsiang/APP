import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Food02 } from './food02';

@NgModule({
  declarations: [
    Food02,
  ],
  imports: [
    IonicPageModule.forChild(Food02),
  ],
  exports: [
    Food02
  ]
})
export class Food02Module {}
