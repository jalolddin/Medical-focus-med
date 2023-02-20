<template>
<div class="ranking">
    <h1
    data-aos="slide-up"
    data-aos-duration="1000"
    data-aos-ease="ease"
    data-aos-delay="300" 
    >Наши показатели</h1>
    <div>
        <div
        v-view="getHeight"
        v-for="item in counterData" :key="item"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-ease="ease"
         data-aos-delay="300" 
        >
        <h1 class="count-num">{{ item.count }} <p>+</p></h1>
        <h3>{{ item.trans }}</h3>
        </div>
    </div>
</div>    
</template>
<script>

export default {
    data () {
      return {
        counterData: [
      {
        trans: 'Лет Опыта Поставок',
        id   : 5,
        count: 0,
        duration   : 300,
      },
      {
        trans: 'Больших Проектов',
        id   : 12,
        count: 0,
        duration   : 300,
      },
      {
        trans: 'Участие и Посещение Внутренних и Международных Выставок',
        id   : 10,
        count: 0,
        duration   : 300,
      },
      {
        trans: 'Эксклюзивных Соглашений с Мировыми Производителями',
        id   : 14,
        count: 0,
        duration   : 300,
      },
      {
        trans: 'Довольных Клиентови',
        id   : 50,
        count: 0,
        duration   : 300,
      },
                ],
      }
    },
    methods: {
        getHeight(){

     this.counterData.forEach((item) => {
      setInterval(() => {
        if (item.count < item.id) {
          item.count++;
        }
      }, item.duration);
    });
}
    },

    mounted(){
    }
}
</script>

<style>
</style>