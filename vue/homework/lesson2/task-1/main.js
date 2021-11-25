const app = new Vue({
    el: '#app',
    components: {
        'guest': GuestWrap
    },
    data: {
        guestsList,
        title: 'list users',
        number: 10
    },
    methods: {
        people(value) {
            if (value === 'present') {
                this.number = 10
                this.guestsList = guestsList.filter(guest => guest.isPresent)
            } else if (value === 'absent') {
                this.guestsList = guestsList.filter(guest => !guest.isPresent)
                this.number = 10
            } else if (value === 'else') {
                this.number += 10
            } else {
                this.guestsList = guestsList
                this.number = guestsList.length
            }
        }
    },

    beforeCreate(){
        for (let i = 0; i < guestsList.length; i++) {
            guestsList[i]["isPresent"] = false
        }
    }


})
