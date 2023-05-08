import './header.style.css';

import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

export function Header() {
    const listaDeCabecalho: { nome: string, href: string }[] = [
        { nome: 'Início', href: 'inicio' },
        { nome: 'Quem sou', href: 'quem-sou' },
        { nome: 'Design Gráfico', href: 'design-grafico' },
        { nome: 'Web Design', href: 'web-design' },
        { nome: 'Contato', href: 'contato' }
    ];

    const [openHeader, setOpenHeader] = useState<boolean>(false);

    const cabecalho = listaDeCabecalho.map((item: { nome: string, href: string }) => {
        return (
            <li key={item.href}>
                <Link className={'header_lista-item'} to={item.href} smooth={true}>
                    {item.nome}
                </Link>
            </li>
        )
    })

    function handleFecharHeader(event: any) {
        event.preventDefault();
        setOpenHeader(false);
    }

    function handleAbrirHeader(event: any) {
        event.preventDefault();
        setOpenHeader(true);
    }

    useEffect(() => {
        function handleResize() {
            const isMobile = window.innerWidth <= 1000;
            setOpenHeader(!isMobile);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {!openHeader ?
                <button className={'header_btn-hamburger'} onClick={(event) => handleAbrirHeader(event)}>
                    <HamburgerMenuIcon
                        style={{
                            width: '50px',
                            height: '50px',
                            padding: '10px',
                            color: 'var(--main-purple)'
                        }}
                    />
                </button>
                :
                <header className={!openHeader ? 'header header-close' : 'header'}>
                    <button className={'header_btn-cross'} onClick={(event) => handleFecharHeader(event)}>
                        <Cross1Icon
                            style={{
                                width: '30px',
                                height: '30px',
                                color: 'var(--main-purple)'
                            }}
                        />
                    </button>
                    <ul className={'header_lista'}>
                        {cabecalho}
                    </ul>
                </header>
            }
        </>
    )
}
