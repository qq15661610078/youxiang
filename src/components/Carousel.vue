<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
            <swiper-slide v-for="(images, index) in SwiperImgData" :key="index"><img :src="images" alt=""></swiper-slide>
        <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
    
        </swiper>
    </div>
</template>
<script>
export default {
    name:"Carousel",
    data() {
        return {
            swiperOption: {
                    pagination: {
                        el: ".swiper-pagination"
                    },
                    loop: true
            },
            SwiperImgData:[]
        };
  },
  
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      this.swiper.slideTo(0, 1000, true)
      this.$axios.get(this.HOST+"/carousel")
      .then(res => {
          this.SwiperImgData = res.data.buyImg.SwiperImgData;
          
      })
      .catch(error => {
          console.log(error);
      })
    }
}
</script>
<style scope>
.swiper-slide{
    height:10rem;
}
.swiper-container img{
    height:100%;
    width:100%;
}
</style>