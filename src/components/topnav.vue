<template>
    <div class="pinknav">
        <Search />
        <i class="iconfont icon-zhaoxiangji"></i>
    </div>
</template>
<script>
import Search from '../components/search'
export default {
    name:'TopNav',
    components:{
        Search
    }
}
</script>

<style scoped>
.pinknav{
    position: relative;
    width: 100%;
    height: 4rem;
    background: url('../../server/public/images/pinknav.png');
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;
}
i{
    position: absolute;
    top: 1.8rem;
    right: 1rem;
    font-size: 22px;
    color: aliceblue;
}
</style>

