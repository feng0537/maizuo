import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Home from "@/components/home.vue";
import Film from "@/components/film.vue";
//film 子路由
import Comingsoon from "@/components/comingsoon.vue";
import Nowplaying from "@/components/nowplaying.vue";
import FilmDetail from "@/components/filmDetail.vue";

import Movie from "@/components/movie.vue";
import Test from "@/components/test.vue";
import Me from "@/components/me.vue";

//demo 父子组件传递
import Demo from "@/components/demo/parent.vue";

export default new Router({
    routes: [
        { path: '/', name: 'HelloWorld', component: HelloWorld},
        { 
            path: '/home', 
            component: Home,
            redirect: "/home/now-playing",
            children:[
                {path: "coming-soon", component: Comingsoon,},
                {path: 'now-playing', component: Nowplaying,},
            ]
        },
        { 
            path: '/film',
            component: Film,
            redirect: "/film/now-playing",
            children:[
                {path: "coming-soon", component: Comingsoon,},
                {path: 'now-playing', component: Nowplaying,},
            ]
        },
        { path: '/film/:id', component: FilmDetail},
        { path: '/movie', component: Movie},
        { path: '/test', component: Test},
        { path: '/me', component: Me},
        
        { path: '/demo', component: Demo},
        
        
    ]
})