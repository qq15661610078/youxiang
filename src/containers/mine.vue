<template>
    <div>
        <BottomNav/>
        <div v-if="!flag">
            <LoginView @getName = "getNameHandler"/>
        </div>
        <div v-else>
            <MineView :userName = "userName"/>
        </div>
        
    </div>
</template>

<script>
import BottomNav from '../components/bottomnav'
import LoginView from '../components/loginview'
import MineView from "../components/mineview"
export default {
    name:'Mine',
    data(){
        return{
            flag:false,
            userName:""
        }
        
    },
    components:{
        BottomNav,
        LoginView,
        MineView
    },
   methods:{
       getNameHandler(data){
           this.userName = data;
       }
   },
   mounted(){
     //生命周期
     if(localStorage.getItem("uname")){
        //设置登录状态
        
        this.flag = true,
        this.userName = decodeURIComponent(localStorage.getItem("uname"))
        
     }
   }
    
}
</script>

<style scoped>

</style>
