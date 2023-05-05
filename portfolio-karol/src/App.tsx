import './App.css'

import { Header, Inicio, QuemSou } from './components'

export function App() {

  return (
    <div className={'portfolio'}>
      <Header />

      <div className={'portfolio_container'}>
        <Inicio />
        <QuemSou />
        <QuemSou />
      </div>
    </div>
  )
}
