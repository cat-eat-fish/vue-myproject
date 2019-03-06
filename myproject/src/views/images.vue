<template>
    <div class="my-images">
        <myHeader/>
        <div class="content">
            <h3>推荐图片</h3>
            <ul class="imagesul">
                <li v-for="(item,index) in images" :key="index">
                    <img :src="item.img" >
                    <div class="imgbox">{{item.time}}</div>	
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import myHeader from "@/components/header.vue"
export default {
    components:{myHeader},
    name:"myimages",
    data(){
        return{
            images:{}
        }
    },
    created(){
        this.mydata()
    },
    methods:{
        mydata(){
            var that = this;
            axios.post('https://api.apiopen.top/getImages').then(res=>{
                var data = res.data;
                if(data.code === 200){
                    console.log(data)
                    that.images = data.result;
                }
            }).catch(err=>{console.log(err)})
        }
    }
}
</script>



