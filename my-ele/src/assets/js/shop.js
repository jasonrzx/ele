//反向代理
import axios from 'axios';
//jquery
import $ from 'jquery';

export default {
	name : "shop",
	data : function(){
		return {
			masks : false,
			flage : "0",
			detail : null,
			name : "",
			description : "",
			data_il : null,
			detail_s : "",
			img : [],
			items :[
				{message : "点餐"},
				{message : "评价"},
				{message : "商家"}
			],
			sidebar :["热销","优惠","优惠套餐","精选套餐","精选套餐","单点主餐","甜品小食","配餐小食","串点","汤饮","日式煮锅"],

			//头部反向代理定义的变量
			list : null,
			list1 : null,
			imgs : [],
			//点击商品储存商品信息
			goods_img : "",
			goods_text : "",
			//显示减少商品的减号符
			dele : false,
		}
	},

	methods : {
		tabs: function(index){
			this.flage = index;
		},

		//修改图片路径的方法
  		 stu: function  (str,sr,index){
				var nstr = "";
				var s1 = str.substring(0,index);
				var s2 = str.substring(index,str.length);
				var nstr = s1+sr+s2;
				return(nstr)
		},
		splace : function (s){
			var a = this.stu(s,"\/",0)
			var b= this.stu(a,"\/",2)
			var c = this.stu(b,"\/",5)
			var ret = (c.substring(c.length-2)=='eg')? ".jpeg":".png"
			var result = "https://fuss10.elemecdn.com"+c+ret;
			return(result);
		},

		//左侧楼梯效果
		stairs : function(index){
			// console.log(index)
			var Top = $(".shop-bottom-dc-rgh").scrollTop();
			// console.log(parseInt( $(".shop-rgh-p").eq(index).offset().top)); 
			var st = parseInt( $(".shop-rgh-p").eq(index).offset().top);
			if(Top != st){
				$(".shop-bottom-dc-rgh").animate({
					scrollTop : st+"px"
				});
			}
		},
		//点击显示遮罩层
		mask : function(ind){
			this.masks = !this.masks;
			var dl = $(".dl");
			// console.log(dl.eq(ind).find("dt>img")[0].currentSrc)
			// console.log(dl.eq(ind)[0].childNodes)
			this.goods_img = dl.eq(ind)[0].childNodes;
			console.log(ind,this.goods_img)
			// console.log(this.goods);
			console.log(dl.eq(ind).find("dd>ul>li"));
			this.goods_text = dl.eq(ind).find("dd>ul>li")
		},
		//隐藏遮罩层
		hide : function(){
			this.masks = false;
		},

		//添加商品到购物车
		add_goods : function(ind){
			$(".delete_goods").eq(ind).css({"display":"block"});
			var s = $(".amount").eq(ind).html();
			$(".amount").eq(ind).css({"display":"block"}).html(++s);
			console.log("asdf")
		},
		//删除商品
		delete_goods : function(ind){
			var s = $(".amount").eq(ind).html();
			if( s = 1){
				$(".delete_goods").eq(ind).css({"display":"none"});
				$(".amount").eq(ind).css({"display":"none"})
			}
			$(".amount").eq(ind).css({"display":"block"}).html(s-1);
		}
	},

	mounted (){
		var wh = document.documentElement.clientHeight;
		var xxk = document.getElementsByClassName("shop-center-bottom")[0]
		xxk.style.height = wh+"px";

		var shop_bottom = $(".shop-bottom");
		var shop_center_h = $(".shop-center").height();
		shop_bottom.css({"height":wh-shop_center_h});
		$(".shop-bottom-dc").height(wh-shop_center_h);


		var id = this.$route.params.fid;
		axios.get(`/restapi/shopping/restaurant/${id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=39.90469&longitude=116.407173`)
		.then((res)=>{
			this.list = res.data;
			this.list1 = res.data.activities;
			var ss = res.data.image_path;
			this.imgs.push(this.splace(ss))
		});



		axios.get(`/restapi/shopping/v2/menu?restaurant_id=${id}`)
		.then((res)=>{
			this.data_il = res.data;
			this.detail = res.data[0].foods;
			var ind = this.detail.length;
			this.name = res.data[0].name;
			this.description = res.data[0].description;
			var length = res.data[0].foods.length;
			//获取所有图片
			for(var x=0; x<length; x++){
				for(var y=0; y<length; y++){
					var s = res.data[x].foods[y].image_path;
					this.img.push(this.splace(s));
				}
			}
		}).catch((err)=>{
			console.log(err);
		});
	}
}
