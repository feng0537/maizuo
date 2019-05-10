<template>
    <div id="test">
        <h3 style="text-align: center;">测试</h3>
        <div class="nav">
        	<ul>
        		<router-link tag="li" to="/demo">组件传值</router-link>        		
        		<router-link tag="li" to="/shop">购物车vuex</router-link>        		
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

<style scoped>
	.nav{
		padding: 5px;
	}
	.nav ul{
		overflow: hidden;
	}
	ul li{
		float: left;
		background: #CCCCCC;
		margin-right: 10px;
	}
</style>