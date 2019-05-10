<template>
    <div id="me">
        meeeeeeeeeeeeee
        其他组件值-----{{message}}
    </div>

</template>

<script>
	import Bus from './../bus'
	export default{
		data(){
			return {
				message:"11"
			}
		},
		created(){
			console.log(this.message)
			//非父子组件传值 $on 发出
			var _this = this;
			Bus.$on('toElseModule', function(msg){		
				console.log(msg)
				console.log(_this.message)
			})
		},	
		
	}
	
	
</script>

<style>
</style>