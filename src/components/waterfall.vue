<template>
    <div>
        <div class="box-wrapper" ref="box"><p>加载中...</p></div>
    </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
// import axios from 'axios'
export default {
    name:"WaterFall",
     data() {
    return {
      shopListData: [],
            // id:"",
            // url:"",
            // content:"",
            // price:""// request param
    }
  },
  components: {
        vueWaterfallEasy
  },
  methods: {

    getData() {
        const id = this.$route.params.id;
        console.log(id);
        
            axios.get(this.HOST + "/shoplist",{
            })// 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
            .then(res => {
            this.shopListData = this.shopListData.concat(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    },
  },
  mounted() {
    
    //获取元素
      const box = this.$refs.box;
      // console.log(box);
      let winHeight = document.documentElement.clientHeight;
      // 声明一个定时器timer
      var timer = null;
       var _this = this;
      function callback() {
        let top = box.getBoundingClientRect().top;
        // console.log(top);
       
        if (top <= winHeight) {
          // 再次请求数据
          _this.$parent.getHttp();
          // console.log("该加载更多了");
        }
      }
      window.addEventListener("scroll", function(event) {
          
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          callback();
        },300);
      });
    
  },
  
  render() {
    return <div class="box-wrapper" ref="box"><p>加载中...</p></div>;
  }
  
}
</script>
<style scop lang="less">
.box-wrapper{
    color:#757575;
    
    p{
      text-align: center;
      font-size: 1rem;
    }
    
}
</style>