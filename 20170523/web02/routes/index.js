var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//------------------
// 載入資料庫連結
//------------------
var pool = require('./lib/db.js');

//------------------
// 回應GET請求
//------------------
router.get('/', function(req, res, next) {
	sendData(req, res);	
});

//------------------
// 回應POST請求
//------------------
router.post('/', function(req, res, next) {
	sendData(req, res);			
});


//---------------------------
// 回傳資料
//---------------------------
function sendData(req, res){
	//------------------------
	// 改成自己的主機位址
	//------------------------
    var url="http://120.97.27.202/images/";	
	
	//------------------------
	// 從資料庫擷取資料
	//------------------------	
    pool.query('select * from foods', function (error, results, fields) {
		var data=[];
		
        if (error){
		    //--------------------------
			// 回傳空資料
			//--------------------------
			res.json(data);		
		}else{
			for(var i=0; i<results.length; i++){
				var food={};
				food.name=results[i].name;
				food.author=results[i].author;
				food.comment=results[i].comment;
				food.like=results[i].like;
				food.reply=results[i].reply;
				food.lastUpdate=results[i].lastUpdate;
				food.imgURL=url+results[i].imgURL;
				food.authorImgURL=url+results[i].authorImgURL;
				food.thumbnail=url+results[i].thumbnail;
				data.push(food);		
			}
            //--------------------------
			// 將資料以JSON格式回傳
			//--------------------------
			res.json(data);
        }       
    });
}	
	
module.exports = router;

