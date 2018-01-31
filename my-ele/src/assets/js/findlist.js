
import axios from 'axios'
export default {
  name: 'Findlist',
  data () {
    return {
      	lists1:[],
      	lists2:[],
      	lists3:[],
      	flag:true,
      	fg:false,
      	lists4:[]
    }
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
		}
  },
  mounted(){
 		axios.get("/restapi/member/v1/discover?platform=1&block_index=0&latitude=39.90469&longitude=116.407173")
  	.then((res)=>{
//			console.log(res);
  			var list1 = res.data[1]; 
  			for(var i=0,l=list1.length;i<l;i++){
  					list1[i].main_pic_hash = this.splace(list1[i].main_pic_hash);
  			}	
  			this.lists1 = list1;
  			
  			var list2 = res.data[2];
  			for(var j=0,l=list2.length;j<l;j++){
  					list2[j].sub_pic_hash = this.splace(list2[j].sub_pic_hash);
  			}
  			this.lists2 = list2;
  	})
  	
  	axios.get("/restapi/shopping/v1/find/recommendation?latitude=39.90469&longitude=116.407173&offset=0&limit=6")
  	.then((res)=>{
//			console.log(res);
  			var list3 = res.data.items;
  			for(var k=0,l=list3.length;k<l;k++){
  					list3[k].food.image_path = this.splace(list3[k].food.image_path);
  					
  					if(list3[k].food.discount_activity!=""){
  						this.fg = true;	
  					}
  					if(list3[k].food.original_price){
  						this.flag = true;
  						list3[k].food.original_price = "￥"+list3[k].food.original_price
  					}
  			}
  			this.lists3 = list3;		
  	})
  	
  	axios.get("/restapi/member/gifts/suggest")
  	.then((res)=>{
  		console.log(res);	
  			var list4 = res.data; 
  			var l=list4.length;
  		if(l>=3){
  				l = 3;
  				for(var i=0;i<l;i++){
  					list4[i].image_hash= this.splace(list4[i].image_hash);	
  				}
  				list4.length=3;	
  			}	
  			this.lists4 = list4;
  			console.log(this.lists4)
  	})
  	
  }
}
