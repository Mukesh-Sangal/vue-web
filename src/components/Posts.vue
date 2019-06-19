<template>
  <div class="Posts">
    <h1>{{Posts}}</h1>
    <div class="posts">
      <div class="post_body">
        <ul v-for="post in posts">
          <li><span>Id:</span>{{post.id}}</li>
          <li><span>Title:</span>{{post.title}}</li>
          <li><span>Body:</span>{{post.body}}</li>
          <b-link @click="navigate(post)">Go to this post Comments</b-link>
        </ul>
      </div>
    </div>
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
  name: 'Posts',
	data(){
		return{
    	Posts: 'Welcome to Your Vue.js userposts',
    	name:'Mukesh',
      posts:[],
      visible:false,
      comments:[],
    }
	},
  mounted: function(){
    Vue.axios.get('https://jsonplaceholder.typicode.com/posts?userId='+localStorage.user_id)
    .then(response => {
        this.posts = response.data
        var posts= response.data

    })
  },
  methods:{
    navigate: function(val){
      // alert(val.id)
     var postId = val.id;
     localStorage.post_id= postId
      // alert(localStorage.post_id);
        router.push({path : 'Comments'})
    }
  } 
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#app {0
    display: flex;
    flex-direction: column;
}
h1, .h1 {
    font-size: 2.5rem;
    color: aliceblue;
   margin-top:80px;
}
.Posts {
    display: flex;
    flex-direction: column;
     background-image: url('../assets/po.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Montserrat;
    height:100%
}
.posts {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
}
.post_body {
    display: flex;
    flex-direction: column;
    width: 95%;
}
ul {
    display: flex;
    flex-direction: column;
    text-align: justify;
    color: aliceblue;
}
li {
    display: flex;
}
a {
  text-align: center;
  margin-top: 10px;
  text-decoration: none
}
span {
    font-weight: 600;
}
p.card-text {
    color: black;
}
span#accordian {
    color: black;
}
.card.mb-1 {
    margin-top: 25px;
}
input#postId {
    width: 100%;
}
input#postId {
    background-color: #17a2b8;
    border: none;
    color:white;
}
</style>