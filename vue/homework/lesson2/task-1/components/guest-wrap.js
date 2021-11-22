const GuestCard = {
    name: 'GuestCard',
    props: {
        guest: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            defaultData: ""
        }
    },
    template: `
        <p>
            <div >
                    <guest-card 
                        v-for="guest in guests" 
                        :key="guest['_id']"
                        :guest="guest"
                    />
            </div>
            
        </p>
    `

}
