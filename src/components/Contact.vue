<template>
    <div class="contact">
        <h2>Обратный звонок</h2>
        <div>
            <div
            data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-ease="ease"
         data-aos-delay="500" 
            >
<label for="name">ФИО*</label>
                <input v-model="name" placeholder="Введите ФИО" type="text">
            </div>
            <div
            data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-ease="ease"
         data-aos-delay="500" 
            >
<label for="phone">Номер телефона*</label>
                <input v-model="number" placeholder="Введите номер телефона" type="number">
            </div>
            <div
            data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-ease="ease"
         data-aos-delay="500" 
            >
                <label for="title">Название клиники*</label>
                <input v-model="title" placeholder="Введите название клиники" type="text">
            </div>
        
                <button
                style="cursor: pointer"
                @click="send"
                data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-ease="ease"
         data-aos-delay="500" 
                >Заказать звонок</button>
           
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {
                name: '',
                number: '',
                title: '',
                chatId: '6133634448:AAGy8dPnKnmGEm6ZFcIyYn3026JbotNMSO8',
                channelName: "-1001854559748"
        }
    },
    methods: {
send(){

    axios.get(`https://api.telegram.org/bot${this.chatId}/sendMessage?chat_id=${this.channelName}&text=${"Имя: " + this.name + ' ' + "Номер телефона: " + this.number + ' ' + "Название клиники: " + this.title}`).then((res) => {
    this.$toast.success("Успешно! <br /> Ваш запрос отправлен", {
    position: "top-right",
    })
    this.name = '',
    this.number = '',
    this.title = ''
    })
}
    }
    
}
</script>