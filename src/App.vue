  <template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="#">
         <b-img left src="../assets/vue11.png" class="d-inline-block align-top" alt="Kitty"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="Info">Info</router-link>
           </li>
          <li class="nav-item">
             <router-link class="nav-link" to="Posts">Posts</router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="Comments">Comments</router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="Album">Album</router-link>
          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="Photos">Photos</router-link>
          </li>
           <li class="nav-item">
             <router-link class="nav-link" to="reddit">Reddit</router-link>
          </li>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
          <b-button size="sm" class="my-2 my-sm-0" variant="danger" type="submit" @click="AuthCheck">Logout</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
export default{
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    AuthCheck: function(e) {
     var user=localStorage
     if (user !== null){
        alert("Are U want to Logout")
        localStorage.clear()
        this.$router.push('/')
      }
       e.preventDefault();
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
