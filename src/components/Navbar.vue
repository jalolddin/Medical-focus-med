<template>
<div class="navbar">
    <div class="navbar__logo">
        <router-link :to="{name: 'home'}">
            <img src="../assets/icons/logo__image.svg" alt="">
        </router-link>
    </div>
  <!-- Burger Menu -->
    <div class="slideMenu">
        <Slide style="width: 100%" :width="450" right :closeOnNavigation="true" noOverlay>
            <router-link :to="{name: 'catalogy'}">
            <li>Каталог</li>
        </router-link>
        <router-link :to="{name: 'Company'}">
            <li>О компании</li>
        </router-link>
        <router-link :to="{name: 'Projects'}">
            <li>Проекты</li>
        </router-link>
        <router-link :to="{name: 'Partners'}">
            <li>
                Партнеры
            </li>
        </router-link>
        <router-link :to="{name: 'Service'}">
            <li>Сервисный центр</li>
        </router-link>
        <router-link class="contact__link" :to="{name: 'Contacts'}">
            <li>Контакты</li>
        </router-link>
    </Slide>
</div>
    <div class="navbar__links">
        <ul>
            <!-- Mobile -->
                <router-link :to="{name: 'catalogy'}">
                    <li>Каталог</li>
                </router-link>
                <router-link :to="{name: 'Company'}">
                    <li>О компании</li>
                </router-link>
                <router-link :to="{name: 'Projects'}">
                    <li>Проекты</li>
                </router-link>
                <router-link :to="{name: 'Partners'}">
                    <li>
                        Партнеры
                    </li>
                </router-link>
                <router-link :to="{name: 'Service'}">
                    <li>Сервисный центр</li>
                </router-link>
                <router-link class="contact__link" :to="{name: 'Contacts'}">
                    <li>Контакты</li>
                </router-link>
            </ul>
           
     
       
    </div>
    <!-- <div class="navbar__address">
        <div>
            <img src="../assets/icons/geolocation__icon.svg" alt="">
<h4>г.Ташкент, ул Кичик <br> Халка Йули, 46</h4>
        </div>
        <div>
            <img src="../assets/icons/clock__icon.svg" alt="">
<h4>Ежедневно <br>
с 08:00 до 22:00</h4>
        </div>

    </div> -->
</div>    
</template>
<script>
import { Slide } from 'vue-burger-menu' 
export default {
    components: {
        Slide
    },
    data(){
        return{
            showMobileMenu: false
        }
    },
//     methods: {
//         showMenu() {
// this.showMobileMenu = !this.showMobileMenu;
// },
//     },
 
}
</script>
<style lang="scss" scoped>

</style>