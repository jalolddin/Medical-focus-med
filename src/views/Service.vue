<template>
    <div class="service">
        <div class="catalogy__image">
            <div class="catalogy__image__text">
                <h2
                data-aos="slide-up"
                data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
                >Сервисный центр</h2>
                <p
                data-aos="slide-up"
                data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
                >
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    / Сервисный центр </p>
            </div>
        </div>
        <div class="service__content">
            <div
            data-aos="slide-up"
                data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
            class="service__content__right">
                <img src="../assets/images/service__image.png" alt="Сервисный центр FOCUSMED">
            </div>
<div
data-aos="slide-up"
data-aos-duration="1000"
data-aos-ease="ease"
data-aos-delay="500" 
class="service__content__left">
    <h1>Сервисный центр <span>FOCUSMED</span> </h1>
    <p>Сервисный центр FOCUSMED обеспечивает квалифицированную техническую поддержку лабораторного медицинского оборудования.
Мы сотрудничаем с лабораториями государственных и коммерческих учреждений. Работы проводятся стационарно в условиях высокотехнологичной мастерской или с выездом на место эксплуатации оборудования.
Инженеры сервисного центра имеют сертификаты на ремонт и обслуживание медицинского оборудования, проходят курсы повышения квалификации.</p>
</div>
        </div>
        <div 
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-ease="ease"
        data-aos-delay="500" 
        class="service__steps">
            <div>
<h1>01</h1>
<p>Диагностика неисправности, ремонты любого уровня сложности (включая поэлементный ремонт, настройку печатных плат, перепрограммирование микросхем)</p>
            </div>
            <div>
                <h1>02</h1>
                <p>Ремонт любой сложности в рамках гарантийных обязательств, техническое обслуживание оборудования согласно техническому регламенту.</p>
            </div>
            <div>
                <h1>03</h1>
                <p>Полная поддержка деловых партнёров по вопросам ремонта, технической документации запасных частей и расходных компонентов к приборам.</p>
            </div>
            <div>
                <h1>04</h1>
                <p>Долгосрочные договора: годовое техническое обслуживание согласно регламенту производителя на соответствующее оборудование с заменой расходных материалов.</p>
            </div>
            <div>
                <h1>05</h1>
                <p>Ремонт любой сложности в период действия договора на выезде или в условиях сервиса.</p>
            </div>
            <div>
                <h1>06</h1>
                <p>Программирование, калибровка по контрольным материалам, консультации персонала по правилам эксплуатации, повторное обучение персонала с выездом к клиенту</p>
            </div>
        </div>
        <Contact />
    </div>
</template>

<script>
import Contact from '../components/Contact.vue'
export default{
    components: {
        Contact
    }
}
</script>