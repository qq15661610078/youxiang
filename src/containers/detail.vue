<template>
    <div>
        <div class="pinknav">        
            <span><i class="el-icon-arrow-left" @click="backHandler"></i></span>
            <p>{{title}}</p>
        </div>
       <div>
           <img :src="type" alt="">
       </div>
       <div class="head_container">
           <img class='head_photo' :src="touxiang" alt="">
           <span class="head_nicheng">{{nicheng}}</span>
           <button class="head_button">+&nbsp;关注</button>
           <p class="head_content">{{content}}</p>
       </div>
       <div class="footnav">
           <div class="zan">              
                   <i class="iconfont icon-zan1"></i>
                   <p>
                       <span>赞•</span><span>999</span>                 
                   </p>                 
           </div>
           <div class="comment">              
                   <i class="iconfont icon-pinglun"></i>
                   <p>
                       <span>评论•</span><span>88</span>                 
                   </p>                 
           </div>
           <div class="collect">              
                   <i class="el-icon-star-off"  @click="collectHandler"></i>
                   <p>
                       <span>收藏•</span><span id="collect_id">1510</span>                 
                   </p>                 
           </div>
           
       </div>
    </div>
</template>
<script>
export default {
    name:"Detail",
    data(){
        return{
            detailData:[],
            title:"",
            type:"",
            touxiang:'',
            nicheng:'',
            content:''
            
        }       
    },
    methods:{
        backHandler(){
            this.$router.push('/')
        },
        collectHandler(){
            let span = document.getElementById("collect_id");            
            var storage=window.localStorage;            
            storage.setItem("span.innerHTML",span.innerHTML++);
            
            
        }
    },
    components:{
    },
    mounted(){
        const id = this.$route.params.id;
        console.log(id);
        
        this.$axios.get(this.HOST+"/bannerid?id="+id)
        .then(data=>{
            this.detailData = data.data;
            this.title =this.detailData[0].title; 
            this.type = this.detailData[0].img;
            this.touxiang = this.detailData[0].touxiang;
            this.nicheng = this.detailData[0].nicheng;
            this.content = this.detailData[0].content;
        })
        .catch(error=>{
            console.log(error);
            
        })
    }
}
</script>
<style scoped>
*{
    color: rgb(110, 110, 110)
}
.pinknav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: url('../../server/public/images/pinknav.png')
}
i{
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    font-size: 25px;
    color: aliceblue;
    z-index: 666
}
.pinknav p{
    /* position: absolute;
    top: 1.5rem;
    left: 7rem; */
    text-align: center;
    height: 4rem;
    line-height: 4.7rem;
    font-size: 20px;
    color: aliceblue;
    
}
img{
    width: 100%;
    height: 25rem;
}
.head_container{
    margin-top: 1rem;
    position: relative;
    width: 100%;
    height: 3rem;
}
.head_photo{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-left: 1rem;
}
.head_nicheng{
    color: rgb(150,150,150);
    position: absolute;
    top: 1rem;
    left: 4.5rem;
}
.head_button{
    position: absolute;
    width: 4rem;
    height: 1.7rem;
    right: 1rem;
    top: 0.6rem;
    color: #FF6B9E;
    border: 1px solid #FF6B9E;
    border-radius: 3px;
    background-color: #fff;
    outline-style: none;
}
.head_content{
    padding: 1rem;
    line-height: 2rem;
    margin-bottom: 4rem;
}
.footnav{
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 3.5rem;
    background-color: white;
}
.footnav div{
    font-size: 16px;   
    width: 33.3%;
    float: left;
}

.zan{
    position: absolute;
    top:-0.9rem;
    background-color:blue;
}
.icon-zan1{
    color: rgb(236,115,155);
}
.zan p{
    position: absolute;
    top: 1.9rem;
    left: 3rem;
    font-size: 14px;
}
.comment{
    position: absolute;
    top:-0.9rem;
    left: 7rem;
}
.icon-pinglun{
    color: black;
    font-size: 1.3rem;
    position: absolute;
    top: 1.7rem;
    left: 2rem;
}
.comment p{
    position: absolute;
    top: 1.9rem;
    left: 3.6rem;
    font-size: 14px;
}
.collect{
    position: absolute;
    top:-0.9rem;
    left: 15rem;
    
}
.collect i{
    color: rgb(236,115,155);
}
.collect p{
    position: absolute;
    top: 1.9rem;
    left: 3rem;
    font-size: 14px;
}
</style>
