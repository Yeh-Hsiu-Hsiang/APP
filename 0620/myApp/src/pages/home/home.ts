import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Geolocation } from '@ionic-native/geolocation';
import { Vibration } from '@ionic-native/vibration';
import { Flashlight } from '@ionic-native/flashlight';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //-----------------------
  // member
  //-----------------------
  tag : any;
  lat : any;
  lng : any;
  uuid : any;
  //-----------------------
  //建構元
  //-----------------------
  constructor(
    public navCtrl: NavController,
    private nfc: NFC, private ndef: Ndef,
    private geolocation: Geolocation,
    private vibration: Vibration,
    private flashlight: Flashlight,
    private uniqueDeviceID: UniqueDeviceID) {
      // NFC
      this.nfc.addTagDiscoveredListener()
        .subscribe((data)=>{this.tag=JSON.stringify(data)});   // 訂購，當讀到 tag 才執行。 //把接收到的資料丟給 tag

      // Geolocation 只交換一次資料
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        }).catch((error) => {
          console.log('Error getting location', error);
      });

      // Device ID
      this.uniqueDeviceID.get()
        .then((uuid: any) => {this.uuid=JSON.stringify(uuid)})
        .catch((error: any) => console.log(error));
  }
  

  //-----------------------
  // function
  //-----------------------
  myVir(){
    this.vibration.vibrate(1000);
  }

  lightOn(){
    this.flashlight.switchOn();
  }

  lightOff(){
    this.flashlight.switchOff();
  }
}
