var app = new Vue({
    el: '#app',
    data: {
      message: 'Привет, Vue!',

      images:[
        {
          url:'https://www.google.ru/',
          title:'Google',
          alt:'Google.jpg.jpg',
          img:'img/google.jpg',
          discription:'Поисковая система google',
        },
        {
          url:'https://yandex.ru/',
          title:'Yandex',
          alt:'Yandex.jpg',
          img:'img/yandex.jpg',
          discription:'Поисковая система Yandex',
        },
      ]
    },
     
  })
  