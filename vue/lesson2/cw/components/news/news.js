const newsArr = [
    {
        id: 1,
        title: 'news 1',
        desc: 'desc news 1',
        img: 'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
        link: '#'
    },
    {
        id: 2,
        title: 'news 2',
        desc: 'desc news 2',
        img: '',
        link: '#',
        dd: {

        }
    },
    {
        id: 3,
        title: 'news 3',
        desc: 'desc news 3',
        img: 'https://bipbap.ru/wp-content/uploads/2017/04/0_70bfb_209fe817_XL.jpg',
        link: '#'
    }
];

const News = {
    name: 'News',
    components: {
        newsCard
    },
    props: {
        title: {
            type: String,
            default: 'News'
        }
    },
    data() {
        return {
            news: newsArr
        }
    },
    // для фільтрації
    computed: {
        newsWithImg(){
            return this.news.filter(item => item.img)
        }
    },
    methods: {
        getFilteredNews() {
            this.news = this.newsWithImg
        }
    },
    template: `
        <div class="container">
            <global-btn class="btn" name="get news with img" @click.native="getFilteredNews"/>
            <div class="row">
                <news-card 
                    data-test="test"
                    class="col-4"
                    v-for="item in news" 
                    :key="item.id"
                    :news-data="item"
                />
            </div>
        </div>
    `

}