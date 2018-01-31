<template>
  <div class="hello">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in 20">{{ item }}</li>
  </ul>
</mt-loadmore>

  </div>
</template>

<script>
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
    loadBottom() {
    ...// 加载更多数据
    this.allLoaded = true;// 若数据已全部获取完毕
    this.$refs.loadmore.onBottomLoaded();
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
