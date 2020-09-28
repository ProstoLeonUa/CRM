import Vue from 'vue'
import Vulidate from 'vuelidate'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messageplugin from '@/common/message.plugin'
import titlePlugin from '@/common/title.plugin'
import firebase from 'firebase/app'
import Loader from '@/components/app/Loader'
import tooltipDirective from '@/directives/tooltip.directive'
import localizeFilter from '@/filters/localize.filter'
import VueMeta from 'vue-meta'
import "materialize-css/dist/js/materialize.min"
import './registerServiceWorker'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vulidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.use(messageplugin)
Vue.use(VueMeta)
Vue.use(titlePlugin)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)


firebase.initializeApp({
	apiKey: "AIzaSyAGzNk6AK62hiitchYL5VaoJuT2vggdMwI",
	authDomain: "crm-on-vue.firebaseapp.com",
	databaseURL: "https://crm-on-vue.firebaseio.com",
	projectId: "crm-on-vue",
	storageBucket: "crm-on-vue.appspot.com",
	messagingSenderId: "33561377656",
	appId: "1:33561377656:web:993b7286eec10389fc268d",
	measurementId: "G-03P4NJJDRR"
})

let app
firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')

	}
})
