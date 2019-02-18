<template>
	<div class="home">
		home11111111
		<div class="swiper">
		    333333
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="data in swiper" :key="data.bannerId">
                    <div class="box"><img src="data.imgUrl" alt="" /></div>
                </mt-swipe-item>
            </mt-swipe>		    
		</div>
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>		
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
    .swiper{width: 100%;height:200px; background: #ccc;}
    .box{width: 100%;height: 200px;color: red;}
</style>