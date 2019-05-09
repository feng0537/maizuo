<template>
	<div>
		<h3>另一个子组件-非父子组件传值</h3>	
		<p><button @click="changeTitle">向非父子组件传值</button></p>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				message:'',
			}
		},
		methods:{
			//https://segmentfault.com/a/1190000010530600
            //非父子组件传值 $emit 发出
            changeTitle:function(){
            	this.bus.$emit('toElseModule','来自其他组件的值')
            }			
		}

	}
	
</script>

<style scoped>
	div{
		border: 1px solid #000000;
		margin-bottom: 5px;
		padding: 5px;
	}
	
</style>