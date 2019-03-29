<template>
  <div class="mineview">
    <div class="mineimg">
      <div class="touxiang"></div>
      <p class="username">Daisy</p>
      <div class="userinfo">
        <span class="guanzhu">
          关注
          <span class="guanzhu-num">128</span>
        </span>
        <span class="whiteline">|</span>
        <span class="fans">
          粉丝
          <span class="fans-num">920</span>
        </span>
      </div>
    </div>
    <div class="minebutton">
      <ul>
        <li v-for="(item,index) in minebutton" :key="index">
          <img :src="item.img" alt>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
    <div class="share">
      <ul class="app-tab">
        <li>
          <span v-bind:class="{current: num==1}" v-on:click="change(1)">我的分享</span>
        </li>
        <li>
          <span v-bind:class="{current: num==2}" v-on:click="change(2)">我的求购</span>
        </li>
      </ul>
      <div class="content">
        <transition>
          <div v-show="num == 1">
            <Xiangshuiview/>
          </div>
        </transition>
        <transition>
          <div v-show="num == 2">
            <List/>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Xiangshuiview from './xiangshuiview'
import List from './list'
export default {
  name: "MineNav",
  components:{
    Xiangshuiview,
    List
  },
  data() {
    return {
      minebutton: [],
      num: 1
    };
  },
  methods: {
    change: function(index) {
      this.num = index;
    }, 
  },
  mounted() {
    this.$axios.get(this.HOST + "/mine").then(res => {
      this.minebutton = res.data.mineimg.minebutton;
    });  
  }
};
</script>

<style scoped>
.content {
  margin-top: 3rem;
}
.app-tab {
  width: 100%;
  height: 3rem;
  position: absolute;
  top: 20rem;
  left: 0;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
}

.app-tab li {
  float: left;
  width: 50%;
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
.mineimg {
  width: 100%;
  height: 14rem;
  background: url("../../server/public/images/mineimg.jpeg") no-repeat;
  background-size: 25rem;
  position: relative;
}
.touxiang {
  width: 5.5rem;
  height: 5.5rem;
  background: url("../../server/public/images/mine-touxiang.jpeg") no-repeat;
  background-size: 5.5rem;
  border-radius: 50%;
  position: absolute;
  top: 3rem;
  left: 9rem;
}
.username {
  color: white;
  position: absolute;
  top: 9rem;
  left: 10.5rem;
  font-size: 1rem;
}
.userinfo {
  position: absolute;
  top: 11.5rem;
  left: 6.5rem;
}
.guanzhu,
.fans {
  color: white;
}
.whiteline {
  color: white;
  margin: 0 1rem;
}
.minebutton {
  width: 100%;
  height: 6rem;
  background-color: white;
}
.minebutton li {
  width: 25%;
  float: left;
  margin: 1rem 0;
}
.minebutton img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0 1.92rem;
}
.minebutton p {
  margin: 0.5rem auto;
  font-size: 14px;
  text-align: center;
}

</style>


