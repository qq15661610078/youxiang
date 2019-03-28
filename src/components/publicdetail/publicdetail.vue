<template>
    <div class="onediv">
        <div class="pinknav">
            <p>手提包</p>
        </div>
        <div class="detail" >
            <div>
                <img :src="url"  alt="">
            </div>
            <p class="content">{{content}}</p>
            <p><span>￥{{price}}</span></p>
            <p>其他</p>
        </div>
        
        <ul class="choose"> 
            <li><i class="iconfont shoucang">&#xe646;</i> 收藏</li>
            <li><i class="iconfont add">&#xe61b;</i> 加入购物车</li>
            <li><i class="iconfont buy">&#xe64c;</i> 立即购买</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"publicDetail",
    data(){
        return{
            shopListData:[],
            id:"",
            url:"",
            content:"",
            price:""
        }
    },
    mounted(){
        
        const id = this.$route.params.id;
        console.log(id);
        // console.log(this.HOST + `/shoplistid?id=${id}`);
        //  this.$axios.get(this.HOST + "/shoplistid?id="+id)
        // var _this = this;
        this.$axios.get(this.HOST + `/shoplistid?id=${id}`)
         .then(res =>{
             this.url = res.data[0].url;
             this.content = res.data[0].content;
             this.price = res.data[0].price;
            //   console.log(res.data)
            //   console.log(this.url)
         })
         .catch(error => {
             console.log(error)
         })
        
        
    },
    methods:{
        cutContent(content){
            if(content.length > 15){
                return content.substring(0,15)+"..."
            }
            return content;
        },
        puBuLiu(){
            for(var i=0; i<shopListData.length; i++){
                
            }
        }
    }
}

//瀑布流加载
var box = document.querySelector('.onediv');
var dataStr = '{}'
</script>
<style scope lang="less">
.pinknav{
    width: 100%;
    height: 4rem;
    background: url('../../../server/public/images/pinknav.png');
    p{
        text-align:center;
        font-size:1.25rem;
        padding:1.25rem 4rem;
    }
}
.choose{
    position:fixed;
    bottom:4rem;
    display:flex;
    li{
        float:left;
        flex-grow:1;
        margin:0.05rem 1.25rem;
    }
    i:nth-child(2):hover{
        font-size: 10rem;
        color:red;
    }
    .shoucang{

    }
    .buy{

    }
    
}
.detail{
    p{
        text-align: left;
        margin:1rem 2rem;
    }
    div{
        background-color: white;
        padding:0 5rem;
        img{
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
    }
    }
     span{
        color:#4375CD
        }
    
}
</style>
