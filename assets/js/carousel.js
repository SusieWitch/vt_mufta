$(document).ready(function(){
      $('.reviews-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                //margin:50, //Отступ от элемента справа в 50px
                nav:true,
                dots:false,
    navText : ["<img src='assets/img/prev1.png' alt='' />","<img src='assets/img/next1.png' alt='' />"], //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1,
                    },
                    768:{
                        items:3,
                        margin:20,
                    },
                    1000:{
                        items:4,
                        margin:50,
                    }
                }
            });});
    
    $(document).ready(function(){
      $('.certificate-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                //margin:50, //Отступ от элемента справа в 50px
                nav:true,
                dots:false,
    navText : ["<img src='assets/img/prev2.png' alt='' />","<img src='assets/img/next2.png' alt='' />"], //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1,
                        nav:true,
                    },
                    768:{
                        items:3,
                        margin:20,
                    },
                    1000:{
                        items:4,
                        margin:50,
                    }
                }
            });});
      
      $(document).ready(function(){
      $('.work-carousel').owlCarousel({
                loop:false, //Зацикливаем слайдер
                 //Отступ от элемента справа в 50px
                nav:true,
                dots:false,
    navText : ["<img src='assets/img/prev1.png' alt='' />","<img src='assets/img/next1.png' alt='' />"], //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1,
                        loop:true,
                    },
                    768:{
                        items:4,
                        margin:20,
                    },
                    1000:{
                        items:4,
                        margin:50,
                    }
                }
            });});
      
      $(document).ready(function(){
      $('.advantage-carousel').owlCarousel({
                loop:false, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav:true,
                dots:false,
    navText : ["<img src='assets/img/prev2.png' alt='' />","<img src='assets/img/next2.png' alt='' />"], //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1,
                        loop:true,
                    },
                    768:{
                        items:4,
                        margin:20,
                    },
                    1000:{
                        items:4,
                        margin:50,
                    }
                }
            });});
      