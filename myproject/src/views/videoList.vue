<template>
    <div>
        <myHeader/>
        <ul class="contain">
            <h3>推荐视频</h3>
            <li  v-for="(item,index) in videos" :key="index">
                <div class="num">{{index+1}}</div>
                <div class="content">
                    <div class="img">
                        <router-link :to="{name:'videodesc',query:{id:index}}">
                            <img :src="item.data.content.data.cover.feed" :alt="item.data.content.data.title">
                        </router-link>
                    </div>
                    <div class="info">
                        <router-link :to="{name:'videodesc',query:{id:index}}">
                            <div class="title">{{item.data.content.data.title}}</div>
                        </router-link>
                        <div class="desc">{{item.data.content.data.description}}</div>
                        <div class="detail">
                            <span class="data-box">观看次数：{{item.data.content.data.consumption.collectionCount}}</span>
                            <span class="data-box">作者：{{item.data.content.data.author.name}}</span>
                            <span class="data-box">发布时间：{{item.data.content.data.releaseTime}}</span>
                            <span class="data-box">类型：{{item.data.content.data.category}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import myHeader from "@/components/header.vue"
import axios from 'axios'
import {formateDate} from "@/libs/util.js"
export default {
    components:{myHeader},
    name:"myvideo",
    data(){
        return{
            videos:""
        }
    },
    created(){
        this.video();
    },
    methods:{
        video(){
            var that = this;
            axios.post('https://api.apiopen.top/todayVideo/').then(res=>{
                var data = res.data.result;
                data = data.filter((item)=>{
                    return item.type === "followCard";
                })
                data.map((item,index)=>{
                    item.data.content.data.releaseTime = formateDate(new Date(item.data.content.data.releaseTime),"Y-M-D h:min:s")
                })
                that.videos = data
            }).catch(err=>{console.log(err)})
        }
    }
}
</script>

<style>
    
</style>




