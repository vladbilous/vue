const localBtn = {
    // обов'язково має бути name (з великої букви, camelCase і не називати зарезервованими елементами)
    name: 'LocalButton',
    props: {
        name: {
            type: String,
            default: 'local button',
            // default: () => ({})
            // validate: val => {
            //     return typeof val === 'string'
            // }
        }
    },
    // обєкт
    data() {
        return {
            someData: 2,
            btnLabel: ''
        }
    },

    computed: {
        label: {
            get() {
                return this.name
            },
            set(val) {
                this.$emit('click-sintetic', val)
            }
        }
    },

    beforeCreate() {
        console.log('[beforeCreate]', this)
    },

    created() {
        console.log('[created]', this)
    },

    beforeMount() {
        console.log('[beforeMounted]', this)
    },

    mounted() {
        console.log('[mounted]', this)
    },

    beforeUpdate() {
        console.log('[beforeUpdate]', this)
    },

    updated() {
        console.log('[updated]', this)
    },

    beforeDestroy() {
        console.log('[beforeDestroy]', this)
    },

    destroyed() {
        console.log('[destroyed]', this)
    },

    methods: {
        clickHandler() {
            this.$emit('click-sintetic', 'new name from btn')
        }
    },

    template: '<button type="button" @click="clickHandler">{{ name }}</button>'
}