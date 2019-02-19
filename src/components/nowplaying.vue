<template>
	<div id="nowplaying">
		now22222222211
	</div>
</template>

<script>
    import axios from "axios";
    export default{
        data(){
            return {
                datalist: [],
            }
        },
        mounted(){
            axios.get("https://www.easy-mock.com/mock/5c6a6556e5014c6a2c90fe50/api/nowplaying1").then(res=>{
                console.log(111);
                console.log(res);
                this.datalist = res.data.data.films;
                console.log(this.datalist)
            })        
        }
    }
</script>

<style>
</style>