const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            const index = this.cart.indexOf(id)
            console.log(index)
            if(index >= 0) this.cart.splice(index,1)
        }
    }
})
