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
  author: any;
  imgURL: any;
  comment: any;
  authorImgURL: any;
  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');
    this.author = this.navParams.get('author');
    this.imgURL = this.navParams.get('imgURL');
    this.comment = this.navParams.get('comment');
    this.authorImgURL = this.navParams.get('authorImgURL');
    this.lat = this.navParams.get('lat');
    this.lng = this.navParams.get('lng');
  }

  goMap(name, lat, lng){
    let g = {
      'name': name,
      'lat': lat,
      'lng': lng
    }
    this.navCtrl.push('Map', g);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Food');
  }

}
