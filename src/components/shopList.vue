<template>
    <div>
        <div>
            <div class='shoplist' v-for="(item,index) in shopListData" :key="index">   
                <img :src="item.url" alt="">  
                <p>{{ cutContent(item.content)}}</p>       
                <span>￥{{item.price}}</span>
            </div>
            <LoadMore />   
        </div>
    </div>
</template>
<script>
import LoadMore from "./news"

export default {
    name:"ShopList",
    components:{
        LoadMore
    },
    data(){
        return{
        shopListData:[],
       
        }
    },
    props:{
        id:{
            type: [String, Number],
            default: 0
        },
        url:{
            type: [String, Number],
            default: 0
        },
        content:{
            type: [String, Number],
            default: 0
        },
        price:{
            type: [String, Number],
            default: 0
        }
    },
    methods:{
        cutContent(content){
            if(content.length > 15){
                return content.substring(0,8)+"..."
            }
            return content;
        },
        getHttp(){
            this.$axios
            .get(this.HOST + "/shoplist",{
            })
            .then(res => {
                // this.shopListData = res.data.shopListData;
                
                
                this.shopListData = this.shopListData.concat(res.data.shopListData);
                
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    mounted(){
        this.getHttp("/shoplist")


    }
}
</script>
<style lang="less" scope>
.shoplist{
    width:46%;
    height:15.5rem;
    float:left;
    margin:0.4rem;
    background-color: rgb(255,255,255);
    img{
        width:80%;
        height:58%;
        padding:1.45rem;
    }
    p{
        text-align: center;
        margin:0 1rem 0.5rem;
        color:#363636;
        font-size: 0.85rem
    }
    span{
        margin:0 3rem 0;
        color:#4375CD
    }
}
</style>
