import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewChild, ElementRef } from '@angular/core';

declare var google;
/**
 * Generated class for the Map page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class Map {
//---------------------------------------------------
  // 成員  
  //---------------------------------------------------
  @ViewChild('mapContainer') mapContainer: ElementRef;
  map: any;

  center:any={
    'lat':25.042375,
    'lng':121.525383,
    'name':'北商大'
  };  


  //--------------------------------------------------- 
  // 建構元
  //---------------------------------------------------  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.center.name = this.navParams.get('name');
    this.center.lat = this.navParams.get('lat');
    this.center.lng = this.navParams.get('lng');

    console.log(this.center.lat);
    console.log(this.center.lng);
  }
  
  
  //---------------------------------------------------  
  // 畫面完成後執行
  //---------------------------------------------------  
  ionViewWillEnter() {
    this.displayGoogleMap();
    this.addMarkersToMap();
  }


  //--------------------------------------------------- 
  displayGoogleMap() {
    let latLng = new google.maps.LatLng(this.center.lat, this.center.lng);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }


  //--------------------------------------------------- 
  // 顯示Google地圖
  //--------------------------------------------------- 
  addMarkersToMap() {
    var position = new google.maps.LatLng(this.center.lat, this.center.lng);
    var myMarker = new google.maps.Marker({position:position, title:this.center.name});
    
    myMarker.setMap(this.map);    
  }
}
