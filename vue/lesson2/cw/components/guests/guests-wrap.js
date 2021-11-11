const GuestsWrap = {
    name: 'GuestsWrap',
    components: {
        GuestCard: GuestCard
    },
    props: {
        title: {
            type: String,
            default: 'Guests list'
        }
    },
    data() {
        return {
            guests: guestsList
        }
    },
    template:`
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-8">
                    <h1>{{ title }}</h1>
                </div>                
                <div class="col-8">
                    <guest-card 
                        v-for="guest in guests" 
                        :key="guest['_id']"
                        :guest="guest"
                    />
                </div>
            </div>
        </div>
    `
}