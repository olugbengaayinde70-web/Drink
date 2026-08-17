import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Head from './Head'
import Hero from './Hero'
import Body from './Body'
import About from './About'
import Fotter from './Fotter'
import initScrollAnimations from './scrollAnimate'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head />
    <Hero />
    <div id='drinks-section'>
      <Body />
      <About></About>
      <Fotter></Fotter>
    </div>
  </StrictMode>,
)

if (typeof window !== 'undefined') {
  // initialize scroll animations after first paint
  requestAnimationFrame(() => initScrollAnimations())
}
