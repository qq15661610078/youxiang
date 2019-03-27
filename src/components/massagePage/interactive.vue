<template>
    <div>
        <ul>

            <li class="dialog" v-for="(item,index) in page" :key="index" >
               
                <div class="HeadPortrait">
                     <img :src="item.touxiang" alt="">
                </div>
               
                <div class="text-right">
                    <span class="text">{{item.nicheng}}</span>
                    <span class="time">{{item.time}}</span>
                    <br><br><br>

                    <span class="text2">{{item.text}}</span>  
                </div>
            </li>
        </ul>
    </div>
</template>
<script>



export default {
    name:'interactive',
    data(){
        return{
           page:[]
        }
    },
    mounted(){
        this.$axios.get(this.HOST+"/message")
        .then(res =>{
           this.page = res.data.dialoguePage;
        })
    }
}
</script>
<style scoped>

.HeadPortrait{
    width: 60px;
    height:60px;
    margin: 0px 10px 0px;
    float: left;

}
.HeadPortrait>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.text-right>.text{
    font-size:17px ;
    color:#4E494A;
    margin-top:13px;
    float:left;
  
   
}
.text-right{
  margin-top: 8px;
  
}
.text-right>.time{
    float:right;
    color:#AEA5A8;
    margin-right:15px;
    margin-top: inherit;
    
}
.dialog{
    height:70px;
     
}
.text-right>.text2{
    font-size: 15px;
    color:#938E8F;
}
</style>

