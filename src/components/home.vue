<template>
	<div class="home">
		home11111111
		<div class="swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="data in swiper" :key="data.bannerId">
                    <img :src=data.imgUrl alt="" />
                </mt-swipe-item>
            </mt-swipe>		    
		</div>
        <ul class="nav-sub">
            <router-link tag="span" active-class="active" to="/home/now-playing">正在热映</router-link>
            <router-link tag="span" active-class="active" to="/home/coming-soon">即将上映</router-link>
        </ul>
        <router-view/>
	</div>
</template>

<script>
    import axios from "axios";
    export default{
        data(){
          return{
              swiper:[]
          }
        },
        mounted(){
            console.log(111);
            axios.get("https://www.easy-mock.com/mock/5c6a6556e5014c6a2c90fe50/api/swiper").then(res=>{
                console.log(111);
                console.log(res);
                this.swiper = res.data.data
            })
        }
    }
    
</script>

<style>
    .swiper{
        width: 100%;
        height:210px; 
        background: #ccc;
    }
    .swiper img{width: 100%;}
    .box{
        width: 100%;
        height: 200px;
        color: red;
    }
    .nav-sub{
        width:100%;
        background: #F0F8FF;
        overflow: hidden;
        text-align: center;
    }
    .nav-sub span{
        float:left;
        width:50%;
        display: inline-block;
        line-height: 30px;
    }
    .active{color: red;}
    
</style>