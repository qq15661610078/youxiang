<template>
    <div class="pinknav">
        <Search />
        <i class="el-icon-message"></i>
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
    background: url('../../server/public/images/pinknav.png')
}
i{
    position: absolute;
    top: 2rem;
    right: 1.8rem;
    font-size: 22px;
    color: aliceblue;
}
</style>

