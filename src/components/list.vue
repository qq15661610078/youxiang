<template>
    <div class="box" ref="wrapper">
        <ul ref="ul_box">
            <li v-for="(item,index) in listData " :key="index">
                <img :src="item" alt="">
                <p>6.18大促</p>               
            </li>
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
        this.getHttp("/banner")
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
        getHttp(url){
            this.$axios.get(this.HOST + url)
            .then(data =>{
                console.log(data.data.banners);
                
                //console.log(data);
                /* this.listData = data.data.banners; */
                this.listData = this.listData.concat(data.data.banners);
            })
            .catch(error =>{
                console.log(error);
                
            })
        }    
    } 
}


</script>
<style>
.box{
    width: 100%;
    /* padding: 10px; */
    overflow: hidden;
    
}
li{
    width:45%;
    float: left;
    
}
img{
    width:100%;
}
li:nth-child(even){
    margin-left: 20px;
}
</style>
