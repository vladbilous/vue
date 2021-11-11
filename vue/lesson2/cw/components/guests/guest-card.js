const GuestCard = {
    name: 'GuestCard',
    // для отримання даних
    props: {
        guest: {
            type: Object,
            required: true
        }
    },
    template: `
        <div>
            <span>{{ guest.name }}</span>
        </div>
    `
}