strangerH =  ['Иван Чужой ', 'Чужой Николай ', 'Чиж Чужой'];
potterH = ['Людмила Поттер', 'Юрий Гарри', 'Камень Гуд'];
matrixH = ['Нео Бест', 'Рон Интел', 'Филип Логи'];

const app = new Vue({
    el: '#app',
    data: {
        strangerH,
        potterH,
        matrixH,
        actors: strangerH,
        color: 'red'
        // stranger: '<li>Иван Чужой</li> <li>Чужой Николай</li> <li>Чиж Чужой</li>',
        // potter:'<li>Людмила Поттер</li><li>Юрий Гарри</li><li>Камень Гуд</li>',
        // matrix:'<li>Нео Бест</li><li>Рон Интел</li><li>Филип Логи</li>',

    }
})
