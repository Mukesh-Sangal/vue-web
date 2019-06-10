<template>
  <div class="Posts">
    <h1>{{Posts}}</h1>
    <div class="posts">
      <div class="post_body">
        <ul v-for="post in posts" id="postid" :key="post.id">
          <li><span>Id:</span>{{post.id}}</li>
          <li><span>Title:</span>{{post.title}}</li>
          <li><span>Body:</span>{{post.body}}</li>
           <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">User Posts Comment</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" v-model="visible" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div v-for="comment in comments">
              <ul>
              <li>
                <span id="accordian">Id:</span>
                  <b-card-text>
                  {{comment.id}}
                  </b-card-text>
                </li>
                <li>
                <span id="accordian">Email:</span>
                  <b-card-text>
                  {{comment.email}}
                  </b-card-text>
                </li>
                <li>
                <span id="accordian">Name:</span>
                  <b-card-text>
                  {{comment.name}}
                  </b-card-text>
                </li>
              </ul>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
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
      key:'',
      visible:false,
      comments:[],
      cmnts:[]
    }
	},
  mounted: function(el){
    Vue.axios.get('https://jsonplaceholder.typicode.com/posts?userId='+localStorage.user_id)
    .then(response =>{
       var posts= response.data
       this.posts= response.data 
      for(let i=0; i<posts.length; i++){
        let arr= posts[i].id
        console.log(arr,'hii');
          
      }

    })
    
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
    margin-top:65px;
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
</style>