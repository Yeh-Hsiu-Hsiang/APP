import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foods:any=[{'name':'pizza', 'picture':'a.jpg', 'comment':'good'},
  {'name':'tofu', 'picture':'b.jpg', 'comment':'perfect'},
  {'name':'cron', 'picture':'c.jpg', 'comment':'nice'}];
  
  constructor(public navCtrl: NavController) {}

  goNext(name, picture, comment){
    this.navCtrl.push("Food", {name:name, picture:picture, comment:comment});
  }
}
