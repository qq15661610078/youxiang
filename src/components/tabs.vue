<template> 
    <div class="box">   
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
            <el-tab-pane label="推荐" name="first" value>
                <List />
            </el-tab-pane>
            <el-tab-pane label="关注" name="second">关注</el-tab-pane>
            <el-tab-pane label="国家" name="third">国家</el-tab-pane>
            <el-tab-pane label="护肤" name="fourth">护肤</el-tab-pane>
            <el-tab-pane label="时尚" name="five">时尚</el-tab-pane>
            <el-tab-pane label="彩妆" name="six">彩妆</el-tab-pane>
        </el-tabs>
    </div> 
</template>
<script>
import List from '../components/list'

export default {
    name:"Tabs",
    components:{
        List
    },
    data(){
        return{
            activeName: 'first'
        }
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style>
.box{
    padding: 10px;
    box-sizing: border-box
}
.tabs{
    padding-bottom: 10px;
}
.el-tabs__item.is-active{
    color: #FF6B9E !important;
}
.el-tabs__item:hover{
    color: #FF6B9E !important;
}
.el-icon-arrow-right:before {
    content: "" !important;
}
.el-icon-arrow-left:before {
    content: "";
}
.el-tabs__item {
    padding: 0 15px 20px 15px;
}
.el-tabs__item{
    font-size: 16px;
    font-weight: 500;
}
.el-tabs__nav-wrap::after{
    content: "";
    width: 100%;
    height: 0;
    background-color: #E4E7ED;
    z-index: 1;
}
.el-tabs__active-bar{
    height: 0;
}

</style>
