import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import router from './router'

import './assets/styles/catalogy.scss'
import './assets/styles/company.scss'
import './assets/styles/contacts.scss'
import './assets/styles/footer.scss'
import './assets/styles/main.scss'
import './assets/styles/navbar.scss'
import './assets/styles/partners.scss'
import './assets/styles/projects.scss'
import './assets/styles/ranking.scss'
import './assets/styles/responsive.scss'
import './assets/styles/service.scss'
import PureCounter from '@srexi/purecounterjs'
import VueExpandableImage from 'vue-expandable-image'
import checkView from 'vue-check-view'
import AOS from 'aos'
import 'aos/dist/aos.css'
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)
Vue.use(checkView)
Vue.use(VueExpandableImage)
Vue.config.productionTip = false

new Vue({
    router,
    VueExpandableImage,
    store,
    PureCounter,
    render: h => h(App),
    mounted() {
        AOS.init()
    },
}).$mount('#app')