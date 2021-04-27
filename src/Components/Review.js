app.component("review-component", {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
`   <div>
        <h3>Reviews: </h3>
        <ul class="review-container">
            <li v-for="(review, index) in reviews" :key="index">
                <h4>{{ review.name }} gave this <strong>{{ review.rating }} stars</strong>
                </h4> 
                <p>"{{ review.review }}"</p>
                <p>Recomended: {{review.recommend}}</p>
            </li>
        </ul>
    </div>
`
})