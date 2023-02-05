<template>
    <div class="company">
        <div class="catalogy__image">
            <div class="catalogy__image__text">
                <h2
                data-aos="slide-up"
                 data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
                >О Компании</h2>
                <p
                data-aos="slide-up"
                 data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
                >
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    / О Компании</p>
            </div>
        </div>
        <!-- About Company -->
    <div class="company__about">
<div 
data-aos="slide-up"
data-aos-duration="1000"
data-aos-ease="ease"
data-aos-delay="500" 
class="company__about__left">
<h1>Компания <span>FOCUSMED</span></h1>
<p>
    FOCUSMED - локальная компания, специализирующаяся на оснащении и обслуживании с долгих лет клинико-диагностических лабораторий, микробиологических лабораторий, ПЦР лабораторией и ветеринарных кабинетов современным оборудованием, реагентами и расходными материалами.
</p>
<div>
    <span>Биохимические анализаторы</span>
    <span>Гематологические анализаторы</span>
    <span>Анализаторы мочи</span>
    <span>Анализаторы газов</span>
    <span>Анализаторы для ИФА</span>
    <span>Коагулометры</span>
    <span>ПЦР лаборатория</span>
    <span>Лабораторные приборы</span>
    <span>Средоварки</span>
    <span>Сперма анализатор</span>
    <span>Центрифуги</span>
    <span>Микроскопы</span>
</div>
<p> Компания FOCUSMED — это не только поставщик и проектировщик, но и профессиональный консультант, ориентированный на честность и открытость, способный найти индивидуальный подход к каждому клиенту. Специалисты нашей компании не работают по установленному шаблону, всегда учитывая индивидуальные потребности клиентов. Специалисты и профессионалы своего дела в медицине могут дать высококачественную и нужную информацию и консультацию.</p>
</div>
<!-- <div class="company__about__right">
<img src="../assets/images/building__image.jpg" alt="">
</div> -->
    </div>
   
    <Ranking />
   
    <!-- Target -->
    <!-- <div class="company__target">
        <div class="company__target__left">
            <img src="../assets/images/target__image.jpg" alt="">
        </div>
        <div class="company__target__right">
            <h1>Наша цель</h1>
            <p>
Поиск самых передовых и проверенных технологий и внедрение их в практику узбекских клиник, не просто продать, а помочь с выбором.
<br>
<br>
Компания «ENDO-SYSTEMS» — это не только поставщик и проектировщик, но и профессиональный консультант , ориентированный на честность и открытость , способный найти индивидуальный подход к каждому клиенту. Специалисты нашей компании не работают по установленному шаблону, всегда учитывая индивидуальные потребности клиентов. Специалисты и профессионалы своего дела в медицине могут дать высококачественную и нужную информацию и консультацию.
            </p>
        </div>
    </div> -->
<!-- Benefits -->
    <div class="company__benefits">
        <h1>Наши преимущества</h1>
        <div>
            <div>
                <img src="../assets/icons/benefit__1.svg" alt="">
                <p>Обучение врач-лаборантов</p>
            </div>
            <div>
                <img src="../assets/icons/benefit__2.svg" alt="">
                <p>Эксклюзивная линейка инновационного лабораторного оборудования</p>
            </div>
            <div>
                <img src="../assets/icons/benefit__3.svg" alt="">
                <p>Команда профессиональных специалистов по продажам с большим опытом работы</p>
            </div>
            <div>
                <img src="../assets/icons/benefit__4.svg" alt="">
                <p>Качественно оснащенный сервисный центр с сертифицированным персоналом</p>
            </div>
            <div>
                <img src="../assets/icons/benefit__5.svg" alt="">
                <p>Полное информационное и техническое сопровождение клиентов</p>
            </div>
        </div>
    </div>
    <!-- Consulting -->
    <!-- <div class="company__consulting">
        <div class="company__consulting__left">
