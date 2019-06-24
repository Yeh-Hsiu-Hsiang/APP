import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Food01 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-food01',
  templateUrl: 'food01.html',
})
export class Food01 {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Food01');
  }

  //---------------
   showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Successful!',
      subTitle: 'Please waitting patiently!',
      buttons: ['OK']
    });
    alert.present();
  }
  //---------------
}
