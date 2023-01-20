<template>
<div v-view="getHeight" class="ranking">
    <h1>Наши показатели</h1>
    <div>
        <div>
            <h1 class="count-num" data-count="5">0</h1>
            <h3>Лет Опыта Поставок</h3>
        </div>
        <div>
            <h1 class="count-num" data-count="12">0</h1>
            <h3>Больших Проектов</h3>
        </div>
        <div>
            <h1 class="count-num" data-count="10">0</h1>
            <h3>Участие и Посещение Внутренних и Международных Выставок</h3>
        </div>
        <div>
            <h1 class="count-num" data-count="14">0</h1>
        <h3>Эксклюзивных Соглашений с Мировыми Производителями</h3>
        </div>
        <div>
            <h1 class="count-num" data-count="5">0</h1>
            <h3>Довольных Клиентов</h3>
        </div>
    </div>
</div>    
</template>
<script>
import countTo from 'vue-count-to';
import $ from 'jquery'
export default {
    components: { countTo },
    data () {
      return {
        experience: 5,
        projects: 12,
        exibitions: 10,
        productions: 14,
        experts: 50
      }
    },
    methods: {
        getHeight(){
            $(function(){
                $('.count-num').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        
        {
            
            duration: 500,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                
                $this.text(this.countNum);
                $this.append('<p>+</p>')
                //alert('finished');
            }
        });   
    });   
});
}
    },
    // created(){
    //   window.addEventListener('scroll', this.getHeight)
    // },
    mounted(){
    }
}
</script>

<style>
</style>