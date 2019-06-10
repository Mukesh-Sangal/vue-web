<template>
  <div class="Comments">
    <h1>{{Comment}}</h1>
    <div class="User-Comment">
			<ul v-for="comment in comments">
				<li><span><b>Name</b>: </span>{{comment.name}}</li>
				<li><span><b>Email</b>: </span>{{comment.email}}</li>
				<li><span><b>Body</b>: </span>{{comment.body}}</li>
			</ul>
		</div>
		<b-link @click="navigate">Go to User Album</b-link>
		<router-view/>
  </div>
</template>
<script>
  import router from '../router'
  import Vue from 'vue'
  import Router from 'vue-router'
  import axios from 'axios'
	import VueAxios from 'vue-axios'
	Vue.use(VueAxios, axios)
	Vue.use(Router)
export default {
  name: 'comment',
  data() {
    return {
      Comment: 'Welcome to User Comment Page',
      comments:[],
      posts:[]
    }
  },
  mounted : function(){
  	Vue.axios.get('https://jsonplaceholder.typicode.com/comments?postId='+localStorage.post_id)
		.then(response => 
		{
		console.log(localStorage.post_id)
	   this.comments = response.data
		})
  },
  methods:{
  	navigate : function(){
  	router.push({path:'album'})
  	}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
}
.Comments {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: url('../assets/commnt.png');
    font-family: Montserrat;
		background-repeat: no-repeat;
		height: 100%;
		 background-size: cover;
}
h1, .h1 {
    font-size: 2.5rem;
    color: aliceblue;
    margin-top:65px;
}
li {
    color: aliceblue;
}
.User-Comment {
    display: flex;
    flex-direction: column;
    width: 55%;
    margin: 00 auto;
    text-align: -webkit-auto;
}
ul {
    display: flex;
    flex-direction: column;
}
li {
    list-style-type: none;
}
</style>