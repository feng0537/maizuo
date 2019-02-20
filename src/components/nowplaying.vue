<template>
	<div id="nowplaying">
        <ul style="padding-left: 15px;">
            <li v-for="data in datalist" :key="data.filmId">
                <div class="film" @click="handleFilm(data.filmId)">
                    <div class="film-img" style="float: left;">
                        <img :src="data.poster" alt="" />
                    </div>
                    <div class="film-info" style="float: left;">
                        <p>
                            {{data.name}}
                            <span style="background: #CCCCCC;color: #fff;">{{data.filmType.name}}</span>
                        </p>
                        <p>
                                                       观众评分<span style="color: #FF0000;">{{data.grade}}</span>
                        </p>
                        <p>主演：</p>
                        <p>{{data.nation}} | {{data.runtime}}分钟</p>
                    </div>
                </div>
                <div class="buy" style="float: right;">
                	<span>购票</span>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>
    import axios from "axios";
    import router from "../router/index.js"
    export default{
        data(){
            return {
                datalist: [],
            }
        },
        mounted(){
            axios.get("https://www.easy-mock.com/mock/5c6a6556e5014c6a2c90fe50/api/nowplaying1").then(res=>{
                console.log(222);
                console.log(res);
                this.datalist = res.data.data.films;
                console.log(this.datalist)
            })        
        },
        methods: {
            handleFilm(id){
                alert(123);
                router.push(`/detail/$(id)`);
                
            }
        }
    }
</script>

<style>
    #nowplaying li{
        overflow: hidden;
        padding:15px 15px 15px 0px;
        border-bottom:1px solid #CCCCCC;
    }
    #nowplaying .film{
        width: calc(100% - 62px);
        float: left;
    }
    #nowplaying .film-img img{
        width: 66px;
        height: 90px;
        padding-right: 10px;
    }
    #nowplaying .film-info{
        width: calc(100% - 76px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    #nowplaying .film-info p{
        font-size: 13px;
        margin-top: 5px;
    }
    #nowplaying .buy span{
        color: #42B983;
        border: 1px solid #42B983;
        line-height: 90px;
        padding:2px 10px;
    }
    
</style>