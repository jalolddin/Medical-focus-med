<template>
    <div class="catalogy">
        <div class="catalogy__image"
        >
            <div  class="catalogy__image__text">
                <h2
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-ease="ease"
                data-aos-delay="500" 
                >Наш каталог</h2>
                <p
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-ease="ease"
                data-aos-delay="500" 
                >
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    / Каталог</p>
            </div>
        </div>
<!-- Types -->
<div class="catalogy__content">
    <div class="catalogy__content__left">
        <div  :class="{'activeIndex': product.title === catalogy}" @click="showItem(product.title)" v-for="(product, index) in products.categories" :key="index">
            <p class="title">{{product.title}}</p>
            <p>{{product.product_count}}</p>
        </div>
    </div>

    <!-- Right Side -->
    <div class="catalogy__content__right">
        <div  @click="goInside(product.id)" v-show="product.category === catalogy" v-for="(product, index) in products.products" :key="index" v-bind:style="{ 'background-image': 'url(' + 'https://focusmed.uz' + product.photo + ')' }">
            <h4>{{product.title}}</h4>
        </div>
    </div>
</div>

    </div>
</template>
<script>
import axios from 'axios'
export default {    

    data(){
    return{
        products: [],
        catalogy: 'Гематологические анализаторы и реагенты',

    }
    },
    methods: {
        showItem(item){
         this.catalogy = item
        },
goInside(id){
    this.$router.push({name: 'catalogId', params: {id: id}})
}
    },
    mounted(){
        axios.get('https://focusmed.uz/api/products').then((res) => {
            this.products = res.data
            console.log(res.data.categories)
        }).catch((err) => {
            console.log(err)
        })
    },
    created(){
this.catalogy = this.$store.state.tabName
}

}
</script>
<style lang="scsss" scoped>

</style>