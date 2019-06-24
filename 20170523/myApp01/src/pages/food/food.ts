import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Food page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class Food {

  name: any;
  authorImgURL :any;
  imgURL: any;
  comment: any;
  lastUpdate: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');
    this.authorImgURL = this.navParams.get('authorImgURL');
    this.imgURL = this.navParams.get('imgURL');
    this.comment = this.navParams.get('comment');
    this.lastUpdate = this.navParams.get('lastUpdate');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Food');
  }
}
