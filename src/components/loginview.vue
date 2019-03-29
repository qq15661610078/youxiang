<template>
    <div class="loginview">
        <div class="login-headimg">
            <img :src="loginhead" alt="">
        </div>
        <div class="login-input">
            <div class="login-username">
                <i class="iconfont icon-shouji"></i>
                <el-input class='username' v-model="input" placeholder="请输入用户名"></el-input>
            </div>
            <div class="login-password">
                <i class="iconfont icon-suo"></i>
                <el-input placeholder="请输入密码" v-model="input11" show-password></el-input>
            </div>
            <router-link tag="div" to="/mine" class="login-button">登录</router-link>
        </div>
        <a class="reg" href="#">新人注册</a>
        <a class='forget' href="#">忘记密码</a>
        <div class="login-others">
            <i class="iconfont icon-qq"></i>
            <i class="iconfont icon-ai-weixin"></i>
            <i class="iconfont icon-xinlangweibo"></i>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            loginhead:'',
            input:'',
            input11:''
        }
    },
    created(){
        this.$axios.get(this.HOST + '/mine')
        .then(res => {
            this.loginhead = res.data.mineimg.minetouxiang
        })
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
.username{
    outline-style: none;
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