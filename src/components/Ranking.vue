<template>
<div class="ranking">
    <h1>Наши показатели</h1>
    <div>
        <div>
            <h1><countTo :autoplay="true" :startVal='0' :endVal='experience' :duration='3000'></countTo>+</h1>
            <h3>Лет Опыта Поставок</h3>
        </div>
        <div>
            <h1><countTo :startVal='0' :endVal='projects' :duration='3000'></countTo>+</h1>
            <h3>Больших Проектов</h3>
        </div>
        <div>
            <h1><countTo :startVal='0' :endVal='exibitions' :duration='3000'></countTo><span>+</span></h1>
            <h3>Участие и Посещение Внутренних и Международных Выставок</h3>
        </div>
        <div>
            <h1><countTo :startVal='0' :endVal='productions' :duration='3000'></countTo>+</h1>
        <h3>Эксклюзивных Соглашений с Мировыми Производителями</h3>
        </div>
        <div>
            <h1><countTo :startVal='0' :endVal='experts' :duration='3000'></countTo>+</h1>
            <h3>Довольных Клиентов</h3>
        </div>
    </div>
</div>    
</template>
<script>
import countTo from 'vue-count-to';
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
    }
}
</script>

<style>
</style>