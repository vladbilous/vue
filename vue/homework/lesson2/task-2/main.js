const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const getData = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseText;
}

const data = JSON.parse(getData(urlPosts))

const app = new Vue({
    el: '#app',
    components: {
        'newsData': newsData,
        preloader
    },
    data: {
        'news': '',
        'preloaderTrue':true,
        'contentFalse': false,
        'time': 5
    },
    created() {
        this.news = data
    },
    mounted() {
        setInterval(() => {
            this.time--
        }, 1000)
        setTimeout(()=>{
            this.preloaderTrue = false;
            this.contentFalse = true
        }, 5000)
    }
})