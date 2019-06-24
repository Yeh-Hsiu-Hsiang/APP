import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, URLSearchParams } from '@angular/http'; //若是其他則需要再app.module.ts內宣告
import { AlertController } from 'ionic-angular';  //ionic-angular 不用另外宣告，可直接使用

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//----------------------------------
    // 成員     
    //----------------------------------    
    items:any;
    city:string="台北";

    //----------------------------------
    // 建構元    
    //----------------------------------    
    constructor(public navCtrl: NavController, public http:Http, public alertCtrl: AlertController) {
        this.loadData(this.city);	
    }

    //----------------------------------
    // goNext    
    //----------------------------------  
    goNext(name, author, imgURL, comment, authorImgURL, lat, lng){
      let p = {
        'name':name,
        'author':author,
        'imgURL':imgURL,
        'comment':comment,
        'authorImgURL':authorImgURL,
        'lat': lat,
        'lng': lng
      };

      this.navCtrl.push("Food", p);
    }

    //----------------------------------
    // 讀取主機資料
    //----------------------------------            
    loadData(city){
        // 傳給主機的參數
        let params: URLSearchParams = new URLSearchParams();
        params.set('city', city);

        this.http.get('http://120.97.27.202', {search: params})			
            .subscribe(
                (data) => {
                    this.items=data.json();

                    if(this.items.length==0){
                        this.showNotFound();
                        return;
                    }
                },
                (err) => {this.showAlert();}
            );	
    }


    //----------------------------------
    // 顯示讀取失敗訊息
    //----------------------------------
    showAlert() {
        let alert = this.alertCtrl.create({
            title: '資料取得失敗!',
            subTitle: '請確定網路狀態, 或是主機是否提供服務中.',
            buttons: ['OK']
        });
        alert.present();
    }
    //----------------------------------


    //----------------------------------
    // 顯示無符合資料訊息
    //----------------------------------
    showNotFound() {
        let alert = this.alertCtrl.create({
            title: '無符合資料!',
            subTitle: '目前資料庫無符合條件的資料.',
            buttons: ['OK']
        });
        alert.present();
    }
    //----------------------------------    

}
