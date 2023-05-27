import './App.css'

import { Contato, Header, Inicio, Projetos, QuemSou } from './components'

export function App() {
  const listaDeCabecalho: { nome: string, href: string }[] = [
    { nome: 'Início', href: 'inicio' },
    { nome: 'Quem sou', href: 'quem-sou' },
    { nome: 'Projetos', href: 'projetos' },
    { nome: 'Em Breve', href: 'em-breve' },
    { nome: 'Contato', href: 'contato' }
];

  return (
    <div className={'portfolio'}>
      <Header listaDeCabecalho={listaDeCabecalho} />

      <div className={'portfolio_container'}>

        <Inicio componentID={listaDeCabecalho[0].href} />
        <QuemSou componentID={listaDeCabecalho[1].href} />
        <Projetos componentID={listaDeCabecalho[2].href} />
        <Contato componentID={listaDeCabecalho[4].href} />
        
      </div>
    </div>
  )
}
