<template>
    <div id="test">
        <h3 style="text-align: center;">测试</h3>
        <div>
        	<ul>
        		<router-link tag="li" to="/demo">父子组件的传值</router-link>        		
        	</ul>
        	
        </div>     
        <hr />
		<button @click="reverseMessage">逆转消息</button>

    </div>
    
</template>

<script>
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
            },
        },
        components:{ },
        mounted(){
        },
    }
    
</script>

<style>
</style>