<template>
  <div class="box">
    <!-- <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getHttp"></vue-waterfall-easy> -->
    <div class="shoplist">
      <div class='card_div' v-for="(item,index) in shopListData" :key="index" >
        <router-link
          :to="{name:'publicDetail',params:{id:item.id}}"
          tag="div"
          class="shoplist-small"   
        >
          <div ref="shoplistsmall">
			  <img :src="item.url" alt>
          <div>
            <span>
              <i class="iconfont add">&#xe61b;</i>
            </span>
            <p>{{ cutContent(item.content) }}</p>
            <span>￥{{item.price}}</span>
          </div>
		  </div>
        </router-link>

      </div>
      
    </div>
    <!-- <LoadMore />    -->
    <WaterFall/>
  </div>
</template>
<script>
// import LoadMore from "./news"
import WaterFall from "./waterfall";
export default {
  name: "ShopList",
  components: {
    // LoadMore,
    WaterFall
  },
  data() {
    return {
      shopListData: [],
      divs: [],
      width: ''
    };
  },
  props: {
    id: {
      type: [String, Number],
      default: 0
    },
    url: {
      type: [String, Number],
      default: 0
    },
    content: {
      type: [String, Number],
      default: 0
    },
    price: {
      type: [String, Number],
      default: 0
    }
  },
  methods: {
    cutContent(content) {
      if (content.length > 15) {
        return content.substring(0, 8) + "...";
      }
      return content;
    },
    getHttp() {
      this.$axios
        .get(this.HOST + "/shoplist", {})
        .then(res => {
          // this.shopListData = res.data.shopList;
          this.shopListData = this.shopListData.concat(res.data.shopList);
          var _this = this;
          this.$nextTick(function() {
            // DOM 现在更新了
            // `this` 绑定到当前实例
            _this.createWall();
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    update() {
      
    },

    createWall() {
      var box = document.querySelector(".box");
      //获取所有的自己添加的div
      // var divs = this.$refs.shoplistsmall;
      //获取一个div的宽度
      //获取视口的宽度
     
      var viewWidth =
        document.documentElement.clientWidth || document.body.clientWidth;
      //确定一行可以放几个div
      //   console.log(viewWidth)
      //   var num = Math.floor(viewWidth / oneWidth);
      var num = 2;
      //通过一个div的宽度*数量拿到总宽度
      //   box.style.width = num * oneWidth + "rem";
      //存储数据的高度
      //   var minHeightArr = [];
      //   for (var i = 0; i < divs.length; i++) {
      //     if (i < num) {
      //       //当小于num时  i 此时是第一行 将第一行每一个数据的高度进行存储
      //       minHeightArr.push(divs[i].offsetHeight);
      //       console.log(divs[i])
      //     } else {
      //       //设置div绝对定位
      //       divs[i].style.position = "absolute";
      //       //当大于num时  第二行开始
      //       //获取数组中的最小值
      //       var minHeight = Math.min.apply(null, minHeightArr);
      //       console.log(minHeightArr + "--->" + minHeight);
      //       //获取最小值在数组内的下标
      //       var index = minHeightArr.indexOf(minHeight);
      //       //获取指定的最小高度的元素
      //       var ele = divs[index];
      //       var tempLeft = ele.offsetLeft;
      //       //给马上要添加的div设置坐标
      //       divs[i].style.left = tempLeft + "rem";
      //       divs[i].style.top = minHeight + "rem";
      //       //更改数组内最小值的值
      //       minHeightArr[index] = minHeight + divs[i].offsetHeight;
      //     }
      //   }
    }
  },
  mounted() {
    this.getHttp("/shoplist");
    // setTimeout(function(){
    //   console.log(this.$refs.shoplistsmall.offsetHeight[0]);
    // },1000);
  }
};
</script>
<style lang="less" scope>
.shoplist-small {
  //   position: relative;
  width: 10.9rem;
  // height:15.5rem;
  float: left;
  margin: 0.4rem;
  background-color: rgb(255, 255, 255);
  img {
    // width:100%;
    // height:58%;
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
    padding: 1rem 1rem;
  }
  span:first-child {
    position: absolute;
    left: -2.5rem;
    bottom: 3rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    background: #fff0f5;

    i {
      font-size: 2rem;
      color: #ff6b9d;
      line-height: 2.75rem;
    }
  }
  div {
    margin: 1rem auto;
    p {
      text-align: center;
      padding: 0 2rem 0.5rem;
      color: #363636;
      font-size: 0.85rem;
    }
    span {
      margin: 0 3rem 1rem;
      color: #4375cd;
    }
    span:last-child {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
