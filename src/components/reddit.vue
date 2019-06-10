  <template>
  <div class="reddit">
    <h1>{{reddit}}</h1>
    
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
  name: 'js',
  data() {
    return {
      reddit: 'Welcome to User reddit Page',
    }
  }
}
</script>