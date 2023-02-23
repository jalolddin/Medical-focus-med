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
        id="main-container"

        v-for="(item, index) in counterData" :key="index"
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
        duration   : 200,
      },
      {
        trans: 'Больших Проектов',
        id   : 12,
        count: 0,
        duration   : 200,
      },
      {
        trans: 'Участие и Посещение Внутренних и Международных Выставок',
        id   : 10,
        count: 0,
        duration   : 200,
      },
      {
        trans: 'Эксклюзивных Соглашений с Мировыми Производителями',
        id   : 14,
        count: 0,
        duration   : 200,
      },
      {
        trans: 'Довольных Клиентови',
        id   : 50,
        count: 0,
        duration   : 200,
      },
                ],
      }
    },
 methods:{

   getHeight(){
     this.counterData.forEach((item) => {
      setInterval(() => {
        if (item.count < item.id) {
          item.count++;
        }
      }, item.duration);
    });
  },
  isInViewport() {
    // Get the bounding client rectangle position in the viewport
    var element = document.querySelector('#main-container');
    var bounding = element.getBoundingClientRect();
    
    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
          console.log('In the viewport! :)');
          this.getHeight()
          return true;
        } else {
          console.log('Not in the viewport. :(');
        return false;
      }
}
},
mounted(){
  window.addEventListener('scroll', this.isInViewport)
},
unmounted () {
    window.removeEventListener('scroll', this.isInViewport);
  },
}
</script>

<style>
</style>