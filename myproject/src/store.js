import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function storeLocalStore (state) {
  window.localStorage.setItem("userMsg",JSON.stringify(state));
}

export default new Vuex.Store({
  state: {
    headactive:0,
  },
  mutations: {
    newheadactive(state,msg){
        state.headactive=msg;
    },
  },
  actions: {

  }
})
