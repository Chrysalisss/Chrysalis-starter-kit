import { h } from 'chrysalis.js'

const Hello = {
  oncreate() {
    console.log('Welcome!')
  },

  render() {
    return (
      <div>
        <h1>Welcome to Chrysalis!</h1>
        <p>Thank you for choosing us. It will be fun! ( ͡° ͜ʖ ͡°)</p>
        <img class="sakurajima" src="assets/sakurajima.jpg" />
      </div>
    )
  }
}

export default Hello
