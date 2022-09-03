import React from 'react'
import Time from './components/Time'
import {CodeIcon, MarkGithubIcon} from '@primer/octicons-react'

function App() {

  return (
    <div>
      <header>
        <h2 id="app--title">Não leve falta!</h2>
      </header>
      <Time />
      <footer> 
        <button className='app--btn left' onClick={() => location.href='https://github.com/carlosarraes'}><MarkGithubIcon size={16} /><span className='app--btnS'>@carlosarraes</span></button>
        <button className='app--btn right' onClick={() => location.href='https://github.com/carlosarraes/nlf'}><CodeIcon size={16} /><span className='app--btnS'>Código</span></button>
        <p><a href="https://carlosarraes.github.io/" target="_blank">carlos arraes - devfolio</a></p>
      </footer>
    </div>
  )
}

export default App
