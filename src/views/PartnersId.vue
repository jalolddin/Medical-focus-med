<template>
    <div class="partners__id">
        <div class="catalogy__id">
            <div class="catalogy__image">
                <div class="catalogy__image__text">
                    <h2>{{product.title}}</h2>
                    <p>
                        <router-link :to="{name: 'home'}">
                            Главная 
                        </router-link>
                        <router-link :to="{name: 'PartnersId'}">
                            / {{product.title}}
                        </router-link>
                    </p>
                </div>
            </div>
            
    <div class="partner">
          <div class="partner__image">
                  <img  :src="('https://focusmed.uz/' + product.photo)" alt="Лабораторное оборудование, реагенты и приборы в Узбекистане">
                </div>
                <div class="partner__text">
                    <h1>{{product.title}}</h1>
                    <p v-html="product.description"></p>
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
            axios.get(`https://focusmed.uz/api/partners/${this.info}`).then((res) => {
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