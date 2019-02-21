<template>
    <div class="nav-bar">
        <ul>
            <router-link tag="li" active-class="active" to="/home">电影</router-link>
            <router-link tag="li" active-class="active" to="/movie">影院</router-link>
            <router-link tag="li" active-class="active" to="/test">测试</router-link>
            <router-link tag="li" active-class="active" to="/me">我的</router-link>
        </ul>
    </div>
</template>

<script>
</script>

<style>
   .nav-bar{    
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 49px;
        overflow: hidden;
        background:#F0F8FF;
    }
    .nav-bar li{
        width:25%;
        line-height: 49px;
        float: left;
        display: inline-block;
        text-align: center;
    }
    .nav-bar .active{color: red;}
</style>