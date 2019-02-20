<template>
    <div>
        <h3 style="text-align: center;">电影详情</h3>       
        <p>{{filmItem.name}}</p>
        <img :src="filmItem.poster" alt="" /> 
    </div>
</template>

<script>
    import axios from "axios";
    import router from "../router/index.js";
    
    export default{
        data(){
            return{
                filmItem:[]
            }
        },
        mounted(){
            var id = this.$route.params.id;
            var nowplayingList = JSON.parse(sessionStorage.getItem('nowplayingList'));
            for(var i in nowplayingList){
                if( id == nowplayingList[i].filmId){
                    this.filmItem = nowplayingList[i];
                }
            }
            
        },
        methods:{
            
        }
    }
</script>

<style>
</style>