app.component("product-container", {
    // props: {

    // },
    template:
    /*html*/
     `
    <section class="product-container">
          <figure :class="{outOfStockImg: !inStock}" class="product-image">
            <img v-show="details.color == Colors.Blue" v-bind:src="imgSources[0]" alt="BlueSock">
            <img v-show="details.color == Colors.Green" v-bind:src="imgSources[1]" alt="GreenSock">
          </figure>
          <div class="product-info">
            <h1>{{title}}</h1>
            <h3 v-if="inStock">In Stock!</h3>
            <h3 v-else>Out of Stock!</h3>
            <p>{{description}}</p>
            <ul>
              <li v-for="componet in details.Composition" :key="componet.id">{{componet.value}}</li>
            </ul>
            <!-- COLORS SELECTOR CONTAINER -->
            <section>
              <div v-for="variant in Variants" :key="variant.id" 
                @mouseover="updateImage(variant.name, variant.BtStyle)" 
                class="color-circle" :style="{ backgroundColor: variant.name }">
              </div>
            </section>
            <!-- END -->

            <button :style="ExtraStyles.button" v-on:click="handleClickToggleCartSender" 
            class="button" v-bind:disabled=" !inStock" 
            :class="{disabledButton:  !inStock}"
            >Add To Cart</button>
            <button :style="ExtraStyles.button" 
            v-on:click="()=> handleClickToggleCartSender(false)" class="button" 
            :disabled="availableRemove" 
            :class="{disabledButton:  availableRemove}">
              Remove To Cart</button>
          </div>
          
          <review-component v-if="Reviews.length > 0" :reviews="Reviews">
          </review-component>
          <review-form v-on:form-submit="addReview" :btStyle="ExtraStyles.button">
          </review-form>
    </section>
    `,
    
    data() {
        return {
            Colors: Colors,
            Brand: "Vue JS",
            product: "Socks",
            description: "Programmer´s socks | Soft and Comfortable \n"
            + "Socks programers Feet Socks for every programer Flats Foot Cover Sock",
            imgSources: [
                "./assets/images/socks_blue.jpg",
                "./assets/images/socks_green.jpg",
            ],
            details: {
                color: Colors.Blue, 
                Composition: [ { id: 0, value: '50% cotton'},
                 { id: 1, value: '30% wool'},{ id: 2, value: '20% polyester'}],               
            },
            Variants: [
                {id: 1201, name: "blue", BtStyle: {
                    background: "#39495c",
                },  quantity: 12, Sold: []}, 
                {id: 1202, name: "green", BtStyle: {
                    background: "#3aa770", 
                }, quantity: 5, Sold: []}
            ],
            ExtraStyles: {
                button: "",
            },
            Reviews: [],          
                
        }
    },
    methods: {
        handleClickToggleCartSender(isAdding = true) {
            this.$emit("toggle_cart", isAdding, this.Variants, this.details.color)
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
        },
        addReview(review) {
            this.Reviews.push(review);
        }

    },
    computed: {
        title() {
            return this.Brand + " " + this.product;
        },
        availableRemove() {
                return (this.Variants[this.details.color].Sold.length <= 0);      
        },
        inStock() {
            return this.Variants[this.details.color].quantity;
        }
    }
})