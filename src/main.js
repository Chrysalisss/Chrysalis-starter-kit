import { h, render } from 'chrysalis.js'
import Hello from './Hello'

const container = document.getElementById('app')

const App = () => {
  return (
    <div class="main">
      <Hello />
    </div>
  )
}

render(<App />, container)
