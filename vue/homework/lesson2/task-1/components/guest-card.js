const guestCard = {
    name: 'guestCard',
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
                {{guest.name}}
            </div>
            
        </p>
    `

}
