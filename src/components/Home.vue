<template>
  <div class="Home">
    <h1>{{Home}}</h1>
    <div class="form" >
    <form v-on:submit.prevent="UserInfo">
       <div class="col-lg-5 col-sm-5 col-md-5" id="input_type">
          <b-form-input v-model="username" placeholder="Enter your name" id="myid" required></b-form-input> 
          <p>{{error}}</p>
          <b-button variant="info" type="submit" id="button1(
          username)">Login</b-button>
      </div>
    </form>

    </div>
  </div>
</template>
<script>
  import router from '../router'
export default {
  name: 'home',
  data() {
    return {
      Home: 'Welcome to User Login Page',
      username:'',
      error:''
    }
  },
  methods:{
    UserInfo: function(){
      var username= document.getElementById('myid').value
      fetch('https://jsonplaceholder.typicode.com/users?username='+username)
      .then(response => response.json())
      .then(function(user){
         console.log(user);
        if(user.length == 1)
          {
            var userId = user[0].id
            localStorage.user_id= userId
            router.push({ path: 'Info'})
          }
          else{
          alert('user not exist')
          }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: url('../assets/homes.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Montserrat;
    height:100vh
}
h1, .h1 {
    font-size: 2.5rem;
    color: aliceblue;
}
.form {
    width: 56%;
    margin: 00 auto;
}
div#input_type {
    display: flex;
    justify-content: center;
    width: 45%;
    margin: 00 auto;
    padding: 50px 0px 00 00;
    flex-direction: column;
}
.bg-info {
    background-color: #17a2b8 !important;
}
button.btn.btn-info {
    width: 100%;
    display: flex;
    justify-content: center;
}
a {
    background-color: green;
    padding: 0px;
    margin-top: 20px;
}
</style>
