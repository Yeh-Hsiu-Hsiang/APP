import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //--------------------
  // 建構元
  //--------------------
  constructor(public navCtrl: NavController) {
  }
  //--------------------
  // method
  //--------------------

  goNext(){
    this.navCtrl.push('Food01');
  }
  goNext2(){
    this.navCtrl.push('Food02');
  }

}
