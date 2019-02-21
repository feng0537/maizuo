<template>
    <div id="test">
        <h3 style="text-align: center;">test222222222</h3>
        <hr />
        {{message}}
		<button @click="reverseMessage">逆转消息</button>
        
    </div>
    
</template>

<script>
    export default{
        data(){
            return {message: 'Hello Vue!'}
        },
        methods:{
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }            
            
        },
        conponents:{
        },
        mounted(){
        },
    }
    
</script>

<style>
</style>