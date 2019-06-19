<template>
  <div class="Photos">
    <h1>{{Photos}}</h1>
    <div class="User-Photos">
    	<ul v-for="photo in photos">
    		<li><span class="photos"><b>Title:&nbsp</b>{{photo.title}} </span></li>
    		<li><span class="photos"><b>Albumid:&nbsp</b>{{photo.albumId}}</span></li>
        <li><span class="photos"><b>Thumbnail Url:&nbsp</b><img v-bind:src="photo.thumbnailUrl" fluid alt="Fluid image"></a></span></li>
    		<li><span class="photos" id="image"><b>Url:&nbsp</b> </span><img v-bind:src="photo.url"></a></span></li>
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
	   this.photos = response.data
      console.log(localStorage.album_id) 
		})
  },
}
</script>
<style scoped>
.Photos {
    background-image: url('../assets/po.jpg');
    font-family: Montserrat;
    background-repeat: no-repeat;
    height: 100%;
    background-size: cover;
}
h1, .h1 {
    font-size: 2.5rem;
    color: #f7f3f3;
    margin-top:70px;
}
.User-Photos {
    width: 55%;
    margin: 00 auto;
}
img {
    vertical-align: middle;
    border-style: none;
    width: 35%;
}
span#image {
    margin: 00 00 00 81px;
}
ul {
    text-align: -webkit-auto;
}
li {
    color:#f7f3f3;
    list-style-type: none;
    margin: 00 00 15px 00;
}
</style>