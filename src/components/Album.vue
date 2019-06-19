<template>
	<div class="Album">
    <h1>{{Album}}</h1>
    <div class="User-Albums">
			<ul v-for="album in albums">
				<li><span><b>Id</b>: </span>{{album.id}}</li>
				<li><span><b>UserId</b>:</span>{{album.userId}}</li>
				<li><span><b>Title</b>: </span>{{album.title}}</li>
        <b-link @click="navigate(album)">Go to User album Photos</b-link>
			</ul>
		</div>
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
      albums:[],
      photos:[]
    }
  },
  mounted : function(){
  	Vue.axios.get('https://jsonplaceholder.typicode.com/albums?userId='+localStorage.user_id)
		.then(response => 
		{
	   this.albums = response.data 
		})
  },
  methods:{
  	 navigate: function(val){
      // alert(val.id)
     var albumId = val.id;
     localStorage.album_id= albumId
      // alert(localStorage.album_id);
        router.push({path : 'Photos'})
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
   margin-top:70px;
}
.User-Albums {
    width: 44%;
    margin: 00 auto;
}
ul {
    text-align: -webkit-auto;
}
li {
    color: aliceblue;
    list-style-type: none;
}
p.card-text {
    color: black;
}
</style>