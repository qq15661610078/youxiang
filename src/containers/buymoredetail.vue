<template>
  <div>
    <div class="pinknav" ref="pinknav">
      <span>
        <i class="el-icon-arrow-left" @click="backHandler"></i>
      </span>
      <p>商品详情</p>
    </div>
    <div class="navheight">
      <div class="detail">
        <div>
          <img :src="xiangbaoimg" alt>
        </div>
        <p class="content">{{xiangbaotext}}</p>
        <p class="text">{{discribe}}</p>
        <p>
          <span>￥{{price}}</span>
        </p>
        <p>其他</p>
      </div>
      <ul class="choose">
        <li>
          <i class="iconfont shoucang" v-show="!showCommentInput"  @click="showCommentInput = !showCommentInput">&#xe646;</i> 
          <i class="iconfont shoucang" v-show="showCommentInput"  @click="showCommentInput = !showCommentInput">&#xe64e;</i> 
          收藏
        </li>
        <li>
          <i class="iconfont add">&#xe61b;</i> 加入购物车
        </li>
        <li>
          <i class="iconfont buy">&#xe64c;</i> 立即购买
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "BuyMoreDetail",
  data() {
      
    return {
      showCommentInput : false,
      moreData: [],
      id: "",
      xiangbaoimg: "",
      xiangbaotext: "",
      price: "",
      discribe: ""
    };
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id);
    this.$axios
      .get(this.HOST + `/morebuyid?id=${id}`)
      .then(res => {
        this.xiangbaoimg = res.data[0].xiangbaoimg;
        this.xiangbaotext = res.data[0].xiangbaotext;
        this.price = res.data[0].price;
        this.discribe = res.data[0].discribe;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    backHandler() {
      this.$router.push("/buymore");
    },
    ColorHandler(){
        this.element.style.color="#FF6B9E"
    }
  }
};
</script>
<style scope lang="less">
.navheight {
  position: absolute;
  top: 4rem;
}
.pinknav {
  width: 100%;
  height: 4rem;
  background: url("../../server/public/images/pinknav.png");
  position: fixed;
  span {
    i {
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      font-size: 25px;
      color: aliceblue;
      z-index: 666;
    }
    
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    padding: 1.25rem 4rem;
    color: white;
  }
}
.choose {
  // position: fixed;
  // bottom: 5rem;
  margin:2rem 0rem;
  display: flex;
  li {
    float: left;
    flex-grow: 1;
    margin: 0.05rem 1.25rem;
  }
  i:nth-child(2):hover {
    font-size: 10rem;
    color: red;
  }
  .shoucang{
      font-size:14px;
          color: #3e3e3e;
          // &:hover{
          //   font-weight: bold;
          // }
          // &+.response {
          //   font-weight: bold;
          // }
  }
}
.detail {
  p{
    margin-left:1rem;
    padding:0.5rem  1rem;
  }
  .text {
      padding: 1rem;
      line-height: 2rem;
      }

  div:first-child {
      background-color: white;
      padding: 0 5rem;
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
  }
  span {
    color: #4375cd;
  }
}
</style>