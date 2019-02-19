<template>
  <div id="app">
  	<test-header></test-header>
  	<test-cover></test-cover>
    <!--<img src="./assets/logo.png">-->
    
    <router-view/>
    <isFooter></isFooter>
  </div>
</template>

<script>
import Header from "./components/header.vue"	
import Footer from "./components/footer.vue";
import testcover from "./components/testcover.vue";
export default {
  name: 'App',
  components:{
  	"test-header":Header,
  	"isFooter":Footer,
    "test-cover":testcover,
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
html,body{width: 100%;height: 100%;}
li{list-style: none;}
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
