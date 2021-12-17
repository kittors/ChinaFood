import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
axios.defaults.baseURL = "http://cfoodwww.vaiwan.com/"
Vue.prototype.axios = axios

Vue.use(VueAxios, axios)
