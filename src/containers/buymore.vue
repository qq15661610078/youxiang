<template>
  <div>
    <div class="pinknav">
      <span><i class="iconfont"></i></span>
      <p>更多</p>
    </div>
    <div class="more-box">
      <p class="bag">箱包</p>
      <ul>
        <li v-for="(item,index) in xiangbaoData" :key="index">
          <img :src="item.xiangbaoimg" alt>
          <p>{{item.xiangbaotext}}</p>
        </li>
      </ul>
    </div>
    <div class="more-box">
      <p class="bag">鞋靴</p>
      <ul>
        <li v-for="(item,index) in xiexueData" :key="index">
          <img :src="item.xiexueimg" alt>
          <p>{{item.xiexuetext}}</p>
        </li>
      </ul>
    </div>
    <div class="more-box">
      <p class="bag">数码</p>
      <ul>
        <li v-for="(item,index) in shumaData" :key="index">
          <img :src="item.shumaimg" alt>
          <p>{{item.shumatext}}</p>
        </li>
      </ul>
    </div>
    <!-- <LoadMore/> -->
    <p class="more">没有更多了....</p>
    
    <bottomNav/>
  </div>
</template>
<script>
// import TopNav from "../components/topnav";
// import LoadMore from "../components/news";
import BottomNav from "../components/bottomnav";

export default {
  name: "buyMore",
  data() {
    return {
      xiangbaoData: [],
      xiexueData: [],
      shumaData: []
    };
  },
  props: {
    xiangbaoimg: {
      type: [String]
    },
    xiangbaotext: {
      type: [String]
    },
    xiexueimg: {
      type: [String]
    },
    xiexuetext: {
      type: [String]
    },
    shumaimg: {
      type: [String]
    },
    shumatext: {
      type: [String]
    }
  },
  methods: {
    getHttp() {
      this.$axios
        .get(this.HOST + "/moredata", {})
        .then(res => {
          this.xiangbaoData = res.data.xiangbao;
          this.xiexueData = res.data.xiexue;
          this.shumaData = res.data.shuma;

          //   console.log("lala")
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  components: {
    // TopNav,
    // LoadMore,
    BottomNav
  },
  mounted() {
    this.getHttp("/moredata");
  }
};
</script>
<style  lang="less" scope>
.pinknav{
    position: relative;
    width: 100%;
    height: 4rem;
    background: url('../../server/public/images/pinknav.png')
}
div {
  background-color: white;
  .more-box {
    .bag {
      text-align: center;
      margin: 2rem 5rem 1rem;
    }
    ul {
      li {
        float: left;
        width: 23.5%;
        height: 6.85rem;
        margin: 0 0.175rem 1rem;
        background-color: #f5f5f5;

        p {
          font-size: 0.8rem;
          margin-left: 1.5rem;
        }

        img {
          width: 90%;
          height: 5rem;
          padding-bottom: 0.25rem 0.25rem;
        }
      }
    }
  }
}
.more{
  padding-bottom: 5rem;
}
</style>
