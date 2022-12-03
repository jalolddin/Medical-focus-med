<template>
    <div class="catalogy">
        <div class="catalogy__image">
            <div class="catalogy__image__text">
                <h2>Наш каталог</h2>
                <p>
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    -> Каталог</p>
            </div>
        </div>
<!-- Types -->
<div class="catalogy__content">
    <div class="catalogy__content__left">
<div>
<p>Весь каталог</p>
<p>22</p>
</div>
<div>
    <p>Гематологические анализаторы и реагенты</p>
    <p>12</p>
</div>
<div>
    <p>Биохимические анализаторы и реагенты</p>
    <p>3</p>
</div>
<div>
    <p>Мочевой анализаторы и тест-полоски</p>
    <p>8</p>
</div>
<div>
    <p>ИФА анализаторы</p>
    <p>6</p>
</div>
<div>
    <p>Коагулометры, Агрегометры и реагенты</p>
    <p>4</p>
</div>
<div>
    <p>Анализаторы газов и электролитов крови</p>
    <p>2</p>
</div>
<div>
    <p>Микробиологические анализаторы</p>
    <p>11</p>
</div>
<div>
    <p>ПЦР лаборатории</p>
    <p>3</p>
</div>
<div>
    <p>Сперма анализаторы</p>
    <p>5</p>
</div>
<div>
    <p>Лабораторные приборы</p>
    <p>12</p>
</div>
    </div>

    <!-- Right Side -->

    <div class="catalogy__content__right">
<div @click="goInside(product.title, product)" v-for="product in products" :key="product" v-bind:style="{ 'background-image': 'url(' + product.image + ')' }">
<h4>{{product.title}}</h4>

</div>
    </div>
</div>

    </div>
</template>
<script>
export default {
    data(){
    return{
        products: [
            {
                title: 'Биохимические анализаторы и реагенты',
                image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
            {
                title: 'Биохимические анализаторы и реагенты',
             image: require('@/assets/images/product__1.jpg')
            },
        ]
    }
    },
    methods: {
goInside(id, image){
    this.$router.push({name: 'catalogId', params: {id: id, img: image}})
}
    }
}
</script>
<style lang="scsss" scoped>

</style>