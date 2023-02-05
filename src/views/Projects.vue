<template>
    <div class="projects">
        <div class="catalogy__image">
            <div class="catalogy__image__text">
                <h2
                data-aos="slide-up"
                data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
                >Проекты</h2>
                <p
                data-aos="slide-up"
                data-aos-duration="1000"
                 data-aos-ease="ease"
                 data-aos-delay="500" 
                >
                    <router-link :to="{name: 'home'}">
                    Главная 
                    </router-link>
                    / Проекты</p>
            </div>
        </div>
        <div class="projects__content"
        data-aos="slide-up"
data-aos-duration="1000"
data-aos-ease="ease"
data-aos-delay="500" 
        >
<div class="left"
>
<img src="../assets/images/Uzbekistan.svg" alt="">
</div>
<div 
v-if="!regionId"
class="right"
>
    <div @click="goProject(region.id)" style="cursor: pointer" v-for="region in regions" :key="region">
        <p>{{ region.title }}</p>
       <span>{{ region.project_count }}</span>
    </div>
</div>

<div 
class="right_two"
v-if="regionId"
>
<span @click="regionId = !regionId"><img src="../assets/icons/arrow_back.svg" alt=""> Назад</span>
<h3 v-for="region in regions" :key="region" v-show="region.id === regionId" >{{ region.title }}</h3>
<div class="regionInfo" v-show="project.region_id === regionId"  v-for="project in projects" :key="project">
<p @click="goImage(project.title)">"{{ project.title }}"</p>
</div>
</div>
        </div>

<!-- ProjectInfo -->
        
<div v-show="image.title === imageId" v-for="image in projects" :key="image" class="projectInfo">
    <h3>"{{ image.title }}"</h3>
    <p>{{ image.region }}</p>
<div class="second">
<div v-for="img in image.photos" :key="img">
<img 
:src="('https://focusmed.uz/' + img)" 
alt="">
</div>
</div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
regions: null,
projects: null,
regionId: null,
imageId: null
        }
    },
    methods: {
        goProject(id){
this.regionId = id
        },
        goImage(id){
this.imageId = id
        }
    },
    created(){
        axios.get(`https://focusmed.uz/api/projects`).then((res) => {
            this.product = res.data
          this.regions = res.data.regions
          this.projects = res.data.projects
        }).catch((err) => {
            console.log(err)
        })
    }
}
</script>
<style  scoped>
.projectInfo{
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
}
.projectInfo p{
    margin-top: -0.5rem;
}
.projectInfo h3{
color: #2C90A8;
font-size: 1.6rem;
}


.projectInfo .second{
    display: flex;
    flex-wrap: wrap;
justify-content: space-between;
}
.projectInfo .second img{
    height: 15rem;
}

</style>