<template>
    <div id="test">
        <h3 style="text-align: center;">test222222222</h3>
        <hr />
        {{message}}
		<button @click="reverseMessage">逆转消息</button>
        <childComponent :my-message="data1"></childComponent>
        <childComponent :my-message="data2"></childComponent>
        
    </div>
    
</template>

<script>
	import childComponent from "./testChild.vue";	
    export default{
        data(){
            return {
            	message: 'Hello Vue11!',
            	data1:"数据一",
            	data2:"数据二",
            
            }
        },
        methods:{
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }            
            
        },
        components:{
        	childComponent,
        },
        mounted(){
        },
    }
    
</script>

<style>
</style>