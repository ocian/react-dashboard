import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import Router from './router'

ReactDOM.render(
  <Router />,
  // <StrictMode>
  //   <Router />
  // </StrictMode>,
  document.querySelector('#root')
)
