<template>
	<div>
		<h3>子组件部分</h3>
		<p>父组件传的值-----{{message}}</p>
		<p>其他组件传的值-----{{elseMessage}}</p>
		<button @click="sendMsgToParent">向父组件传值</button>
		<button @click="alertMes">alert</button>
		
	</div>
	
</template>

<script>
	//在vue中是不允许子组件直接修改父组件的值，在vue中只允许单向数据传递,组件内不能修改props的值.
	//参考 https://blog.csdn.net/u011019726/article/details/78055863
	//因为message不可写，所以需要在data中创建一个副本temp_message，接收初始值为props属性message的值，
	//同时在组件内所有需要调用props的地方调用这个data对象message
	//子组件通过props来接收数据: 
	//格式1：
	//props: ['childMsg']
	//格式2 :
	//props: {
	//  childMsg: Array //指定传入的类型
	//}
	//格式3：
	//props: {
	//  childMsg: {
	//      type: Array,
	//      default: [0,0,0] //指定默认的值
	//  }
	//}
	export default{
		props:["message"],
		data(){
			return {
				temp_message: this.message,
				elseMessage:'11',
			}
		},
		mounted(){
			//非父子组件传值 $on 发出
			//var _this = this;
//			Bus.$on('toElseModule', function(msg){
//				this.elseMessage = msg;	
//				this.$set(this.elseMessage,msg)
//				console.log(msg)
//				console.log(this.elseMessage)
//			})
		},				
		methods:{
			alertMes: function(){
				alert(this.temp_message)	
				alert(this.elseMessage)	
				
			},
			sendMsgToParent:function(){
				//向父组件传值  
				this.$emit("childEvent","来自子组件的值");
			}
			
		},
	}
	
</script>

<style scoped>
	div{
		border: 1px solid #000000;
		margin-bottom: 5px;
		padding: 5px;
	}
	
</style>