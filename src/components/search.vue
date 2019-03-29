<template>
    <div class="search">
        <i class="el-icon-search"></i>
        <input @focus="focusHandler" type="text" placeholder="搜索日志,商品和代购">
    </div>
</template>
<script>
export default {
    name:"Search",
    data(){
        return{

        }
    },
    methods:{
        focusHandler(){
            this.$router.push('/search')
        }
    }

}
</script>
<style scoped>
.search{
    position: relative;
    width: 19rem;
    height: 2rem;
    left: 1rem;
    top: 1.5rem;
    background-color:#FFFFFF;
    border-radius: 5px;
}
.search>input{
    width: 16rem;
    height: 2rem;
    border-radius: 3px;
    position: absolute;
    left: 2.5rem;
    outline-style: none;
}
i{
    position: absolute;
    top: 0.3rem;
    left: 0.5rem;
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
    display: inline-block;  
    z-index: 999;
}
</style>
