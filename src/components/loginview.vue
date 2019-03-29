<template>
    <div class="loginview">
        <div class="login-headimg">
            <img :src="loginhead" alt="">
        </div>
        <div class="login-input">
            <div class="login-username">
                <i class="iconfont icon-shouji"></i>
                <el-input v-model="userName" placeholder="请输入用户名" ></el-input>
            </div>
            <div class="login-password">
                <i class="iconfont icon-suo"></i>
                <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
            </div>
            <div class="login-button" @click="loginHandler">登录</div>
            
        </div>
        <a class="reg" href="#">新人注册</a>
        <a class='forget' href="#">忘记密码</a>
        <div class="login-others">
            <i class="iconfont icon-qq"></i>
            <i class="iconfont icon-ai-weixin"></i>
            <i class="iconfont icon-xinlangweibo"></i>
            {{getUser}}
        </div>
    </div>
</template>
<script>
import { mapGetters,mapActions } from "vuex"
import qs from "querystring"
export default {
    name:'Login',
    data(){
        return{
            loginhead:'',
            userName:'',
            pwd:''
        }
    },
    created(){
        this.$axios.get(this.HOST + '/mine')
        .then(res => {
            this.loginhead = res.data.mineimg.minetouxiang
        })
    },
    
    methods:{
        ...mapActions(["setUserActions"]),
        
        /* inputHandler(){
         var userame = this.userName;
         var password = this.pwd;
         console.log(userame);
        }, */
        loginHandler(event){
            event.preventDefault();
            //登陆网络请求
            this.$axios.post("/api/login",qs.stringify({               
                    username:this.userName,
                    password:this.pwd               
            }))
            .then(res=>{
                if(!res.data.msg){
                    console.log(res.data);
                    this.$parent.flag = true;
                    this.setUserActions(this.userName);
                    localStorage.setItem("uname",encodeURIComponent(this.userName))
                    this.$emit("getName",this.userName)
                }else{
                    window.alert("用户名或密码错误");                    
                }
            })
            .catch(error=>{
                console.log(error);               
            })           
        }
    },
    computed:{
    ...mapGetters(["getUser"])
  }
    
}
</script>

<style scoped>
.loginview{
    position: relative;
}
.login-headimg img{
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: absolute;
    top: 5rem;
    left: 9rem;
}
.login-input{
    position: absolute;
    top: 12rem;
    left: 5rem;
}
.login-username,.login-password{
    width: 16rem;
    margin: 1rem 0;
}
.icon-shouji{
    position: absolute;
    top: 1rem;
    left: -2.2rem;
    font-size: 2.5rem;
    color: rgb(239, 143, 175);
}
.icon-suo{
    position: absolute;
    top: 4.6rem;
    left: -2rem;
    font-size: 2rem;
    color: rgb(239, 143, 175);
}
.login-button{
    width: 14rem;
    height: 3rem;
    background: rgb(239, 143, 175);
    border-radius: 5rem;
    text-align: center;
    line-height: 3rem;
    margin-top: 4rem;
}
.reg{
    position: absolute;
    top: 28rem;
    left: 6rem;
}
.forget{
    position: absolute;
    top: 28rem;
    right: 5.5rem;
}
.login-others{
    position: absolute;
    top: 34rem;
    left: 4rem;
}
.login-others i{
    color:rgb(237, 116, 155);
    font-size: 2rem;
    margin: 0 1.5rem;
}

</style>