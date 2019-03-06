<template>
    <div class="headerbg">
        <div class="Header">
            <nav>
                <ul>
                    <li v-for="(item,index) in navList" :key="index">
                        <router-link  :to="item.url">{{item.text}}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name:"myheader",
    data(){
        return{
            navList:[
                {id:0,text:"首页",url:"/"},
                {id:1,text:"短视频",url:"/myvideo"},
                {id:3,text:"图文",url:"/newsList"},
                {id:4,text:"图片",url:"/myimages"},
            ]
        }
    },
    created(){

    },
    methods:{

    }
}
</script>




