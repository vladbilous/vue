const preloader = {
    name: 'preloader',
    props: {
        time: {
            type: Number,
            default: 5
        },
    },
    template: `
        <div class="loader">
            <div class="face">
            <div class="circle"></div>
            </div>
            <div class="face">
            <div class="circle"></div>
            </div>
            <div>{{time}}</div>
        </div>
    `
}