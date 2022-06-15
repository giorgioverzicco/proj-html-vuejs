import Vue from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
library.add(
  faChevronDown,
  faBars,
  faMagnifyingGlass,
  faBullhorn,
  faBriefcase,
  faChartSimple,
  faPalette,
  faGear,
  faWallet,
  faBasketball,
  faFaceSmile,
  faUser,
  faBookmark,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGooglePlus,
  faYoutube,
  faPinterest,
  faSkype
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
