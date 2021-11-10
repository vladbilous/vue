Vue.comonent('GlobalBtn', {
    // props: ['someProps']
    props: {
        name: {
            type: String,
            default: 'button',
            // default: () => ({})
            // validate: val => {
            //     return typeof val === 'string'
            // }
        }
    },
    // обєкт
    data() {
        return {
            someData: 1
        }
    },

    methods: {

    },

    template: '<button type="button">{{ name }}</button>'
})