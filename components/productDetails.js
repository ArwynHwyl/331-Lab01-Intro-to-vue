const productDetails = {

  template:
    /*html*/
    `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `,

    props: {
      details: Array
    },
    setup(props) {
      const details = props.details

      return {
        details
      }
    }
}