<template>
	<div>
		<h3>父子组件间的传值---父组件</h3>
		<div class="children">
			<Child message="hello" v-on:childEvent="showMsgFromChild"></Child>
			<Child v-bind:message="parentMsg" v-on:childEvent="showMsgFromChild"></Child>
			<ChildTwo></ChildTwo>
		</div>
		
		<br />
		<p>
			父组件向子组件传值成功：<a target="_blank" href="https://www.cnblogs.com/amunamuna/p/8872979.html">文章</a> <br /> 	
			<ul>
				<li>1、子组件在props中创建一个属性，用以接收父组件传过来的值</li>
				<li>2、父组件中注册子组件</li>
				<li>3、在子组件标签中添加子组件props中创建的属性</li>
				<li>4、把需要传给子组件的值赋给该属性</li>
			</ul>
			<hr />
			子组件向父组件传值成功 <br /> 	
			<ul>
				<li>1、子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件</li>
				<li>2、将需要传的值作为$emit的第二个参数，该值将作为实参传给响应自定义事件的方法</li>
				<li>3、在父组件中注册子组件并在子组件标签上绑定对自定义事件的监听</li>
				<li>4、在通信中，他们都有一个共同点就是有中间介质，<b>子向父的介质是自定义事件，父向子的介质是props中的属性</b>。</li>
			</ul>			
					
		</p>
	</div>
	
</template>

<script>
	import Child from './child';
	import ChildTwo from './child2';
	export default{
		data(){
			return{
				message: 'Hello world',
				parentMsg:"Parent-hello-world",
			}
		},
		methods:{
			showMsgFromChild: function(data){
				alert(data)
			}
		},
		components:{
			Child,ChildTwo
		}
	}
	
</script>

<style>
	.children{
		padding:10px;	
		border: 1px solid #000;
	}
	
</style>