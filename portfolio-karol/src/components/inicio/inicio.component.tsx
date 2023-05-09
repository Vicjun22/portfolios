import { Underline } from '..';
import './inicio.style.css';

export function Inicio({componentID}: any) {

    return (
        <section id={componentID} className={'inicio'}>
            <h1 className={'inicio_titulo'}>Olá, sou a Karol <Underline color={''} /></h1>
            <h4 className={'inicio_subtitulo'}>Designer</h4>
        </section>
    )
}