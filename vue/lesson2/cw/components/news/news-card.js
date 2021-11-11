const newsCard = {
    // для відключення data атрибутів
    inheritAttr: false,
    name: 'NewsCard',
    props: {
        newsData: {
            type: Object,
            required: true
        }
    },
    template: `
        <a :href="newsData.link" class="card">
            <img :src="newsData.img" alt="" :title="newsData.title" class="card-top-ping">
            <div class="card-body" v-bind="$attrs">
                <div class="card-title ">{{ newsData.title }}</div>
                <div class="card-text"> {{ newsData.desc }}</div>
            </div>
        </a>
    
    `
}