<template>
  <div class="text">
    我是text中的msg：{{msg}}
    <input type="text" v-model="msg">
    <button @click="doing">测试</button>

  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:""
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    doing(){
      this.$emit('doing',{msg: this.msg})
    }
  }
}
</script>
