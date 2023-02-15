import {BrowserRouter} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Home />
    <TeamMatches />
  </BrowserRouter>
)

export default App
