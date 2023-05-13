import './projetos.style.css';

import { Underline } from '..';
import { programasERecursos } from '../../utils/programasERecursos';

import Figma from '../../assets/icons/figma-icon.svg';
import CorelDRAW from '../../assets/icons/coreldraw-icon.svg';
import Photoshop from '../../assets/icons/adobe-photoshop-icon.svg';

export function Projetos({componentID}: any) {

    const programas: any = programasERecursos.map(recursos => {
        const imagem: any = {
            'Figma': Figma,
            'CorelDRAW': CorelDRAW,
            'Photoshop': Photoshop
        }

        return (
            <div className={'projetos_card'}>
                <h1 className={'projetos_card-titulo'}>{recursos}</h1>
                <img className={'projetos_card-img'} src={imagem[recursos]} alt={recursos} />
            </div>
        )
    });

    return (
        <section id={componentID} className={'projetos'}>
            <div className={'projetos_desc'}>
                <h1 className={'projetos_titulo'}>Projetos <Underline color={'purple'} /></h1>
                <p>Alguns dos projetos desenvolvidos para empresas em que trabalhei.</p>
            </div>

            <div className={'projetos_container'}>
                <div className={'projetos_content'}>
                    {programas}
                </div>
            </div>
        </section>
    )
}