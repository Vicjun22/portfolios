import './header.style.css';

import { Link } from 'react-scroll';
import { useState } from 'react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

export function Header() {
    const listaDeCabecalho: { nome: string, href: string }[] = [
        { nome: 'Início', href: 'inicio' },
        { nome: 'Quem sou', href: 'quem-sou' },
        { nome: 'Design Gráfico', href: 'design-grafico' },
        { nome: 'Web Design', href: 'web-design' },
        { nome: 'Contato', href: 'contato' }
    ]

    const [openHeader, setOpenHeader] = useState<boolean>(false);
    let mobile: boolean = window.innerWidth <= 1000;

    const cabecalho = listaDeCabecalho.map((item: { nome: string, href: string }) => {
        return (
            <li key={item.href}>
                <Link className={'header_lista-item'} to={item.href} smooth={true}>
                    {item.nome}
                </Link>
            </li>
        )
    })

    return (
        <>
            {(mobile && openHeader) &&
                <header className={`header ${'header_' + openHeader}`}>
                    <button className={'header_btn-cross'} onClick={() => setOpenHeader(!openHeader)}>
                        <Cross1Icon style={{ width: '30px', height: '30px', color: 'var(--main-purple)' }} />
                    </button>

                    <ul className={'header_lista'}>
                        {cabecalho}
                    </ul>
                </header>
            }
            {(mobile && !openHeader) &&
                <button className={'header_btn-hamburger'} onClick={() => setOpenHeader(!openHeader)}>
                    <HamburgerMenuIcon 
                        style={{
                            width: '50px',
                            height: '50px',
                            padding: '10px',
                            color: 'var(--main-purple)'
                        }}
                    />
                </button>
            }
            {!mobile &&
                <header className={'header'}>
                    <ul className={'header_lista'}>
                        {cabecalho}
                    </ul>
                </header>
            }
        </>
    )
}
