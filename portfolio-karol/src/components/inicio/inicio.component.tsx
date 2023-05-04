import './inicio.style.css';

import { useEffect, useState } from 'react';

import KarolImg from '../../assets/images/Karol-Hi.svg'

export function Inicio() {
    const cargos: string[] = ['Designer', 'Designer Gráfica'];
    const [index, setIndex] = useState<number>(0);
    const [view, setView] = useState<string>(cargos[index])

    useEffect(() => {
        const lastIndex = cargos.length - 1;
        const intervalId = setInterval(() => {
            setIndex(index => index < lastIndex ? index + 1 : 0);
            setView(cargos[index]);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [index])
 
    return (
        <section className={'inicio'}>
            <div className={'inicio_content'}>
                <h1 className={'inicio_hello'}>
                    Olá, eu sou a <span className={'inicio_hello-nome'}>Karol</span>
                    <img src={KarolImg} alt={'Ícone'} />
                </h1>
                <h1 className={'inicio_hello'}>
                    e sou <span className={'inicio_hello-destaque inicio_cursor'}>{view}</span>
                </h1>
            </div>
        </section>
    )
}