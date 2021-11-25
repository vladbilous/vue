const GuestWrap = {
    name: 'guestWrap',
    props: {
        guest: {
            type: Object,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    // data() {
    //     return {
    //         defaultData: ""
    //     }
    // },

    template: `
        <div class="container">
            <div class="row">
            <div v-bind:class="{done: completed}">
            <input value="check" type="checkbox" 
                v-on:change="completed = !completed"
                @change="guest.isPresent = !guest.isPresent" 
                >
                    <span>{{ guest.index + 1 }})</span>
                    <span>{{ guest.name }}</span>
                </div>
            </div>
        </div>
            
    `

}
