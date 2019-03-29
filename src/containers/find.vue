<template >
     <div class="bgColor">
        <TopNav/>
        <div class="find-buy">
            <div class="find-message">
                 <p class="find-line">|</p>
                 <p class="find-message1">求购信息</p>
                 <p class="find-message2">查看更多</p>
            </div> 
            <div class="find-touxiang">
                <div class="touxiangTop">
                    <img class="txIMG" src="../assets/img/touxiang1.jpg" alt="">
                    <span>大元元</span>
                    <p>求购 TF#09 黑管！ 要原产国生产的</p>
                    <router-link tag="i" class="iconfont " :to="{name:'Buyxq1'}">&#xe604;</router-link>
                </div>
                <div class="touxiangButtom">
                    <img src="../assets/img/touxiang2.jpg" alt="">
                    <span>彭少女</span>
                    <p>MY BURBERRY 香氛</p>
                    <router-link  tag="i" class="iconfont" :to="{name:'Buyxq2'}">&#xe604;</router-link>
                </div>
            </div> 
        </div>
        <div class="find-hot">
             <div class="find-message">
                 <p class="find-line">|</p>
                 <p class="find-message1">热门话题</p>
                 <p class="find-message2">查看更多</p>
            </div> 
             <div class="find-tupian">
                <div class="hotTouxiangOne">
                    <img src="../assets/img/j6.jpg" alt="">
                    <span># 周末约饭</span>
                    <p>140人参与</p>
                    <router-link  tag="i" class="iconfont hotIconfont" :to="{name:'Hotxq1'}">&#xe604;</router-link>
                </div>
                <div class="hotTupianTwo">
                    <img src="../assets/img/j7.png" alt="">
                    <span># 美白化妆水</span>
                    <p>137人参与</p>
                    <router-link  tag="i" class="iconfont hotIconfont" :to="{name:'Hotxq2'}">&#xe604;</router-link>
                </div>
                <div class="hotTupianThree">
                    <img src="../assets/img/j8.png" alt="">
                    <span># 家居好物</span>
                    <p>114人参与</p>
                    <router-link  tag="i" class="iconfont hotIconfont" :to="{name:'Hotxq3'}">&#xe604;</router-link>
                </div>
            
            </div> 
        </div>
        <div class="find-goBuy">
            <div class="find-message">
                 <p class="find-line">|</p>
                 <p class="find-message1">走到哪购到哪</p>
                 <p class="find-message2">查看更多</p>
            </div> 
            <div class="find-goBuyImg">
                <img  class="goBuyImg1" src="../assets/img/j2.png" alt="">
                <img  class="goBuyImg2"  src="../assets/img/j3.png" alt="">
                <img  class="goBuyImg3"  src="../assets/img/j4.jpg" alt="">
            </div>
        </div>
         <BottomNav/>
    </div>   
         
</template>

<script>
import TopNav from '../components/topnav'

import BottomNav from '../components/bottomnav'
export default {
    name:'Find',
    components:{
        TopNav,
        BottomNav
    }
}
</script>

<style scoped>
.bgColor{
    margin-top: 4rem;
}
.find-buy{
    height: 10rem;
    background-color:white;
}
.find-message p{
    font-size: 1rem;
    float: left;
    color: #000;
    margin-top:1.25rem;
}
.find-line{
    margin-left: 1.25rem;
    
}
.find-message1{
    margin-left: 0.625rem;
}
.find-message2{

    margin-left: 12.19rem;
}
.find-touxiang img{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-top: 0.625rem;
    margin-left: 1.25rem;
}
.touxiangTop,.touxiangButtom {
    position: relative;
    font-size: 0.875rem;
}
.touxiangTop span,.touxiangButtom span{
    position: absolute;
    margin-top: 0.94rem;
    margin-left: 0.312rem;
}
.touxiangTop p,.touxiangButtom p{
    position: absolute;
    margin-left: 4.06rem;
    margin-top: -0.94rem;
}

.find-hot{
    margin-top: 1.25rem;
    height: 18.75rem;
    background-color: white;
}
.find-tupian img{
    width:4.375rem;
    height: 4.375rem;
    margin-left: 1.25rem;
    margin-top: 0.625rem;
    border-radius: 0.312px;
}
.find-tupian{
    position: relative;
}
.find-tupian span{
    position: absolute;
    margin-top: 1.56rem;
    margin-left: 0.625rem;
}
.find-tupian p{
    position: absolute;
    margin-left: 6.25rem;
    margin-top: -1.875rem;
}
.find-goBuy{
    margin-top: 1.25rem;
    height: 11.75rem;
    background-color: white;
}
.find-goBuy .find-message .find-message2{
    margin-left: 18.44rem;
    margin-top: -0.94rem;
}
.find-goBuyImg img{
    width: 6.25rem;
    height: 6.25rem;
    margin-top: 0.94rem;
}
.goBuyImg1{
    margin-left: 1.25rem;   
}
.goBuyImg2{
    margin-left: 0.81rem;   
}
.goBuyImg3{
    margin-left: 0.81rem;   
}
.iconfont{
    margin-left: 17.5rem;
    font-size: 1.25rem;
}
.hotIconfont{
    margin-left: 15.623rem;
    margin-top: 2.5rem;
    position: absolute;
}

</style>
</style>
