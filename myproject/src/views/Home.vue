<template>
  <div class="home">
    <myHeader/>
    <HelloWorld />
    <router-link to="/text">text</router-link>
    <mytext @doing="doing" />
    我是首页的msg:{{msg}}
    <div>
      <p>我当前的IP：{{textip}}</p>
      <p>我当前的城市：{{textcity}}</p>
    </div>  
    
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from "@/components/header.vue"
import HelloWorld from '@/components/HelloWorld.vue'
import mytext from '@/components/mytext.vue'
import axios from 'axios'
import {text} from '@/api/user'
export default {
  name: 'home',
  components: {
    HelloWorld,mytext,myHeader
  },
  data(){
    return {
      msg:"",
      myprovince:"-1",
      city:{},
      mycity:"-1",
      area:{},
      myarea:"-1",
      textip:"",
      textcity:"",
      weatherinfo:'',
      caiyunInfo:"",
    }
  },
  created(){
    this.textip = returnCitySN.cip
    this.textcity = returnCitySN.cname
    var that = this;
    
  },
  mounted(){
    var that = this;
    
  },
  methods:{
    doing(opt){
      this.msg = opt.msg;
    },
  },
}
</script>
