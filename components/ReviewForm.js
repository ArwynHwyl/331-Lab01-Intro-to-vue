const reviewForm = {

  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="form.name">

      <label for="review">Review:</label>
      <textarea id="review" v-model="form.review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model="form.rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label for="recommend">Would you recommend this product?</label>
      <input type="radio" id="yes" :value="true" v-model="form.recommend">
      <label for="yes">Yes</label>
      <input type="radio" id="no" :value="false" v-model="form.recommend">
      <label for="no">No</label>

      <input class="button" type="submit" value="Submit">
    </form>
    `,

  setup(props, { emit }) {
    const form = reactive({
      name: '',
      review: '',
      rating: null,
      recommend: null
    })

    function onSubmit() {
      if (form.name === '' || form.review === '' || form.rating === null || form.recommend === null) {
        alert("Review is incomplete. Please fill out every field.")
        return
      }
      const productReview = {
        name: form.name,
        review: form.review,
        rating: form.rating,
        recommend: form.recommend
      }

      emit('review-submitted', productReview)

      form.name = ' '
      form.review = ' '
      form.rating = null
      form.recommend = null
    }

    return {
      form,
      onSubmit
    }
  }
}