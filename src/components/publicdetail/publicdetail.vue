<template>
    <div>
        <div class="pinknav" ref="pinknav">
            <span><i class="el-icon-arrow-left" @click="backHandler"></i></span>
            <p>手提包</p>
        </div>
        <div class="navheight">
            <div class="detail" >
            <div>
                <img :src="url"  alt="">
            </div>
            <p class="content">{{content}}</p>
            <hr>
            <p><span>￥{{price}}</span></p>
            <hr>
            <p>其他</p>
        </div>
        
        <ul class="choose"> 
            <li>
          <i class="iconfont shoucang" v-show="!showCommentInput"  @click="showCommentInput = !showCommentInput">&#xe646;</i> 
          <i class="iconfont shoucang" v-show="showCommentInput"  @click="showCommentInput = !showCommentInput">&#xe64e;</i> 
          收藏
        </li>
            <li><i class="iconfont add">&#xe61b;</i> 加入购物车</li>
            <li><i class="iconfont buy">&#xe64c;</i> 立即购买</li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"publicDetail",
    data(){
        return{
             showCommentInput : false,
             
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
        // var navheight = this.$refs.pinknav.offsetHeight;
        // console.log(navheight)
    },
    methods:{
        cutContent(content){
            if(content.length > 15){
                return content.substring(0,15)+"..."
            }
            return content;
        },
        // puBuLiu(){
        //     for(var i=0; i<shopListData.length; i++){
        //         console.log('')
        //     }
        // },
        backHandler(){
            this.$router.push('/buy')
        },
    }
}


</script>
<style scope lang="less">
.navheight {
    hr{
        margin:0 1rem;
        
    }
  position: absolute;
  top: 4rem;
  .detail{
    p{
        text-align: left;
        margin:1rem ;
    }
    div{
        background-color: white;
        padding:2rem 6rem;
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
}
.pinknav{
    position: fixed;
    z-index: 22;
    width: 100%;
    height: 4rem;
    background: url('../../../server/public/images/pinknav.png');
    span{
            i{
        position: absolute;
        top: 1.5rem;
        left: 1rem;
        font-size: 25px;
        color: aliceblue;
        z-index: 666
        }
    }
    p{
        text-align:center;
        font-size:1.25rem;
        padding:1.25rem 4rem;
        color:white;
    }
    .content{
            padding: 1rem;
            line-height: 2rem;
            margin-bottom: 4rem;
            height:2rem;
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
    
    
}

</style>
