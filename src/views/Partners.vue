<template>
    <div class="partners">
        <div class="catalogy__image">
            <div class="catalogy__image__text">
                <h2
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-ease="ease"
                data-aos-delay="500" 
                >Наши партнеры</h2>
                <p
                data-aos="slide-up"
                data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
                >
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    / Партнеры</p>
            </div>
        </div>
        <div 
        data-aos="slide-up"
                data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
         class="partners__cards">
<div

@click="goInside(partner.id)" v-for="partner in partners" :key="partner">
<img  :src="('https://focusmed.uz/' + partner.photo)" alt="Лабораторное оборудование, реагенты и приборы в Узбекистане">
</div>
        </div>
        <Contact />
    </div>
</template>
<script>
import Contact from '../components/Contact.vue'
import axios from 'axios'
export default{
    data(){
return {
    partners: null
}
    },
    components: {
        Contact
    },
    created(){
        axios.get('https://focusmed.uz/api/partners').then((res) => {
            this.partners = res.data
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },
    methods: {
        goInside(id){
    this.$router.push({name: 'PartnersId', params: {id: id}})
}
    }
}
</script>
<style lang="scsss" scoped>

</style>