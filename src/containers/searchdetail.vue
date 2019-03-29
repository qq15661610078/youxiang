<template>
  <div>
    <div class="pinknav">
      <i @click="clickHandler" class="iconfont icon-houtui"></i>
      <i class="iconfont icon-Close"></i>
      <input autofocus class="search-input" type="text" placeholder="搜索日志,商品和代购">
    </div>
    <div class="search-text">
      <p>热门搜索</p>
      <router-link tag="span" to="/xiangshui" v-for="(item,index) in hotdata" :key="index">{{item}}</router-link>
      <p>历史搜索</p>
      <span v-for="item in historydata" :key="item.id">{{item.content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchdetail",
  data() {
    return {
      hotdata: [],
      historydata: []
    };
  },
  created() {
    this.$axios.get(this.HOST + "/search").then(res => {
      this.hotdata = res.data.hotsearch;
      this.historydata = res.data.historysearch;
    });
  },
  methods: {
    clickHandler() {
      window.history.back();
    }
  }
};
</script>

<style scoped>
.pinknav {
  width: 100%;
  height: 4rem;
  background: url("../../server/public/images/pinknav.png");
  position: relative;
}
.search-input {
  width: 18rem;
  height: 2rem;
  box-sizing: border-box;
  margin-left: 2rem;
  padding: 0 1.2rem;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  border-radius: 5px;
  outline-style: none;
}
.icon-houtui {
  font-size: 2rem;
  color: white;
  position: absolute;
  top: 1.4rem;
  left: 0.6rem;
}
.icon-Close {
  /* color: gray; */
  position: absolute;
  top: 2rem;
  left: 20rem;
  z-index: 200;
}
.search-text {
  padding: 0 2rem;
}
.search-text p {
  margin: 2rem 0;
}
.search-text span {
  display: inline-block;
  background-color: rgb(252, 230, 245);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
}
</style>


