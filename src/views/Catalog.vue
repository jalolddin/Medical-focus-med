<template>
    <div class="catalogy">
        <div class="catalogy__image">
            <div class="catalogy__image__text">
                <h2>Наш каталог</h2>
                <p>
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    / Каталог</p>
            </div>
        </div>
<!-- Types -->
<div class="catalogy__content">
    <div class="catalogy__content__left">
<div @click="showItem()" v-for="product in products.categories" :key="product">
<p>{{product.title}}</p>
<p>{{product.product_count}}</p>
</div>
    </div>

    <!-- Right Side -->

    <div     class="catalogy__content__right">
<div  v-show="product.category === catalogy" v-for="product in products.products" :key="product" v-bind:style="{ 'background-image': 'url(' + 'https://focusmed.uz' + product.photo + ')' }">
<h4>{{product.title}}</h4>
</div>
    </div>

</div>

    </div>
</template>
<script>
import axios from 'axios'

import {Tabs, Tab} from 'vue-tabs-component';
export default {    
    components: {
        Tabs,
        Tab
    },
    data(){
    return{
        products: [],
        catalogy: 'Гематологические анализаторы и реагенты'
    }
    },
    methods: {
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
    }
}
</script>
<style lang="scsss" scoped>

</style>