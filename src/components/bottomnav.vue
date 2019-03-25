<template>
    <div class="bottom-nav">
        <ul>
            <router-link exact to="/" class="bottom-item">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </router-link>
            <router-link to="/find" class="bottom-item">
                <i class="iconfont icon-magnifier"></i>
                <p>发现</p>
            </router-link>
            <router-link to="/buy" class="bottom-item">
                <i class="iconfont icon-gouwu"></i>
                <p>购买</p>
            </router-link>
            <router-link to="/message" class="bottom-item">
                <i class="iconfont icon-xiaoxi"></i>
                <p>消息</p>
            </router-link>
            <router-link to="/mine" class="bottom-item">
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
}
.bottom-item{
    margin: 0 22px;
    float: left;
}
.bottom-item i{
    text-align: center;
    font-size: 30px
}
.bottom-item p{
    margin-top: 5px;
    font-size: 12px;
    text-align: center
}
.active{
    color: rgb(238,117,157);
}
</style>


