<template>
<div class="catalogy__id">
        <div class="catalogy__image">
            <div class="catalogy__image__text">
                <h2>{{product.title}}</h2>
                <p>
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    <router-link :to="{name: 'catalogy'}">
                            / {{product.category}}
                        </router-link>
                </p>
            </div>
        </div>

<div class="catalogy__id__title">
      <div class="info__1">
              <img  :src="('https://focusmed.uz/' + product.images)" alt="">
        <h2 v-if="product.benefits">Benefits</h2>
                <p v-html="product.benefits"></p>
        </div>
        <div class="info__2">
                <h1>{{product.title}}</h1>
                <p v-html="product.description"></p>
        </div>
</div>
<div class="info">
        <div>
                <h2 v-if="product.benefits">Description</h2>
                <p v-html="product.description"></p>
        </div>
</div>
<Contact />
</div>
 
</template>
<script>
import Contact from '../components/Contact.vue'
import axios from 'axios'
export default{
components: {
Contact
        },
    data(){
        return{
        product: [],
        info: this.$route.params.id
        }
},
mounted(){
        axios.get(`https://focusmed.uz/api/products/${this.info}`).then((res) => {
            this.product = res.data
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
}
</script>
<style>
</style>