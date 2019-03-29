<template>
    <div>
        <TopNav/>
        <Tabs />
        <BottomNav/>
    </div>
</template>

<script>
import TopNav from '../components/topnav'
import Tabs from '../components/tabs'
import BottomNav from '../components/bottomnav'

export default {
    name:'Home',
    components:{
        TopNav,
        BottomNav,
        Tabs
    }
}
</script>

<style scoped>


</style>


