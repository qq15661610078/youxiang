<template>
    <div class="mineview">
        <div class="mineimg">
            <div class="touxiang"></div>
            <p class="username">Daisy</p>
            <div class="userinfo">
                <span class="guanzhu">
                    关注
                    <span class="guanzhu-num">128</span>
                </span>
                <span class="whiteline">|</span>
                <span class="fans">
                    粉丝
                    <span class="fans-num">920</span>
                </span>
            </div>    
        </div>
        <div class="minebutton">
            <ul>
                <li v-for="(item,index) in minebutton" :key="index">
                    <img :src='item' alt="">
                    <p>购物车</p>
                </li>
            </ul>
        </div>
        <div class="share">
            <el-tabs v-model="activeName">
                <el-tab-pane label="我的分享" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="我的求购" name="second">配置管理</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name:'MineNav',
    data() {
      return {
        activeName: 'first',
        minebutton:[]
      };
    },
    mounted(){
        this.$axios.get(this.HOST + '/haidai')
        .then(res => {
            this.minebutton = res.data.mineimg.minebutton;
        })
    }
}
</script>

<style>
.mineimg{
    width: 100%;
    height: 14rem;
    background: url('../../server/public/images/mineimg.jpeg') no-repeat;
    background-size: 25rem;
    position: relative
}
.touxiang{
    width: 5.5rem;
    height: 5.5rem;
    background: url('../../server/public/images/mine-touxiang.jpeg') no-repeat;
    background-size: 5.5rem;
    border-radius: 50%;
    position: absolute;
    top: 3rem;
    left: 9rem;
}
.username{
    color: white;
    position: absolute;
    top: 9rem;
    left: 10.5rem;
    font-size: 1rem;
}
.userinfo{
    position: absolute;
    top: 11.5rem;
    left: 6.5rem;
}
.guanzhu,.fans{
    color: white;
}
.whiteline{
    color: white;
    margin: 0 1rem;
}
.minebutton{
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid rgb(208,208,208);
}
.minebutton li{
    display: inline-block;
    margin: 1rem 1.6rem;
}
.minebutton img{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    text-align: center;
}
.minebutton p{
    margin: 0.5rem auto;
    font-size: 14px;
    text-align: center;
}
.share .el-tabs__item{
    margin: 0 3.2rem;
}
.share .el-tabs__active-bar{
    height: 0;
}
.share .is-active{
    color: rgb(238,117,157);
}

</style>


