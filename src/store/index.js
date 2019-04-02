import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        userInfo:""
    },
    mutations:{
        setUser(state,userName){
            state.userInfo = userName;
        }
    },
    actions:{
        setUserActions({commit},userName){
            commit("setUser",userName)
        }
    },
    getters:{
        getUser(state){
            return state.userInfo ? state.userInfo :""
        }
    }
})