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
  name:string;
  picture:string;
  comment:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('name');
    this.picture = navParams.get('picture');
    this.comment = navParams.get('comment');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Food');
  }

}
