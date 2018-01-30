<template>
	<div id="mainslideshow">
		<mt-swipe :auto="0" class="box">
			<mt-swipe-item>
				<a class="slide-box" v-for="item in mainlistone">
					<div>
						<img :src="item.image_hash">
						<span class="slidename">{{item.name}}</span>
					</div>
				</a>
			</mt-swipe-item>
			<mt-swipe-item>
				<a class="slide-box" v-for="iten in mainlisttwo">
					<div>
						<img :src="iten.image_hash">
						<span class="slidename">{{iten.name}}</span>
					</div>
				</a>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
import { Swipe, SwipeItem } from 'mint-ui';
export default {
	name: "MainSlideshow",
	data() {
		return{
<<<<<<< HEAD
			mainlist: [],
			mainlistone: [],
			mainlisttwo: [],
			slidebox: ""
		}
	},
	mounted() {
		var that = this;
		axios.get('/restapi/shopping/openapi/entries?latitude=39.90469&longitude=116.407173&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
		.then((response)=> {
		    //console.log(response);
		    //console.log(response.data[0].entries)
		    this.mainlist = response.data[0].entries;
		    var l=this.mainlist.length;
		    for(var i=0; i<l; i++){
		    	this.mainlist[i].image_hash = this.splace(this.mainlist[i].image_hash);
		    	//console.log(this.mainlist[i].image_hash)
		    }
		 //    this.slidebox = Math.ceil(l/10);
		 //    var box = document.getElementsByClassName("box")[0];
		 //    for(var x=0; x<this.slidebox; x++){
		 //    	var mtitem = document.createElement("mt-swipe-item");
		 //    	box.appendChild(mtitem);
			// }
		    this.mainlistone = this.mainlist.slice(0, 10);
		    //console.log(this.mainlistone);
		    this.mainlisttwo = this.mainlist.slice(10, l);

		})
		.catch(function (response) {
		    console.log(response);
		})
	},
	methods :{
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
=======
			mainlist: []
>>>>>>> 51914a3a65896104b737bc7b97ce33e5521fc2eb
		}
	}
}
</script>

<style scoped>
	#mainslideshow{
		height: 3.2rem;
	}
	.mint-swipe{
		height: 100%;
		background: #fff;
	}
	.slide-box{
		float: left;
		width: 20%;
		margin-top: 0.2rem;
		text-align: center;
	}
	.slide-box>div{
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
	}
	.slide-box>div>img{
		width: 100%;
		height: 100%;
	}
	.slidename{
		font-size: 0.083rem;
		display: block;
		white-space: nowrap;
		color: #666;
	}
</style>