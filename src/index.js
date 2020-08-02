import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './reset.css'
import Home from './pages/Home'
import Video from './pages/Video'

function Pagina404() {
  return (<h1>404</h1>)
}


ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/cadastro/video' component={ Video } />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
)
