import './header.style.css';
import { Link } from 'react-scroll';

export function Header() {

    return (
        <header className={'header'}>
            <ul className={'header_lista'}>
                <li><Link className={'header_lista-item'} to="inicio" smooth={true}>Início</Link></li>
                <li><Link className={'header_lista-item'} to="quem-sou" smooth={true}>Quem sou</Link></li>
                <li><Link className={'header_lista-item'} to="design-grafico" smooth={true}>Design Gráfico</Link></li>
                <li><Link className={'header_lista-item'} to="web-design" smooth={true}>Web Design</Link></li>
                <li><Link className={'header_lista-item'} to="contato" smooth={true}>Contato</Link></li>
            </ul>
        </header>
    )
}
