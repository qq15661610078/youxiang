<template>
  <div>
    <div class="pinknav">
      <i @click="clickHandler" class="iconfont icon-houtui"></i>
      <p>{{title}}</p>
    </div>
    <ul class="app-tab">
      <li>
        <span v-bind:class="{current: num==1}" v-on:click="change(1)">日志</span>
      </li>
      <li>
        <span v-bind:class="{current: num==2}" v-on:click="change(2)">商品</span>
      </li>
      <li>
        <span v-bind:class="{current: num==3}" v-on:click="change(3)">代购</span>
      </li>
    </ul>
    <div class="content">
      <transition>
        <div v-show="num == 1">1</div>
      </transition>
      <transition>
        <div v-show="num == 2">
          <div class="xiangshui-blue">#香水是种有个性的气味</div>
          <div class="good">
            <div class="good-content" v-for="(item,index) in xiangshuidata" :key="index">
              <img class="good-pic" :src="item.pic" alt>
              <p class="good-name">{{item.name}}</p>
              <p class="good-price">{{item.price}}</p>
              <img class="good-flag" :src="item.flag" alt>
              <span class="good-country">{{item.country}}</span>
              <span class="good-nicheng">{{item.nicheng}}</span>
            </div>
          </div>
        </div>
      </transition>
      <transition>
        <div v-show="num == 3">3</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Xiangshui",
  methods: {
    clickHandler() {
      window.history.back();
    },
    change: function(index) {
      this.num = index;
    }
  },
  data() {
    return {
      num: 2,
      title: "",
      xiangshuidata: []
    };
  },
  created() {
    this.$axios.get(this.HOST + "/hotsearch").then(res => {
      (this.title = res.data.xiangshui.title),
        (this.xiangshuidata = res.data.xiangshui.data);
    });
  }
};
</script>
<style scoped>
.pinknav {
  width: 100%;
  height: 4rem;
  background: url("../../server/public/images/pinknav.png");
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
}
.icon-houtui {
  font-size: 2rem;
  color: white;
  position: absolute;
  top: 1.4rem;
  left: 0.6rem;
}
.pinknav p {
  /* position: absolute;
    top: 1.5rem;
    left: 7rem; */
  text-align: center;
  height: 4rem;
  line-height: 4.7rem;
  font-size: 20px;
  color: aliceblue;
}
.content {
  margin-top: 3rem;
}
.app-tab {
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 4rem;
  left: 0;
  border-bottom: 1px solid lightgray;
  z-index: 200;
}

.app-tab li {
  float: left;
  width: 33.3%;
  height: 3rem;
  background-color: white;
  cursor: pointer;
  text-align: center;
  line-height: 3rem;
  z-index: 888;
}

.current {
  color: #ff6b9e;
}
.xiangshui-blue {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: 3.5rem 0;
  color: rgb(58, 96, 164);
  background-color: white;
  position: absolute;
  top: 4rem;
  left: 0;
}
.good {
  margin-top: 9rem;
  box-sizing: border-box;
}
.good-content {
  width: 45%;
  height: auto;
  display: inline-block;
  box-sizing: border-box;
  margin: 0.5rem;
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


