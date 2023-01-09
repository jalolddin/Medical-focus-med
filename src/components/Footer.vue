<template>
    <div class="footer">
<div class="footer__left">
    <router-link :to="{name: 'home'}">
            <img src="../assets/icons/logo__image.svg" alt="">
        </router-link>
    <!-- <p>FOCUSMED - локальная компания, специализирующаяся на оснащении и обслуживании с долгих лет клинико-диагностических лабораторий, микробиологических лабораторий, ПЦР лабораторией и ветеринарных кабинетов современным оборудованием, реагентами и расходными материалами. Компания «FOCUSMED» — это не только поставщик и проектировщик, но и профессиональный консультант, ориентированный на честность и открытость, способный найти индивидуальный подход к каждому клиенту.</p>
    <h4>© 2022 Сopyright «FOCUSMED»</h4> -->
    <div class="footer__icons">
        <div>
            <img src="../assets/icons/telegram.svg" alt="">
        </div>
        <div>
            <img src="../assets/icons/instagram.svg" alt="">
        </div>
        <div>
            <img src="../assets/icons/facebook.svg" alt="">
        </div>
        <div>
            <img src="../assets/icons/youtube.svg" alt="">
        </div>

    </div>
</div>
<div class="footer__center">
    <h2>Страницы</h2>
    <ul>
        <router-link :to="{name: 'Company'}">
            <li>О компании</li>
        </router-link>
        <router-link :to="{name: 'catalogy'}">
            <li>Каталог</li>
        </router-link>
        <router-link :to="{name: 'Projects'}">
            <li>Проекты</li>
        </router-link>
        <router-link :to="{name: 'Partners'}">
            <li>Партнеры</li>
        </router-link>
        <router-link :to="{name: 'Service'}">
            <li>Сервисный центр</li>
        </router-link>
    </ul>
</div>
<div class="footer__right">
<h2>Контакты</h2>
<div>
    <div>
        <img src="../assets/icons/clock__icon.svg" alt="">
        <p>Работаем ежедневно <br> с 08:00 до 22:00</p>
    </div>
    <div>
        <img src="../assets/icons/geolocation__icon.svg" alt="">
        <p>г.Ташкент, ул <br> Кичик Халка Йули, 46</p>
    </div>
    <div>
        <img src="../assets/icons/phone__icon.svg" alt="">
        <p>+998 (99) 886-97-99</p>
    </div>
    <div>
        <img src="../assets/icons/email__icon.svg" alt="">
        <p>labfocusmed@gmail.com</p>
    </div>
</div>
</div>
<!-- <div class="footer__button">
    <button>Обратный звонок</button>
</div> -->


</div>
</template>
<script>

</script>