import Vue from 'vue';
import BtnUniversal from '@/components/BtnUniversal.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChartBar,
  faCode,
  faDownload,
  faCheck,
  faSpinner,
  faCog,
  faPlay,
  faAmbulance,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// import 'materialize-css/dist/js/materialize.min';


Vue.component('BtnUniversal', BtnUniversal);
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faChartBar, faCode, faDownload, faCheck, faSpinner, faCog, faPlay, faAmbulance);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
