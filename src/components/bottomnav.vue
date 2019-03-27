<template>
    <div class="bottom-nav">
        <ul>
            <router-link tag="li" exact to="/" class="bottom-item">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </router-link>
            <router-link tag="li" to="/find" class="bottom-item">
                <i class="iconfont icon-magnifier"></i>
                <p>发现</p>
            </router-link>
            <router-link tag="li" to="/buy" class="bottom-item">
                <i class="iconfont icon-gouwu"></i>
                <p>购买</p>
            </router-link>
            <router-link tag="li" to="/message" class="bottom-item">
                <i class="iconfont icon-xiaoxi"></i>
                <p>消息</p>
            </router-link>
            <router-link tag="li" to="/mine" class="bottom-item">
                <i class="iconfont icon-buoumaotubiao03"></i>
                <p>我</p>
            </router-link>
            
        </ul>
    </div>
</template>

<script>
export default {
    name:'Bottom'
}
</script>

<style scoped>
.bottom-nav{
    width: 100%;
    height: 3rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 888
}
.bottom-item{
    width: 18.8%;
    height: 3rem;
    display: inline-block;
    box-sizing: border-box;
    padding-top: 5px;
}
.bottom-item i{
    display: block;
    text-align: center;
    font-size: 1.5rem;
}
.bottom-item p{
    padding-top: 2px;
    font-size: 12px;
    text-align: center
}
.active{
    color: rgb(238,117,157);
}
</style>


