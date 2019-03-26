<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="动态" name="first" ></el-tab-pane>
          <el-tab-pane label="互动" name="second" >
             <interactive />
          </el-tab-pane>
          <el-tab-pane label="通知" name="third" >通知</el-tab-pane>
       </el-tabs>
    </div>
</template>

<script>
 import Interactive from "./massagePage/interactive"
 export default {
     name:'message1',
    data(){
        return {
         activeName: 'first'
        }
    },
     methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        Interactive
    }
 }
</script>
<style>
/* .el-tabs__nav-wrap{
  width:750px;
}
.el-tabs__item.is-active{
    width:100%
}
.el-tabs__item.is-top{
    width:100%；
} */

.el-tabs--bottom 
.el-tabs__item.is-bottom:nth-child(2), 
.el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
 .el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
       padding-left: 3rem;
    
}
.el-tabs__item{
     padding: 0px 3rem;
     font-size: 16px;
     height: 50px;
     line-height: 50px;
}
.el-tabs__item.is-active{
    color:rgb(238,117,157);
}
.el-tabs__active-bar{
    height: 0;
}
</style>


