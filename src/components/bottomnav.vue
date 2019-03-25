<template>
    <div class="bottom-nav">
        <ul>
            <li class="bottom-item">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </li>
            <li class="bottom-item">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </li>
            <li class="bottom-item">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </li>
            <li class="bottom-item">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </li>
            <li class="bottom-item">
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </li>
            
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
    background-color: red
}
.bottom-item{
    margin: 0 20px;
    float: left;
}
.bottom-item i{
    text-align: center
}
.bottom-item p{
    margin-top: 2px;
}
</style>


