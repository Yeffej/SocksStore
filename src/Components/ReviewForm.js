app.component("review-form", {
    props: {
        btStyle: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
`   <form class="review-form" @submit.prevent="handleSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="Name">

        <label for="review">Review:</label>      
        <textarea id="review" v-model="Review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model="Rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommend">Would you recommend this product?</label>
        <select id="recommend" v-model="Recommend">
            <option>Yes</option>
            <option>No</option>
        </select>

        <input class="button" :style="btStyle" type="submit" value="Submit">  
    </form>
`,
data() {
    return {
        Name: "",
        Review: "",
        Rating: null,
        Recommend: "",
    }
},
methods: {
    handleSubmit() {
        if( this.Name && this.Review && this.Rating ){
            const properties = {
                name: this.Name,
                review: this.Review, 
                rating: this.Rating,
                recommend: this.Recommend
            }
            this.$emit("form-submit", properties) 
            this.Name = ""
            this.Review = ""
            this.Rating = null
            return;
        }
        alert("Review is incomplete. Please fill out every field")
    },
   
}

})