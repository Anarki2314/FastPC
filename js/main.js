Vue.component('nav-bar', {
    template: `<nav class="nav-bar">
    <div class="container d-flex jc-space-b ai-center">
        <div class="nav-bar_logo">
            <svg>
                <use xlink:href="sprite.svg#logo"></use>
            </svg>
            <h3>FastPC</h3>
        </div>
        <div class="nav-bar-menu">
            <ul class="nav-bar-menu_links">
                <li class="nav-bar-menu_link"><a href="#about">О нас</a></li>
                <li class="nav-bar-menu_link"><a href="#builds">Сборки</a></li>
                <li class="nav-bar-menu_link"><a href="#popular">Популярное</a></li>
                <li class="nav-bar-menu_link"><a href="#services">Услуги</a></li>
                <li class="nav-bar-menu_link"><a href="#feedback">Обратная связь</a></li>
                <li class="nav-bar-menu_link"><a href="#contacts">Контакты</a></li>
            </ul>
        </div>
        <div class="nav-bar-dropdown-menu">
        <div class="nav-bar-dropdown-menu-icon_container" @click="showMenu">
            <svg>
            <use xlink:href="sprite.svg#burger" viewBox="0 0 24 24"></use>
            </svg>
        </div>
        
            <ul class="nav-bar-dropdown-menu_links" :class="{active: menuActive}">
                <li class="nav-bar-menu_link" @click="showMenu"><a href="#about">О нас</a></li>
                <li class="nav-bar-menu_link" @click="showMenu"><a href="#builds">Сборки</a></li>
                <li class="nav-bar-menu_link" @click="showMenu"><a href="#popular">Популярное</a></li>
                <li class="nav-bar-menu_link" @click="showMenu"><a href="#services">Услуги</a></li>
                <li class="nav-bar-menu_link" @click="showMenu"><a href="#feedback">Обратная связь</a></li>
                <li class="nav-bar-menu_link" @click="showMenu"><a href="#contacts">Контакты</a></li>
            </ul>
        </div>
    </div>
    
</nav>`,
    data(){
        return {
            menuActive: false,
        }
        },
    methods: {
        showMenu(){
            this.menuActive = !this.menuActive
            }
        }
})


    


Vue.component('main-block', {
    template: `<main class="main-block">
                    
    <div class="main-block-container">
        <h1 class="main-block-container_title"> <span class="text_grad">Быстрая</span>  и <span class="rev">качественная</span> сборка PC</h1>
        <h2 class="main-block-container_subtitle">Поможем и соберем <br> вам новый компьютер <br> из самых лучших комплектующих</h2>
    </div>
    <div class="main-block-img_container">
        <img src="assets/img/main_pc.png" alt="" class="main-block-img">
    </div>
</main>`
});
Vue.component('about', {
    template: `<section class="about" id="about">
    <div class="container">
        <h3 class="section_title">
            о нас
        </h3>
    <div class="about-blocks-container">
    <div class="about-block" v-for="(item, key) in blocks" :key="key">
    <div class="about-block-img_container">
    <svg>
        <use :xlink:href="item.svg" viewBox="0 0 90 90"></use>
    </svg>
    </div>
    <h3 class="about-block_title">{{item.title}}</h3>
    <div class="about-block_text">{{item.text}}</div>

            
        </div></div></div></section>`,
    data(){
        return {
            blocks: [
                {
                "svg": 'sprite.svg#diam',
                "title": 'Уникальные сборки',
                "text": 'Подборка идеальных рабочих и игровых решений для комфортного пользования и неповторимого опыта',
                },
                {
                "svg": 'sprite.svg#storage',
                "title": 'Надежные комплектующие',
                "text": 'Качественные компоненты от официальных вендоров',
                },
                {
                "svg": 'sprite.svg#support',
                "title": 'Поддержка экспертов',
                "text": 'Наши эксперты всегда готовы ответить на любой из ваших вопросов',
                },

                
            ]
        }
    }
});
Vue.component('builds', {
    template: `<section class="builds dark" id="builds">
    <div class="container">
        <h3 class="section_title">Наши сборки</h3>
        <p class="section_subtitle">Соберём сборку под любые задачи</p>
        <div class="builds-blocks_container">
            <div class="builds-block" v-for="item in blocks">
                <div class="builds-block-img_container">
                    <img :src="item.img" alt="" class="builds-block-img">
                </div>
                <h4 class="builds-block_title">
                    {{item.title}}
                </h4>
                <h4 class="builds-block_price">
                    {{item.price}} 
                </h4>
            </div>
        </div>
    </div>
</section>`,
    data() {
        return {
            blocks:[
                {
                    "img":"assets/img/builds/home.png",
                    "title":"Домашние сборки",
                    "price":"от 60000 руб",
                },
                {
                    "img":"assets/img/builds/work.png",
                    "title":"Рабочие сборки",
                    "price":"от 115000 руб",
                },
                {
                    "img":"assets/img/builds/game.png",
                    "title":"Игровые сборки",
                    "price":"от 200000 руб",
                },
                {
                    "img":"assets/img/builds/constr.png",
                    "title":"Конфигуратор ПК",
                    "price":"Собери свой ПК",
                }
            ]
        }
    }
})

