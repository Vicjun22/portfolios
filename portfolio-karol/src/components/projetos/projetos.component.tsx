import { Underline } from '..';
import './projetos.style.css';

export function Projetos({componentID}: any) {

    return (
        <section id={componentID} className={'projetos'}>
            <div className={'projetos_desc'}>
                <h1 className={'projetos_titulo'}>Projetos <Underline color={'purple'} /></h1>
                <p>Alguns dos projetos desenvolvidos para empresas em que trabalhei.</p>
            </div>

            <div className={'projetos_container'}>
                <div className={'projetos_content'}>

                </div>
            </div>
        </section>
    )
}