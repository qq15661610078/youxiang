<template>
    <div>
        <TopNav />
        <Carousel />
        <ul class="content-list">
            <li><img src="../../server/public/images/meizhuang.gif" alt=""><p>彩 妆</p></li>
            <li><img src="../../server/public/images/gerenhuli.gif" alt=""><p>个人护理</p></li>
            <li><img src="../../server/public/images/muying.gif" alt=""><p>母 婴</p></li>
            <li><img src="../../server/public/images/baojian.gif" alt=""><p>保 健</p></li>
            <li><img src="../../server/public/images/fuzhuang.gif" alt=""><p>服 装</p></li>
            <li><img src="../../server/public/images/peishi.gif" alt=""><p>配 饰</p></li>
            <li><img src="../../server/public/images/jiaju.gif" alt=""><p>家 居</p></li>
            <router-link  tag="li" to="/buymore"><img src="../../server/public/images/more.gif" alt=""><p>更 多</p></router-link>
        </ul>
        <ShopList />
        <bottomNav />
    </div>
</template>

<script>
import TopNav from '../components/topnav';
import Carousel from "../components/Carousel.vue";
import ShopList from '../components/shopList.vue'
import BottomNav from '../components/bottomnav'

export default {
    name:'Buy',
    components:{
        TopNav,
        Carousel,
        ShopList,
        BottomNav
    },
     
}
</script>

<style lang="less" scoped>
.content-list{
    margin-top:0.5rem;
    height:13rem;
    width:100%;
    background-color: rgb(255,255,255);
   li{
        float:left;
        margin:0.35rem;
        width:5.06rem;
        height:5.06rem;
            img{
                width:60%;
                height:60%;
               padding:1rem;
            }
            p{
                color:#898989;
                text-align: center;
                font-size:0.75rem
            }
        }
}


</style>
