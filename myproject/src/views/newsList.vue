<template>
    <div>  
        <myHeader/>
        <div class="content">

            <h3>每日推荐</h3>
            <div>标题：{{info.article_title}}</div>
            <div>作者：{{info.article_author}}</div>
            <div class="font14" style="text-indent:2em" v-html="info.article_content"></div>
            <div>
                <p>{{info.img_title}}</p>
                <p>{{info.img_content}}</p>
                <img :src="info.img_url" alt="">
            </div>

            <div>
                {{info.wxs}}
            </div>
            <div>
                <p>每日一语：{{info.yiyu}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import myHeader from "@/components/header.vue"
import axios from 'axios'
export default {
    components:{myHeader},
    name:"newsList",
    data(){
        return{
            info:{}
        }
    },
    created(){
        // 
        this.mydata();
    },
    methods:{
        mydata(){
            var that = this;
            axios.get('http://meiriyikan.cn/api/json.php').then(res=>{
                var data = res.data;
                // data = eval("("+data+")");
                that.info = data; 
            }).catch(err=>{console.log(err)})
        }
    }
}
</script>

<style>
    
    .content  img{max-width: 100%;}
</style>











