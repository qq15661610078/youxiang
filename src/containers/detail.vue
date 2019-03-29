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
           <div class="head_photo">

           </div>
           <button class="head_button">+&nbsp;关注</button>
       </div>
       <div class="footnav">
           <div class="zan">              
                   <i class="el-icon-circle-plus-outline"></i>
                   <p>
                       <span>赞•</span><span>999</span>                 
                   </p>                 
           </div>
           <div class="comment">              
                   <i class="el-icon-edit-outline"></i>
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
            type:""
            
        }       
    },
    methods:{
        backHandler(){
            this.$router.push('/')
        },
        collectHandler(){
            var span = document.getElementById("collect_id");             
            span.innerHTML++;          
            localStorage.setItem("mytoken",span.innerHTML);  
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
            this.type = this.detailData[0].img
            //console.log(this.type);

        })
        .catch(error=>{
            console.log(error);
            
        })
        var span = document.getElementById("collect_id"); 
        var span_value = localStorage.getItem("mytoken");
        //console.log(span_value);
        
        
        span.innerHTML =  localStorage.getItem("mytoken");
    }
}
</script>
<style scoped>
.pinknav{
    position: relative;
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
    position: absolute;
    top: 1.5rem;
    left: 7rem;
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
    background-color: aqua;
    margin-left: 1rem;
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
}
.footnav{
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 3rem;
    background-color: #FF6B9E;
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
.zan p{
    position: absolute;
    top: 1.8rem;
    left: 3rem;
}
.comment{
    position: absolute;
    top:-0.9rem;
    left: 7rem;
    background-color:red;
}
.comment p{
    position: absolute;
    top: 1.8rem;
    right: 1rem;
}
.collect{
    position: absolute;
    top:-0.9rem;
    left: 15rem;
    background-color:pink;
}

.collect p{
    position: absolute;
    top: 1.8rem;
    left: 3rem;
}
</style>