Vue.component('popular', {

    template: `<div>
    <section class="popular dark"v-for="item in blocks" id="popular">

                

        <div class="container d-flex jc-space-a ai-center f-wrap" :class="item.position">
            <div class="popular-text_block">
                <h3 class="section_title">
                    самая популярная <span :class="item.title_grad">{{item.title}}</span> сборка
                </h3>

                <ul class="popular-text-accessories_list">
                    <li class="popular-text-accessories_item" v-for="elem in item.ac_es">
                        {{elem}}
                    </li>
                </ul>
                <div class="popular-text_price">{{item.price}}</div>
            </div>
            <div class="popular-img_block">
                <div class="popular-img_container">
                    <img :src="item.img" alt="" class="popular-img">
                </div>
            </div>
            
    </div>

</section>
</div>`,
    data() {
        return {
            blocks:[
                {
                    "img":"assets/img/popular/home.png",
                    "title":"домашняя",
                    "title_grad":"text_grad",
                    "position":"left",
                    "ac_es":[
                        "Процессор : Intel i5 12400F",
                        "Материнская плата : Asus ROG Strix Z570",
                        "Видеокарта : Nvidia Geforce RTX 2060 Super",
                        "Блок питания : Corsair GS700",
                        "SSD : Adata XPG Gammix S11 Pro",
                        "Жёсткий диск : Seagate Barracuda ST1000",
                        "Оперативная память : Adata XPG Spectrix D41 16 GB",
                    ],
                    "price":"от 60000 руб",
                },
                {
                    "img":"assets/img/popular/work.png",
                    "title":"рабочая",
                    "title_grad":"rev",
                    "position":"reverse",
                    "ac_es":[
                        "Процессор : AMD Ryzen 7 5700",
                        "Материнская плата : Asus ROG Gaming B550",
                        "Видеокарта : AMD Radeon RX6700xt",
                        "Блок питания : DeepCool DQ750",
                        "SSD : Kingston FURY Renegade 1TB",
                        "Жёсткий диск : WD Black 5TB",
                        "Оперативная память : Crucial Ballistix Black 32GB",
,
                    ],
                    "price":"от 119999 руб",
                },
                {
                    "img":"assets/img/popular/game.png",
                    "title":"игровая",
                    "title_grad":"text_grad",
                    "position":"left",
                    "ac_es":[
                        "Процессор : Intel i9-10900K",
                        "Материнская плата : ASUS ROG Strix Z590 Gaming",
                        "Видеокарта : Nvidia GeForce RTX 3090",
                        "Блок питания : BeQuiet Dark Power 12",
                        "SSD : Samsung EVO 970 m.2 ",
                        "Жёсткий диск : WD Black P10",
                        "Оперативная память : Kingston HyperX Fury 64GB",
                    ],
                    "price":"от 239999 руб",
                },

            ]
        }
    }
})
Vue.component('services', {
    template: `<section class="services dark" id="services">
    <div class="container">
        <h3 class="section_title">
            ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
        </h3>
        <p class="section_subtitle">
            Поможем вам с любой проблемой
        </p>
        

        <div class="services-blocks">
            <div class="services-block" v-for="item in blocks">
                <div class="services-block-img_container">
                    <img :src="item.img" alt="" class="services-block-img">
                </div>
                <h4 class="services-block_title">
                    {{item.title}}
                </h4>
            </div>
        </div>
    </div>


</section>
    `,
    data(){
        return{
            blocks: [
                {
                    "img":"assets/img/services/build.png",
                    "title":"Сборка ПК из ваших комплектующих",
                },
                {
                    "img":"assets/img/services/water.png",
                    "title":"Сборка системы водяного охлаждения",
                },
                {
                    "img":"assets/img/services/personal.png",
                    "title":"Консультация по сборке ПК",
                }
            ]
        }
    }
})

Vue.component('feedback',{
    template:`<section class="feedback" id="feedback">
    <div class="container">
        <h3 class="section_title">
            обратная связь
        </h3>
        <div class="feedback-blocks">
            <div class="feedback-block-description feedback-block">
                <p class="feedback-block-description_text">
                    Мы стараемся помочь со всеми вашими вопросам в кратчайшие сроки и и решить любую вашу проблемы. Счастливый клиент для нас на первом месте.
                </p>
            </div>
            <div class="feedback-block-form feedback-block">
                <form class="feedback-block-form-container">
                    <div class="feedback-block-form-input-container">
                        <input type="text" name="email" id="email" placeholder="Введите ваш email"class="feedback-block-form-input">
                    </div>
                    <div class="feedback-block-form-input-container">
                        <textarea name="question" id="question"  placeholder="Введите ваш вопрос"></textarea>
                    </div>
                    <div class="feedback-block-form-submit-container">
                        <button type="submit" class="feedback-block-form-submit"></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>`
})
Vue.component('contacts',{
    template:`<footer class="footer dark" id="contacts">
    <div class="container">
        <div class="footer-blocks">
            <div class="footer-block footer-contacts">
                <ul class="footer-contacts-list">
                    <li class="footer-contacts-item"><span class="bold">Телефон</span> : +7(989)341-36-98</li>
                    <li class="footer-contacts-item"><span class="bold">E-mail</span> : fastpc@mail.ru</li>
                    <li class="footer-contacts-item"><span class="bold">Адрес</span> : г. Санкт-Петербург, Введенский канал 7</li>
                </ul>
                <div class="footer-contacts-desiner_container">
                    <span class="bold">Designed By</span> <div  class="footer-contacts-desiner-img_container">
                        <img src="assets/img/AnarkH1st.png" alt="" class="footer-contacts-desiner-img">
                    </div>
                </div>
                
            </div>
            <div class="footer-block footer-logo">
                <div class="footer-logo-img_container">
                    <svg>
                        <use xlink:href="sprite.svg#logo" viewBox="0 0 128 128"></use>
                    </svg>
                </div>
            </div>
            
        </div>
        <div class="footer-copyright">
            2023 Copyright FastPC
        </div>
    </div>
</footer>`
})
new Vue({
    el: "#app",
    
})