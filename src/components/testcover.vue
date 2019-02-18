	<template>
		<div class="router">
			<ul>
	            <router-link active-class="testActive" tag="li" to="/home">首页</router-link >
	            <router-link active-class="testActive" tag="li" to="/film">影片</router-link >
	            <router-link active-class="testActive" tag="li" to="/cinema">影院</router-link >
	            <router-link active-class="testActive" tag="li" to="/me">我的</router-link >
	            <router-link active-class="testActive" tag="li" to="/card">卖座卡</router-link >
			</ul>
			
		</div>
	</template>


	<script >
	</script>

	<style>
		ul{background: aliceblue;width: 100%;}
		li{text-align: center;display: inline-block;}
	</style>