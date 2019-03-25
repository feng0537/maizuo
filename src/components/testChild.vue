<template>
	<div id="testChild">
		<h3>子组件</h3>
		<p>子组件接收数据----{{myMessage}}</p>
		<button @click="handleClick">点击</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				child:0,
			}
		},
		props:["myMessage"],
		methods:{
			handleClick: function(){	
				
				alert(this.child+=1)
			}
		}
	}
	
</script>

<style>
	#testChild{
		border: 1px solid #000;
		padding:10px;
	}
</style>