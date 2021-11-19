const heroesObject = {
    stranger: ['Иван Чужой ', 'Чужой Николай ', 'Чиж Чужой'],
    potter: ['Людмила Поттер', 'Юрий Гарри', 'Камень Гуд'],
    matrix: ['Нео Бест', 'Рон Интел', 'Филип Логи']
}
var logElem = document.querySelector(".actors");

heroesObject.stranger.forEach( function (def){
    logElem.innerHTML += "<li>" + def + "</li>";

})

filters = ['stranger', 'potter', 'matrix'];
filters.forEach(function(filter){
    document.getElementById(filter).addEventListener("click",
        function(e){
            logElem.innerHTML = ' ';
            const items = heroesObject.filter
            for (key in heroesObject) {
                if (filter == key) {
                    heroesObject[key].forEach(function (item) {
                        logElem.innerHTML += "<li>" + item + "</li>";
                    })
                }
            }
        }
    );
})

const colors = ['red', 'blue', 'green']

colors.forEach(function (color){
    document.getElementById(color).addEventListener("click",
        function (e){
            var el = document.querySelector("div#actors-block");
            document.querySelectorAll('#actors-block').forEach(element => {
                element.removeAttribute('class');
            });
        console.log(color +  ' colors')
            el.classList.add(color)
        })
})