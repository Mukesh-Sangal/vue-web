<template>
  <div class="Info">
    <h1>{{Info}}</h1>
    <div class="User-Info">
			<ul v-for="info in infos" :key="info.id">
				<li><span><b>Name</b>: </span>{{info.name}}</li>
				<li><span><b>Username</b>: </span>{{info.username}}</li>
				<li><span><b>Email</b>: </span>{{info.email}}</li>
				<li><span><b>Phone</b>: </span>{{info.phone}}</li>
				<li><b>Address-> </b> <br /><span>Street: </span>{{info.address.street}}</li>
				<li><span>Suite: </span>{{info.address.suite}}</li>
				<li><span>City: </span>{{info.address.city}}</li>
				<li><span>Zipcode: </span>{{info.address.zipcode}}</li>
				<li><span><b>Geo-></b> <br>Latitude: </span>{{info.address.geo.lat}}</li>
				<li><span>Longitude: </span>{{info.address.geo.lng}}</li>
				<li><span><b>Company-> </b><br>Name: </span>{{info.company.name}}</li>
				<li><span>Catch Phrase: </span>{{info.company.catchPhrase}}</li>
				<li><span>BS: </span>{{info.company.bs}}</li>
			</ul>
		</div>
		<b-link @click="navigate">Go to User Posts</b-link>
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
export default{
  name: 'Info',
  data(){
		return {
			Info: 'Welcome to User Info',
		  infos:[]
		}
	},
	mounted: function(){
		Vue.axios.get('https://jsonplaceholder.typicode.com/users?id='+localStorage.user_id)
		.then(response =>{
			 this.infos=response.data
		}) 
	},
	methods:{
	  navigate: function(){
	  	router.push({path: 'Posts'})
	  },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
}
h1, .h1 {
    font-size: 2.5rem;
    color: aliceblue;
    margin-top:80px;
}
.Info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-image: url('../assets/background.jpg');
    font-family: Montserrat;
		background-repeat: no-repeat;
		height: 100%;
		 background-size: cover;
}
.User-Info {
    display: flex;
    width: 25%;
}
ul {
  color: aliceblue;
  text-align: -webkit-left;
}
li {
    list-style-type: none;
}
a {
    color:#9cfb0dfa;
}
</style>