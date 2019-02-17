import { h, start } from 'chrysalis.js'
import Hello from './Hello'

const container = document.getElementById('app')

global.App = () => {
  return (
    <div class="main">
      <Hello />
    </div>
  )
}

start(container)
