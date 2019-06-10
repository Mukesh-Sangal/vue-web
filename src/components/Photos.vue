<template>
  <div class="Photos">
    <h1>{{Photos}}</h1>
    <div class="User-Photos">
    	<ul v-for="photo in photos">
    		<li><span><b>Title: </b></span>{{photo.title}}</li>
    		<li><span><b>Albumid: </b></span>{{photo.albumId}}</li>
    		<li><span>Url: </span><a v-bind:href="''"><img v-bind:src="''">{{ photo.url }}</a></li>
    		<li><span>Thumbnail Url: </span><a v-bind:href="''">{{ photo.thumbnailUrl }}</a></li>
    	</ul>
    </div>
    <router-view/>
	</div>
</template>
<script>
import router from '../router'
import Vue from 'vue'
export default {
  name: 'Photos',
  data() {
    return {
      Photos: 'Welcome to user Photos',
      photos:[],
      id:[]
    }
  },
  mounted : function(){
  	Vue.axios.get('https://jsonplaceholder.typicode.com/photos?albumId='+localStorage.album_id)
		.then((response) => 
		{
		delete localStorage.album_id
	   this.photos = response.data 
		})
  },
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