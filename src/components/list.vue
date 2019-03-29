<template>
    <div class="box" ref="wrapper">
        <ul ref="ul_box">
            <router-link tag="li" :to="{name:'Detail',params:{id:item.id,src:item.img}}" v-for="(item,index) in listData " :key="index">
                <img :src="item.img" alt="">
                <p class="re-title">{{item.title}}</p>
                <p class="re-content">{{cutcontent(item.content)}}</p>
                <img class="touxiang" :src="item.touxiang" alt="">
                <span class="nicheng">{{item.nicheng}}</span>
                <i class="iconfont icon-zan1"></i>
                <span class="zan-num">{{item.zan}}</span>        
            </router-link>
        </ul>
        <loadMore ref="Child"/>
    </div>
    
</template>
<script>
import loadMore from "./loadMore"
export default {
    name:"Scroller",
    components:{
        loadMore
    },
    data(){
        return{
           listData:[] 
        }
    },
    mounted(){
        this.getHttp()
        this.$refs.Child.loadMore();       
        //获取视口高度
        /* const winHeight = document.documentElement.clientHeight;
        window.addEventListener("scroll",function(){
        var scrollHeight = document.documentElement.scrollTop;
            if(scrollHeight>=winHeight){               
            }        
        }) */  
        /* this.$nextTick(function () {            
        }) */
        
    },
    methods:{
        getHttp(){
            this.$axios.get(this.HOST + '/banner')
            .then(data =>{
                //console.log(data.data.banners);
                
                
                this.listData = this.listData.concat(data.data.banners);
            })
            .catch(error =>{
                console.log(error);
                
            })
        },
        cutcontent(content){
            if(content.length > 18){
                return content.substring(0,18) + '...'
            }
            return content
        }  
    } 
}


</script>
<style scoped>
*{
    color: rgb(110, 110, 110);
}
.box{
    width: 100%;
    height: auto;
    /* padding: 10px; */
    /* overflow: hidden; */
}
li{
    width:48%;
    float: left;
    background-color: white;
    box-sizing: border-box;
    margin-bottom: 1rem;
    position: relative;
}
img{
    width:100%;
}
li:nth-child(even){
    margin-left: 0.5rem;
}
.re-title{
    padding: 1rem;
    font-size: 14px;
}
.re-content{
    padding: 0 1rem 1rem;
    font-size: 14px;
    line-height: 1rem;
    color: rgb(201, 201, 201);
}
.touxiang{
    width: 1.7rem;
    border-radius: 50%;
    margin: 0 1rem 1rem;
}
.nicheng{
    font-size: 12px;
    color: rgb(201, 201, 201);
    position: absolute;
    bottom:1.6rem;
    left: 3rem;
}
.icon-zan1{
    color: rgb(236,115,155);
    font-size: 1rem;
    position: absolute;
    bottom: 1.5rem;
    left: 6.5rem;
}
.zan-num{
    font-size: 12px;
    color: rgb(201, 201, 201);
    position: absolute;
    bottom: 1.6rem;
    left:7.5rem;
}
</style>
