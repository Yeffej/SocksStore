const Colors = {
    Blue: 0, Green: 1,
}

const app  = Vue.createApp({
    data() {
        return {
            Colors: Colors,
            product: "Socks",
            description: "Programmer´s socks | Soft and Comfortable \n"
            + "Socks programers Feet Socks for every programer Flats Foot Cover Sock",
            imgSources: [
                "../assets/images/socks_blue.jpg",
                "../assets/images/socks_green.jpg",
            ],
            details: {
                color: Colors.Blue, 
                inStock: true,
                Composition: [ { id: 0, value: '50% cotton'},
                 { id: 1, value: '30% wool'},{ id: 2, value: '20% polyester'}],               
            },
            links: "",
            CartCounter: 0,
            Variants: [
                {id: 1201, name: "blue", BtStyle: {
                    background: "#39495c",
                } }, 
                {id: 1202, name: "green", BtStyle: {
                    background: "#3aa770", 
                }}
            ],
            ExtraStyles: {
                button: "",
            }
                
        }
    },
    methods: {
        handleToggleBTClick(isAdding = true) {
            if(isAdding) {
                this.CartCounter++;
                return;
            }
            this.CartCounter--;
        },
        updateImage(imgRef, BtStyle) {
            switch (imgRef) {
                case "green": 
                    this.details.color = Colors.Green
                    break;
                default:
                    this.details.color = Colors.Blue
            }
            this.ExtraStyles.button = `background-color: ${BtStyle.background}`
        }
    }

})