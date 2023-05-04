import './header.style.css';

export function Header() {

    return (
        <header className={'header'}>
            <ul className={'header_lista'}>
                <li><a className={'header_lista-item'} href={'#inicio'}>Início</a></li>
                <li><a className={'header_lista-item'} href={'#quem-sou'}>Quem sou</a></li>
                <li><a className={'header_lista-item'} href={'#design-grafico'}>Design Gráfico</a></li>
                <li><a className={'header_lista-item'} href={'#web-design'}>Web Design</a></li>
                <li><a className={'header_lista-item'} href={'#contato'}>Contato</a></li>
            </ul>
        </header>
    )
}