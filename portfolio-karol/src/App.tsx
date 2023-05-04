import './App.css'

import { Header, Inicio, QuemSou } from './components'

export function App() {

  return (
    <div className={'portfolio'}>
      <Header />

      <Inicio />
      <QuemSou />
    </div>
  )
}