<h1>Консалтинг и проектирование медицинских учреждений</h1>
<p>Успешный опыт работы в данной области позволяет нам реализовывать проекты различного уровня сложности, при этом предлагая заказчикам комплексный подход и уникальные программы реализации для каждого отдельного проекта, используя только современное высокотехнологичное медицинское оборудование. Создавая наилучшие условия работы для медицинских работников с использованием современных технологий, мы разделяем их заботу о здоровье пациентов.
<br>
<br>
Зная досконально преимущества и недостатки каждого из производителей, мы, как независимый системный интегратор, свободны в их объективном отборе для оснащаемого объекта и создаем проекты, оптимальные для заказчика и соответствующие как его пожеланиям, так и реалиям обстановки, где они будут эксплуатироваться.</p>
        </div>
        <div class="company__consulting__right">
            <img src="../assets/images/consulting__image.svg" alt="">
        </div>
    </div> -->
    <!-- Service -->
    <div class="company__service">
        <div
        data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-ease="ease"
    data-aos-delay="500" 
        class="company__service__left">
            <img src="../assets/images/service__image.png" alt="">
        </div>
        <div 
        data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-ease="ease"
    data-aos-delay="600"
        class="company__service__right">
<h1>Сервисное обслуживание</h1>
<p>Монтаж, пуско-наладка и обучение специалистов производится лицензированной инженерной службой компании и в специализированном оборудованном сервисном центре. Наши сервисные инженеры проходят обучение на предприятиях фирм-производителей и имеют сертификаты, подтверждающие их квалификацию.
<br>
<br>
Квалификация наших инженеров и великолепное оснащение сервисного отдела позволяют проводить все работы на стабильно высоком уровне. Наши клиенты могут быть уверены, что они не окажутся со своими вопросами по оборудованию один на один, мы всегда готовы прийти на помощь!</p>
        </div>
    </div>
    <!-- Study -->
    <!-- <div class="company__study">
        <div class="company__study__left">
<h1>Обучение</h1>
<p>
    Ещё одно немаловажное преимущество нашей компании — это наш учредитель, профессиональный Эндоуролог с 25-летним опытом Бобоев Алишер Шукруллаевич!
<br>
<br>
Ещё одно немаловажное преимущество нашей компании — это наш учредитель, профессиональный Эндоуролог с 25-летним опытом Бобоев Алишер Шукруллаевич!

Он лично сам проконсультирует все запросы клиентов и проведет мастер класс и обучение. Обучения наших клиентов будут проводиться в нашей собственной клинике “DR BOBOEV HEALTH CENTER”.
</p>
<button>www.Dr-Boboev.com</button>
        </div>
        <div class="company__study__right">
            <img src="../assets/images/study__image.svg" alt="">
        </div>
    </div> -->
    <!-- Aksiya -->
    <div class="company__news">
        <h1 
        data-aos="slide-up"
        data-aos-duration="1000"
         data-aos-ease="ease"
        data-aos-delay="500" 
        >Новости</h1>
        <div 
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-ease="ease"
        data-aos-delay="500" 
        >
            <div>
                <div>
                    <h6>03 Ноября 2022</h6>
                    <h6>11333</h6>
                </div>
            <h2>This is the news part for company news</h2>
            </div>
            <div>
                <div>
                    <h6>03 Ноября 2022</h6>
                    <h6>11333</h6>
                </div>
            <h2>This is the news part for company news</h2>
            </div>
            <div>
                <div>
                    <h6>03 Ноября 2022</h6>
                    <h6>11333</h6>
                </div>
            <h2>This is the news part for company news</h2>
            </div>
            <div>
                <div>
                    <h6>03 Ноября 2022</h6>
                    <h6>11333</h6>
                </div>
            <h2>This is the news part for company news</h2>
            </div>
        </div>
    </div>
    <Contact />
    </div>
</template>
<script>
import Contact from '../components/Contact.vue'
import Ranking from '../components/Ranking'
export default{
    components: {
Ranking,
Contact
    }
}
</script>
<style lang="scsss" scoped>

</style>