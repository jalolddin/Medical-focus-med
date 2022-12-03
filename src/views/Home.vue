<template>
    <div class="home">

<!-- Header -->

<div class="home__header">
    <div>
        <h1>МЕДИЦИНСКИЕ ОБОРУДОВАНИЯ И РАСХОДНЫЕ МАТЕРИАЛЫ</h1>
        <p>Реализация многоуровневых проектов по созданию, реконструкции и оснащению лечебно-профилактических учреждений</p>
    </div>
        <button>Просмотреть каталог</button>
</div>

<!-- Department -->
<div class="home__department">
    <h1>Популярные направление</h1>
    <div>
        <div>
            <span></span>
            <h3>ИФА анализаторы</h3>
        </div>
        <div>
            <span></span>
            <h3>ПЦР лаборатории</h3>
        </div>
        <div>
            <span></span>
            <h3>Лабораторные приборы</h3>
        </div>
        <div>
            <span></span>
            <h3>Мочевой анализаторы и тест-полоски</h3>
        </div>
        <div>
            <span></span>
            <h3>Биохимические анализаторы</h3>
        </div>
        <div>
            <span></span>
            <h3>Сперма анализаторы</h3>
        </div>
        <div>
            <span></span>
            <h3>Анализаторы газов и электролитов крови</h3>
        </div>
        <div>
            <span></span>
            <h3>Мочевой анализаторы и тест-полоски</h3>
        </div>
    </div>
</div>
<Ranking />

<!-- Partners -->
<div class="home__partners">
    <h1>Нашы партнёры</h1>
    <div>
        <img src="../assets/images//partner_1.jpg" alt="">
        <img src="../assets/images//partner_2.jpg" alt="">
        <img src="../assets/images//partner_3.jpg" alt="">
        <img src="../assets/images//partner_4.jpg" alt="">
        <img src="../assets/images//partner_5.jpg" alt="">
        <img src="../assets/images//partner_6.jpg" alt="">
        <img src="../assets/images//partner_12.png" alt="">
        <img src="../assets/images//partner_8.jpg" alt="">
        <img src="../assets/images//partner_9.jpg" alt="">
        <img src="../assets/images//partner_10.jpg" alt="">
        <img src="../assets/images//partner_11.jpg" alt="">
        <img src="../assets/images//partner_13.jpg" alt="">
        <img src="../assets/images//partner_14.jpg" alt="">
    </div>
</div>
<Contact />
</div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import Ranking from '../components/Ranking.vue'
import Contact from '../components/Contact.vue'
export default{
components: {
    Navbar,
    Ranking,
    Contact,
    Footer
}
}
</script>
<style lang="scsss" scoped>

</style>