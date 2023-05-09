import './header.style.css';

import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

export function Header({listaDeCabecalho}: any) {
    const [openHeader, setOpenHeader] = useState<boolean>(false);
    const [firstOpening, setFirstOpening] = useState<boolean>(true);

    const cabecalho = listaDeCabecalho.map((item: { nome: string, href: string }) => {
        return (
            <li key={item.href}>
                <Link className={'header_lista-item'} to={item.href} smooth={true}>
                    {item.nome}
                </Link>
            </li>
        )
    });

    function handleOpenHandler(event: any) {
        event.preventDefault();
        if (firstOpening) {
            setFirstOpening(false)
        }
        setOpenHeader(true);
    };

    function handleCloseHandler(event: any) {
        event.preventDefault();
        if (firstOpening) {
            setFirstOpening(false)
        }
        setOpenHeader(false);
    };

    useEffect(() => {
        function handleResize() {
            const isMobile = window.innerWidth <= 1000;
            setOpenHeader(!isMobile);
            setFirstOpening(true);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <button className={'header_btn-hamburger'} onClick={(e) => handleOpenHandler(e)}>
                <HamburgerMenuIcon
                    style={{
                        width: '50px',
                        height: '50px',
                        padding: '10px',
                        color: 'var(--main-purple)'
                    }}
                />
            </button>
            
            <header className={!openHeader ? `header-close_${firstOpening}` : 'header'}>
                { openHeader &&
                    <button className={'header_btn-cross'} onClick={(e) => handleCloseHandler(e)}>
                        <Cross1Icon
                            style={{
                                width: '30px',
                                height: '30px',
                                color: 'var(--main-purple)'
                            }}
                        />
                    </button>
                }
                <ul className={'header_lista'}>{cabecalho}</ul>
            </header>
        </>
    )
}
