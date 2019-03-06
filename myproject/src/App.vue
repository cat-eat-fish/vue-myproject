<template>
  <div id="app">
    <!-- <router-view/> -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  created(){
      // localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
      // window.addEventListener("beforeunload",()=>{localStorage.removeItem("userMsg")})
  },
  mounted(){
    
  }
}
</script>


<style lang="scss">
  #app{width: 100%;height: 100%;}
</style>
