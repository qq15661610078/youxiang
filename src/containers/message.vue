<template>
    <div>
        <TopNav/>
        <Message1 />
         
        message
        <BottomNav/>
    </div>
</template>

<script>
import TopNav from '../components/topnav'
import Message1 from "../components/message1"
import BottomNav from '../components/bottomnav'

export default {
    name:'Message',
    components:{
        TopNav,
        Message1,
        BottomNav
    }
}
</script>

<style scoped>


</style>
</style>
