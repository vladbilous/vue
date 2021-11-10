


const app = new Vue({
    el: '#app',
    data: {
        attr: {
            name: 'data-test',
            value: 'test it'
        },
        testWatch: {
            attr1: 'test',
            attr2: 'test2'
        },
        param1: 1,
        param2: 2,
        myAttr: {
            class: 'red'
        },
        isClass: true,
        forComputed1: 1
    },
    computed: {
        myCompTest() {
            return this.param1 + this.param2
        },
        forComputed: {
            get() {
                return this.forComputed1
            },
            set(val) {
                this.forComputed1 = val
            }
        }
    },
    watch: {
        forComputed(nVal, oVal) {
            console.log(nVal)
            console.log(oVal)
        },
        testWatch: {
            handler(nVal, oVal){
                console.log(nVal)
                console.log(oVal)
            },
            deep:true,
            immediate:true
        }
    },
    // beforeCreate() {
    //
    // },
    // mounted() {
    //     document.addEventListener('scroll', someMethod)
    // },
    // destroyed() {
    //     document.removeEventListener('scroll', someMethod)
    // },
    methods: {
        clickHundler() {
            alert(this.myCompTest)
        }
    }


})