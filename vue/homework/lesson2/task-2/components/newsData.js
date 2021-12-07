const newsData = {
    name: 'newsItem',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    template: `
        <div style="border: 1px solid black; padding: 20px">
            <p>userId - {{data.userId}}</p>
            <p>{{data.id}}) {{data.title}}</p>
            <p>{{data.body}}</p>
        </div>
    `

}