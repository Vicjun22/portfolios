import './header.style.css';

export function Header({children}: any) {

    return (
        <header className={'header'}>
            <ul className={'header_lista'}>
                <li><a className={'header_lista-item'} href={'#inicio'}>Início</a></li>
                <li><a className={'header_lista-item'} href={'#quem-sou'}>Quem sou</a></li>
                <li><a className={'header_lista-item'} href={'#conhecimentos'}>Conhecimentos</a></li>
                <li><a className={'header_lista-item'} href={'#experiencias'}>Experiências</a></li>
                <li><a className={'header_lista-item'} href={'#contato'}>Contato</a></li>
            </ul>

            {children}
        </header>
    )
}