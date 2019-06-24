var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	sendData(req, res);	
});


/* POST home page. */
router.post('/', function(req, res, next) {
	sendData(req, res);			
});


//---------------------------
// 回傳一些測試資料
//---------------------------
function sendData(req, res){
	//------------------------
	// 改成自己的主機位址
	//------------------------
    var url="http://120.97.27.202/images/";
	
	//------------------------
	// 準備回傳的陣列
	//------------------------
	var data=[];

	//------------------------
	// 將物件加入陣列中
	//------------------------	
	//(1)	
	var food={};
	food.name="小江戶日式和漢料理";
	food.author="若水漣漪";
	food.comment="胡麻魚卵細麵，本來不打算吃主食，但還是點了這一道，夏天沒什麼胃口，吃點冷麵也是不錯的選擇，沒想到意外挖到寶！這道是當天最讓我印象深刻的一道，大量的魚卵鋪在細麵上，與白色細麵、綠色蔬菜倒是搭配出很和諧的顏色，不只視覺吸睛，味道也很厲害！";
	food.like="5";
	food.reply="10";
	food.lastUpdate="2017-4-11";
	food.imgURL=url+"a1.jpg";
	food.authorImgURL=url+"b1.jpg";
	food.thumbnail=url+"t1.jpg";
	data.push(food);

	//(2)
	var food={};	
	food.name="瑪莎露露 有機蔬菜";
	food.author="捲捲頭品味生活";
	food.comment="瑪莎露露是東區崇德路起家的吃到飽火鍋店，主打有機蔬菜、自然豬等生機食材，而樂活團也在2015年6月份時開團過，之後他們在仁德特力屋開了火鍋+生機教室的分店，也就是今天要介紹的瑪莎露露仁德店";
	food.like="8";
	food.reply="12";
	food.lastUpdate="2017-5-1";
	food.imgURL=url+"a2.jpg";
	food.authorImgURL=url+"b2.jpg";
	food.thumbnail=url+"t2.jpg";
	data.push(food);	

	//(3)
	var food={};	
	food.name="歐泰小廚";
	food.author="drsharry";
	food.comment="多年過去，他還是老樣子，對料理的要求很高。為求完美，在他料理的過程中，為了避免忽略什麼小細節，他都是全神貫注、心無旁鶩，在這種時候跟他講話，他不是沒聽到就是必須暫時先不回應你，對料理的堅持、顧及消費者的權益，那股久違懷念的感覺，一下子都湧上了心頭。";
	food.like="3";
	food.reply="18";
	food.lastUpdate="2017-4-21";
	food.imgURL=url+"a3.jpg";
	food.authorImgURL=url+"b3.jpg";
	food.thumbnail=url+"t3.jpg";	
	data.push(food);	
	
	//(4)
	var food={};	
	food.name="小豆豆鍋燒意麵";
	food.author="nikudiary";
	food.comment="小豆豆，這名字充滿童趣，想必是許多台南人小時候的回憶。聽枕邊人說，他從小吃到大，味道還不賴，既然土身土長的台南人都推薦了，趁著獨自在台南亂晃的機會就去瞧瞧吧。其實來台南好幾次，也經過它很多遍，只是門口總是充斥人群，每每看到長長人籠，即便人都走到了玻璃門前，我還是寧願選擇放棄。";
	food.like="12";
	food.reply="22";
	food.lastUpdate="2017-4-10";
	food.imgURL=url+"a4.jpg";
	food.authorImgURL=url+"b4.jpg";
	food.thumbnail=url+"t4.jpg";	
	data.push(food);	
	
	//(5)
	var food={};	
	food.name="過溝仔肉圓王";
	food.author="carol";
	food.comment="對於肉圓的印象一直停留在早期出遊的日子，那時要去南投玩，總會經過大竹肉圓，再往省道14號出發。我還記得那時剛吃大竹肉圓的時候，一顆只有20元。事過境遷，反倒是這幾年 在外地生活後，回到彰化時，總會想多嚐嚐這些好久不見的鄉土小吃。肉圓其實簡單，好吃不過有四，即為外皮、內餡、醬料及高湯而已。";
	food.like="2";
	food.reply="5";
	food.lastUpdate="2017-5-4";
	food.imgURL=url+"a5.jpg";
	food.authorImgURL=url+"b5.jpg";
	food.thumbnail=url+"t5.jpg";	
	data.push(food);	
	
	//(6)
	var food={};	
	food.name="賀豆韓食 韓國料理";
	food.author="小久保";
	food.comment=" 去年吃過台中的高麗屋後，便尋思著彰化有沒有類似這樣的餐廳。問了問住在彰南路附近的朋友，他便跟我推薦這間。「份量還算可以，味道還好。」他對我這樣說。在台灣及日本，吃了不少家韓國料理之後，便有了一些心得。首先，道地不見得大家都覺得好吃，而經過改良後也不見得會變得難吃。論道地程度上，是無論如何都比不上在韓國的餐廳，就算新大久保的店也一樣。";
	food.like="2";
	food.reply="7";
	food.lastUpdate="2017-5-10";
	food.imgURL=url+"a6.jpg";
	food.authorImgURL=url+"b6.jpg";
	food.thumbnail=url+"t6.jpg";	
	data.push(food);	
	
	//(7)
	var food={};	
	food.name="斑比咖啡 Bambi Bambi Brunch";
	food.author="Bernice 小芬";
	food.comment="Bambi Bambi Brunch斑比咖啡位於捷運台電大樓附近的小巷弄內 位置鬧中取靜,是個放鬆、休閒、跟姊妹滔談天說地聚會的好場所 一進門就看到特別加蓋出來的鐵皮屋,裡面佈置的溫馨又童趣 右手邊入門就是兩個大廳的坐位區,但大家都比較喜歡坐在外面,這裡畢竟有可愛的斑比相伴";
	food.like="4";
	food.reply="16";
	food.lastUpdate="2017-5-5";
	food.imgURL=url+"a7.jpg";
	food.authorImgURL=url+"b7.jpg";
	food.thumbnail=url+"t7.jpg";	
	data.push(food);	
	
	//(8)
	var food={};	
	food.name="披薩斜塔";
	food.author="西西漫走筆記";
	food.comment="繼上次在披薩斜塔吃過披薩餃和夏威夷披薩後超驚豔!這次下午來嚐嚐他的甜披薩，這份香蕉巧克力口味的甜披薩份量不小，兩個人合吃綽綽有餘，香蕉和巧克力的香氣濃郁又合拍，餅皮Q彈不油膩，相當好吃，瑪格莉特披薩，用上好的番茄醬汁和新鮮番茄當作主角，起司香氣濃郁，加上羅勒香氣提味，讓這份配料簡單的披薩意外的好吃!";
	food.like="34";
	food.reply="129";
	food.lastUpdate="2017-5-3";
	food.imgURL=url+"a8.jpg";
	food.authorImgURL=url+"b8.jpg";
	food.thumbnail=url+"t8.jpg";		
	data.push(food);	
	
	//(9)
	var food={};	
	food.name="里海咖啡/里海cafe'";
	food.author="ayeu0406";
	food.comment="晚餐時間還是得開車到礁溪車站附近覓食 之前看到其他人分享里海咖啡的餐點 很吸引人 所以難得來礁溪住一晚 就馬上預定晚餐來里海咖啡用餐拉 里海咖啡其實離礁溪車站主要熱鬧區域有一大段距離 而里海咖啡附近喜互惠超市前有一大塊空地 是挺方便停車的 里海咖啡外觀算是相當低調 若是沒特別注意 真的會不小心miss掉";
	food.like="4";
	food.reply="55";
	food.lastUpdate="2017-5-2";
	food.imgURL=url+"a9.jpg";
	food.authorImgURL=url+"b9.jpg";
	food.thumbnail=url+"t9.jpg";		
	data.push(food);	
	
	//(10)
	var food={};	
	food.name="宜蘭【Dew 36 綻露】 coffee elite";
	food.author="peonykey";
	food.comment="請給我來一杯。不要忽略貓咪的請求~~~【Dew 36 綻露 】coffee elite 就像插畫裡的貓咪 溫暖、舒適、充滿人情味【Dew36 】以濾杯萃取 綻放為滴滴馥郁的咖啡精露 象徵對咖啡執著與分享~從天花板到地面的大menu 是店內的特色之一 抬頭就可以直接選擇 今天想品嘗的咖啡啦~【冰滴咖啡】 完全以冷水滴濾 萃取出  香濃、渾厚、滑順而不酸澀喝過之後  久久無法忘懷~";
	food.like="12";
	food.reply="34";
	food.lastUpdate="2017-4-16";
	food.imgURL=url+"a10.jpg";
	food.authorImgURL=url+"b10.jpg";
	food.thumbnail=url+"t10.jpg";		
	data.push(food);	
	
	//--------------------------
	// 將陣列以JSON格式回傳
	//--------------------------
    res.json(data);	
}	
	
module.exports = router;

