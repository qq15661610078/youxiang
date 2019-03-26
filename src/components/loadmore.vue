<script>
export default {
  name: "LoadMore",
  
  mounted(){
      
      //获取元素
      const box = this.$refs.box;
      console.log(box);
      let winHeight = document.documentElement.clientHeight;
      // 声明一个定时器timer
      var timer = null;
       var _this = this;
      function callback() {
        let top = box.getBoundingClientRect().top;
        console.log(top);
       
        if (top <= winHeight) {
          // 再次请求数据
          _this.$parent.getHttp();
          console.log("该加载更多了");
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
    return <div class="box-wrapper" ref="box">加载中...</div>;
  }
};
</script>

