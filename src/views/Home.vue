<template>
    <div class="home">

<!-- Header -->

<div class="home__header">
    <div>
        <h1>ЛАБОРАТОРНОЕ ОБОРУДОВАНИЕ, РЕАГЕНТЫ и РАСХОДНЫЕ МАТЕРИАЛЫ</h1>
        <p>Реализация многоуровневых проектов по созданию, реконструкции и оснащению лечебно-профилактических учреждений</p>
    </div>
    <router-link :to="{name: 'catalogy'}">
        <button>Просмотреть каталог</button>
</router-link>
    </div>

<!-- Department -->
<div class="home__department">
    <h1>Популярные направление</h1>
    <div>
        <div>
            <img src="../assets/images/ifa.png" alt="">
            <h3>Гематологические анализаторы</h3>
        </div>
        <div>
            <img src="../assets/images/psr.png" alt="">
            <h3> Биохимические анализаторы</h3>
        </div>
        <div>
            <img src="../assets/images/labaratory.png" alt="">
            <h3>Анализаторы мочи</h3>
        </div>
        <div>
            <img src="../assets/images/moch.png" alt="">
            <h3>Анализаторы для ИФА</h3>
        </div>
        <div>
            <img src="../assets/images/analiz.png" alt="">
            <h3>Коагулометры</h3>
        </div>
        <div>
            <img src="../assets/images/bio.png" alt="">
            <h3>ПЦР лаборатория</h3>
        </div>
        <div>
            <img src="../assets/images/gas.png" alt="">
            <h3>Анализаторы газов и электролитов крови</h3>
        </div>
        <div>
            <img src="../assets/images/dose.png" alt="">
            <h3>Микробиологические анализаторы</h3>
        </div>
    </div>
</div>
<Ranking />

<!-- Partners -->
<div class="home__partners">
    <h1>Нашы партнёры</h1>
<!-- <div class="partner__images"> -->
    <VueSlickCarousel   v-bind="settings" v-if="partners.length">
    <div  class="partner__image"  v-for="partner in partners" :key="partner">
        <img  style="width: 100%" :src="('https://focusmed.uz/' + partner.photo)" alt="">
    </div>
    </VueSlickCarousel>
    <VueSlickCarousel   v-bind="settings_2" v-if="partners.length">
    <div  class="partner__image"  v-for="partner in partners" :key="partner">
        <img  style="width: 100%" :src="('https://focusmed.uz/' + partner.photo)" alt="">
    </div>
    </VueSlickCarousel>
    <VueSlickCarousel   v-bind="settings" v-if="partners.length">
    <div  class="partner__image"  v-for="partner in partners" :key="partner">
        <img  style="width: 100%" :src="('https://focusmed.uz/' + partner.photo)" alt="">
    </div>
    </VueSlickCarousel>
    
<!-- </div> -->

</div>
<Contact />
</div>
</template>
<script>
import { Slide } from 'vue-burger-menu' 
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import Ranking from '../components/Ranking.vue'
import Contact from '../components/Contact.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import axios from 'axios'
export default{
components: {
    Navbar,
    Ranking,
    Contact,
    Footer,
    VueSlickCarousel,
    Slide
},
data(){
    return{
partners: null,
settings: {
    "arrows": false,
  "dots": false,
  "infinite": true,
  "slidesToShow": 5,
  "slidesToScroll": 1,
  "autoplay": true,
  "rows": 1,
  "speed": 5000,
  "autoplaySpeed": 0,
  "cssEase": "linear",
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        // "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
//   "rtl": true
},
settings_2: {
    "arrows": false,
  "dots": false,
  "infinite": true,
  "slidesToShow": 5,
  "slidesToScroll": 1,
  "autoplay": true,
  "rows": 1,
  "speed": 5000,
  "autoplaySpeed": 0,
  "cssEase": "linear",
  "rtl": true,
  "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        // "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
}
    }
},
created(){
        axios.get('https://focusmed.uz/api/partners').then((res) => {
            this.partners = res.data
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
}
</script>
