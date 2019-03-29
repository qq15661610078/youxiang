<template> 
    <div class="box">   
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
            <el-tab-pane label="推荐" name="first" value>
                <List />
            </el-tab-pane>
            <el-tab-pane label="关注" name="second">关注</el-tab-pane>
            <el-tab-pane label="国家" name="third">国家</el-tab-pane>
            <el-tab-pane label="护肤" name="fourth">护肤</el-tab-pane>
            <el-tab-pane label="时尚" name="five">时尚</el-tab-pane>
            <el-tab-pane label="彩妆" name="six">彩妆</el-tab-pane>
        </el-tabs> -->
        <ul class="app-tab">
            <li><span v-bind:class="{current: num==1}" v-on:click="change(1)">推荐</span></li>
            <li><span v-bind:class="{current: num==2}" v-on:click="change(2)">关注</span></li>
            <li><span v-bind:class="{current: num==3}" v-on:click="change(3)">国家</span></li>
            <li><span v-bind:class="{current: num==4}" v-on:click="change(4)">护肤</span></li>
            <li><span v-bind:class="{current: num==5}" v-on:click="change(5)">时尚</span></li>
            <li><span v-bind:class="{current: num==6}" v-on:click="change(6)">彩妆</span></li>
        </ul>
        <div class="content">
            <transition>
                <div v-show="num == 1">
                    <List/>
                </div>
            </transition>
            <transition>
                <div v-show="num == 2">关注</div>
            </transition>
            <transition>
                <div v-show="num == 3">国家</div>
            </transition>
            <transition>
                <div v-show="num == 4">护肤</div>
            </transition>
            <transition>
                <div v-show="num == 5">时尚</div>
            </transition>
            <transition>
                <div v-show="num == 6">彩妆</div>
            </transition>
        </div>
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
            num:1
        }
    },
     methods: {
      change: function(index) {
         this.num = index
      }
    }
}
</script>
<style>
.box{
    padding: 10px;
    box-sizing: border-box;
    margin-top: 3rem;
}
.content{
    margin-top: 4rem;
}
.app-tab {
    width: 100%;
    height: 3rem;
    z-index: 888;
    background-color: white;
    position: fixed;
    top: 4rem;
    left: 0;
    border-bottom: 1px solid lightgray;
}
 
.app-tab li {
  float: left;
  width: 16.6%;
  height: 3rem;
  background-color: white;
  cursor: pointer;
  text-align: center;
  line-height: 3rem;
  z-index: 888;
}
.current {
  color: #FF6B9E
}
/* .tabs{
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
} */

</style>
