<template>
	<div class="Album">
    <h1>{{Album}}</h1>
    <div class="User-Albums">
			<ul v-for="album in albums">
				<li><span><b>Id</b>: </span>{{album.id}}</li>
				<li><span><b>UserId</b>:</span>{{album.userId}}</li>
				<li><span><b>Title</b>: </span>{{album.title}}</li>
			</ul>
		</div>
		<b-link @click="navigate">Go to User Photos</b-link>
		<router-view/>
	</div>
</template>
<script>
import router from '../router'
import Vue from 'vue'
export default {
  name: 'Album',
  data() {
    return {
      Album: 'Welcome to user Albums',
      albums:[]
    }
  },
  mounted : function(i){
  	Vue.axios.get('https://jsonplaceholder.typicode.com/albums?userId='+localStorage.user_id)
		.then(response => 
		{
    delete localStorage.user_id
		localStorage.album_id=response.data[0].id
	   this.albums = response.data 
		})
  },
  methods:{
  	navigate : function(){
  	 router.push({path: 'Photos'})
  	}
  }
}
</script>
<style scoped>
.Album {
    background-image: url(../assets/album.jpg);
    font-family: Montserrat;
    background-repeat: no-repeat;
    height: 100%;
    background-size: cover;
}
h1, .h1 {
    font-size: 2.5rem;
    color: aliceblue;
    margin-top:55px;
}
.User-Albums {
    width: 35%;
    margin: 00 auto;
}
ul {
    text-align: -webkit-auto;
}
li {
    color: aliceblue;
    list-style-type: none;
}
</style>