import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //----------------
  // Member
  //----------------
  items : any;

  //----------------
  //建構元
  //----------------
  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController) {
    this.loadDate();
  }

  //----------------
  //method
  //----------------

  loadDate(){
    fetch('http://120.97.27.202/').then((response) => {
      return response.json();
    }).then((data) => {
      this.items = data;
      this.presentToast();
    }).catch((ex) => {
      this.showAlert();
    });
  }
  //----------------

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '連線失敗!',
      subTitle: '請檢查網路是否開啟',
      buttons: ['OK']
    });
    alert.present();
  }
  //----------------

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'information successfully',
      duration: 3000
    });
    toast.present();
  }
  //----------------

  doRefresh(refresher) {
   this.loadDate();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  //----------------

  goNext(name, authorImgURL, imgURL, comment, lastUpdate){
    let p = {
      'name': name, 
      'authorImgURL':authorImgURL,
      'imgURL':imgURL,
      'comment':comment,
      'lastUpdate':lastUpdate
    }
    this.navCtrl.push("Food", p);
  }
}
