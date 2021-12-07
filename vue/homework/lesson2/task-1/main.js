const app = new Vue({
    el: '#app',
    components: {
        'guest': GuestWrap
    },
    data: {
        guestsList,
        guestsListSearch: [],
        title: 'list users',
        number: 10,
        search: "",
        absentGuests: guestsList.length,
        activeCategory: '',
        presentGuests: 0,
    },
    methods: {
        people(value) {
            if (value === 'present') {
                this.number = 10
                this.isPresent = true;
                this.guestsList = guestsList.filter(guest => guest.isPresent)
            } else if (value === 'absent') {
                this.guestsList = guestsList.filter(guest => guest.isPresent === false)
                this.number = 10
            } else if (value === 'else') {
                this.number += 10
                this.guestsList = guestsList.filter(guest => guest)
            } else {
                this.guestsList = guestsList
                this.number = guestsList.length
            }
        }
    },
    computed: {
        searchResults() {
            let obj = this.guestsList;
            let arr = [];
            const search = this.search.toLowerCase();
            for (key in obj) {
                let el = obj[key]
                if (el.name.toLowerCase().indexOf(search) != -1) {
                    arr.push(el)
                    this.activeCategory = 'name'
                } else if(el.company.toLowerCase().indexOf(search) != -1){
                    arr.push(el)
                    this.activeCategory = 'company'
                } else if(el.email.toLowerCase().indexOf(search) != -1){
                    arr.push(el)
                    this.activeCategory = 'email'
                } else if(el.phone.toLowerCase().indexOf(search) != -1){
                    arr.push(el)
                    this.activeCategory = 'phone'
                } else if(el.address.toLowerCase().indexOf(search) != -1){
                    arr.push(el)
                    this.activeCategory = 'address'
                }
                this.guestsListSearch = []
                for(let i=0; i<this.number; i++){
                    if(arr[i]){
                        this.guestsListSearch[i] = arr[i]
                    }
                }
            }
            return arr;
        },
        countGuests(){
            this.presentGuests = guestsList.filter(guest => guest.isPresent).length
            this.absentGuests = guestsList.filter(guest => !guest.isPresent === false).length
        }
    },
    beforeCreate(){
        for (let i = 0; i < guestsList.length; i++) {
            guestsList[i]["isPresent"] = false
        }
    }


})
