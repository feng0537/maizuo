<template>
	<div class="film">
	    <h4>影片</h4>
        <ul>
            <router-link tag="li" active-class="active" to="/film/now-playing">正在热映</router-link>
            <router-link tag="li" active-class="active" to="/film/coming-soon">即将上映</router-link>
        </ul>
        <router-view/>
        
	</div>
</template>

<script>
</script>

<style>
</style>