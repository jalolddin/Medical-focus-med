<template>
<div class="navbar">
    <div class="navbar__logo">
        <router-link :to="{name: 'home'}">
            <img src="../assets/icons/logo__image.svg" alt="">
        </router-link>
    </div>
    <div  class="navbar__catalogy">
        <router-link :to="{name: 'catalogy'}">
            <img src="../assets/icons/catalogy__button.svg" alt="">
        </router-link>
    </div>
    <div class="navbar__links">
        <ul>
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
        <router-link :to="{name: 'Contacts'}">
            <li>Контакты</li>
</router-link>
<router-link :to="{name: 'Service'}">
    <li>Сервисный центр</li>
</router-link>
        </ul>
    </div>
    <div class="navbar__address">
        <div>
            <img src="../assets/icons/geolocation__icon.svg" alt="">
<h4>г.Ташкент, ул Кичик <br> Халка Йули, 46</h4>
        </div>
        <div>
            <img src="../assets/icons/clock__icon.svg" alt="">
<h4>Ежедневно <br>
с 08:00 до 22:00</h4>
        </div>

    </div>
</div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>