const Colors = {
    Blue: 0, Green: 1,
}

const app  = Vue.createApp({
    data() {
        return {
            Colors: Colors,
            Cart: [],
            links: "",                        
        }
    },   
   
    methods: {
        handleToggleCart(isAdding, Variants, Color) {
            if(isAdding) {
                const item = {
                    id: this.Cart.length,
                    Type: `${this.product} ${Variants[Color].name}`
                }
                Variants[Color].Sold.push(item.id)
                this.Cart.push(item);
                Variants[Color].quantity--;
                return;
            }
           const index = Variants[Color].Sold.length - 1
            if(index === -1)
                return;
            this.Cart.splice(index, 1)
            Variants[Color].Sold.pop()
            Variants[Color].quantity++;
        }
    }

})