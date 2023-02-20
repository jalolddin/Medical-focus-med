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

<div class="fullInfo">
        <!-- Image -->
        
        <div class="fullInfo__image">
                <expandable-image
  :src="('https://focusmed.uz/' + product.images)"
/>
          </div>
          
        <!-- Text -->
        <div class="fullInfo__text">
                <div>
                        <h1>{{product.title}}</h1>
                </div>
                <div>
                        <h1>Описание</h1>
                        <p v-html="product.description"></p>
                </div>
                <br>
                <div>
                        <h1 v-if="product.benefits">Технические характеристики:</h1>
                        <p v-html="product.benefits"></p>
                </div>
                <div>
                        <h1 v-if="product.extra_info">Выполняемые тесты:</h1>
                        <p v-html="product.extra_info"></p>
                </div>
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
            this.$store.commit('changeTab', this.product.category)
            console.log(this.$store.state.tabName)
        }).catch((err) => {
            console.log(err)
        })
    }
}
</script>
<style>
</style>