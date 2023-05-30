import './contato.style.css';

export function Contato({componentID}: any) {
    return(
        <section id={componentID} className={'contato'}>
            Contato
            Telefone: (51) 98457-0480
            E-mail: karolinelemesvaz@gmail.com
        </section>

    )
}