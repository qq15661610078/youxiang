<template>
    <div id="app">
        <ul class="app-tab">
            <li><span v-bind:class="{current: num==1}" v-on:click="change(1)">动态</span></li>
            <li><span v-bind:class="{current: num==2}" v-on:click="change(2)">互动</span></li>
            <li><span v-bind:class="{current: num==3}" v-on:click="change(3)">通知</span></li>
        </ul>
        <div class="content">
            <transition>
                <div v-show="num == 1">1</div>
            </transition>
            <transition>
                <div v-show="num == 2">
                    <Interactive/>
                </div>
            </transition>
            <transition>
                <div v-show="num == 3">3</div>
            </transition>
        </div>
    </div>
</template>

<script>
 import Interactive from "./massagePage/interactive"
 export default {
    name:'message1',
    data(){
        return {
            num:2
        }   
    },
    methods:{
        change: function(index) {
         this.num = index
      }
    },
    components:{
        Interactive
    }
 }
</script>
<style scoped>
.content{
    margin-top: 3rem;
}
.app-tab {
    width: 100%;
    height: 3rem;
    position: fixed;
    top: 4rem;
    left: 0;
    border-bottom: 1px solid lightgray;
}
 
.app-tab li {
  float: left;
  width: 33.3%;
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
</style>

