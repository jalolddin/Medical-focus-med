<template>
    <div class="partners">
        <div class="catalogy__image">
            <div class="catalogy__image__text">
                <h2>Наши партнёры</h2>
                <p>
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    -> Партнёры</p>
            </div>
        </div>
        <div class="partners__cards">
<div>
<img style="height: 2rem" src="../assets/images/streck.png"/>
</div>
<div>
<img style="height: 9rem" src="../assets/images/opti.png"/>
</div>
<div>
<img style="height: 9rem" src="../assets/images/high.jpg"/>
</div>
<div>
<img src="../assets/images/partner_4.jpg"/>
</div>
<div>
<img style="height: 2rem" src="../assets/images/bionner.png"/>
</div>
<div>
<img src="../assets/images/partner_6.jpg"/>
</div>
<div>
<img src="../assets/images/partner_8.jpg"/>
</div>
<div>
<img src="../assets/images/partner_9.jpg"/>
</div>
<div>
<img src="../assets/images/partner_10.jpg"/>
</div>
<div>
<img  src="../assets/images/partner_11.jpg"/>
</div>
<div>
<img style="height: 3.2rem" src="../assets/images/partner_12.png"/>
</div>
<div>
<img style="height: 3.2rem" src="../assets/images/partner_13.jpg"/>
</div>
<div>
<img  style="height: 6rem" src="../assets/images/partner_14.jpg"/>
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
<style lang="scsss" scoped>

</style>