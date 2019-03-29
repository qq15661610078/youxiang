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
  color: rgb(106, 106, 106);
}
.good {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
.good-content {
  width: 47.4%;
  height: auto;
  box-sizing: border-box;
  float: left;
  margin: 0.3rem;
  padding: 0.6rem;
  background-color: white;
  position: relative;
}
.good-pic {
  width: 100%;
}
.good-price{
  margin: 0.3rem 0;
}
.good-name{
  font-size: 13px;
  line-height: 1rem;
  margin: 0.5rem 0;
}
.good-flag {
  width: 1rem;
}
.good-country {
  font-size: 12px;
}
.good-nicheng{
  font-size: 10px;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
}
</style>


