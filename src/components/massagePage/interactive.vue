<template>
<div>
    
        <!-- <ul>

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
<<<<<<< HEAD
        </ul>
=======
             <li class="dialog">
                <div class="HeadPortrait">
                     <img src="../../assets/img/002.jpg" alt="">
                </div>
                <div class="text-right">
                       <span class="text">Catherinezhu</span>
                    <span class="time">下午01:46</span>
                </div>
            </li>
             <li class="dialog">
                <div class="HeadPortrait">
                     <img src="../../assets/img/003.jpg" alt="">
                </div>
                <div class="text-right">
                     <span class="text">ColorBlocker</span>
                     <span class="time">下午01:38</span>
                </div>
            </li>
             <li class="dialog">
                <div class="HeadPortrait">
                     <img src="../../assets/img/004.jpg" alt="">
                </div>
                <div class="text-right">
                    <span class="text">香芋小姐</span>
                    <span class="time">上午10:46</span>
                </div>
            </li>
             <li class="dialog">
                <div class="HeadPortrait">
                     <img src="../../assets/img/005.jpg" alt="">
                </div>
                <div class="text-right">
                    <span class="text">K.</span>
                    <span class="time">昨天</span>
                </div>
            </li>
             <li class="dialog">
                <div class="HeadPortrait">
                     <img src="../../assets/img/006.jpg" alt="">
                </div>
                <div class="text-right">
                    <span class="text">澳洲代你</span>
                    <span class="time">昨天</span>
                </div>
            </li>
             <li class="dialog">
                <div class="HeadPortrait">
                     <img src="../../assets/img/007.jpg" alt="">
                </div>
                <div class="text-right">
                    <span class="text">小叮韩屋</span>
                    <span class="time">17/07/03</span>
                </div>
            </li>
             <li class="dialog">
                <div class="HeadPortrait">
                     <img src="../../assets/img/008.jpg" alt="">
                </div>
                <div class="text-right">
                    <span class="text">脸很大的兔子</span>
                    <span class="time">17/07/03</span>
                </div>
            </li>
        </ul> -->
>>>>>>> 5ed69ad3a29237298d4c3e9d3ce47575b750e171
        
    
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
<style>
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

