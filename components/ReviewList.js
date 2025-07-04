const reviewList = {

  template:
    /*html*/
    `
    <div class="review-container">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br/>
          "{{ review.review }}"
          <br/>
          {{ review.name }} {{ review.recommend ? 'recommends' : 'does not recommend' }} this product
        </li>
      </ul>
    </div>
    `,

    props: {
      reviews: {
        type: Array
      }
    },
    setup(props) {
      const review = props.reviews

      return {
        review
      }
    }
}