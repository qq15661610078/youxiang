<template>
  <div class="good">
    <div class="good-content" v-for="(item,index) in xiangshuidata" :key="index">
      <img class="good-pic" :src="item.pic" alt>
      <p class="good-name">{{item.name}}</p>
      <p class="good-price">{{item.price}}</p>
      <img class="good-flag" :src="item.flag" alt>
      <span class="good-country">{{item.country}}</span>
      <span class="good-nicheng">{{item.nicheng}}</span>
    </div>
    <loadMore ref="Child"/>
  </div>
</template>
<script>
import loadMore from "./loadMore"
export default {
  name: "xiangshuidata",
  components:{
      loadMore
  },
  data() {
    return {
      xiangshuidata: []
    };
  },
  methods:{
    getHttp(){
      this.$axios.get(this.HOST + "/hotsearch").then(res => {
        this.xiangshuidata = this.xiangshuidata.concat(res.data.xiangshui.data);
    });
    }
  },
  mounted(){
    this.getHttp();
    this.$refs.Child.loadMore(); 
  }
};
</script>

<style scoped>
*{
    font-size: 12px;
}
.good {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
.good-content {
  width: 44.7%;
  height: auto;
  float: left;
  margin: 0.1rem;
  padding: 0.5rem;
  background-color: white;
}
.good-pic {
  width: 100%;
}
.good-flag {
  width: 2rem;
}
</style>


