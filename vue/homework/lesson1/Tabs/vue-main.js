strangerH =  ['Иван Чужой ', 'Чужой Николай ', 'Чиж Чужой'];
potterH = ['Людмила Поттер', 'Юрий Гарри', 'Камень Гуд'];
matrixH = ['Нео Бест', 'Рон Интел', 'Филип Логи'];

const tabs = new Vue({
    el: '#tabs',
    data: {
        strangerH,
        potterH,
        matrixH,
        actors: strangerH,
        color: 'red'
    }
})
