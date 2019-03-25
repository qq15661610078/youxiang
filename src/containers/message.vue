<template>
    <div>
        <TopNav/>
        message
        <BottomNav/>
    </div>
</template>

<script>
import TopNav from '../components/topnav'
import BottomNav from '../components/bottomnav'

export default {
    name:'Message',
    components:{
        TopNav,
        BottomNav
    }
}
</script>

<style scoped>

</style>
