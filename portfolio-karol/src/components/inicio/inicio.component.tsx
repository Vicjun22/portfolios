import './inicio.style.css';

import KarolImg from '../../assets/images/Karol-Hi.svg'
import { useEffect, useState } from 'react';

export function Inicio() {
    const [cargos, _] = useState<string[]>(['Designer', 'Designer Gráfica']);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const lastIndex = cargos.length - 1;
        const intervalId = setInterval(() => {
            setIndex(index => index < lastIndex ? index + 1 : 0);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [cargos.length])
 
    return (
        <section className={'inicio'}>
            <div className={'inicio_content'}>
                <h1 className={'inicio_hello'}>
                    Olá, eu sou a <span className={'inicio_hello-nome'}>Karol</span>
                    <img src={KarolImg} alt={'Ícone'} />
                </h1>
                <h1 className={'inicio_hello'}>
                    e sou <span className={'inicio_hello-destaque inicio_cursor'}>{cargos[index]}</span>
                </h1>
            </div>
        </section>
    )
}