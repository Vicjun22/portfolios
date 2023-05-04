import './quemSou.style.css';

import Photo from '../../assets/images/Karol-Photo.svg';
import { Underline } from '..';

export function QuemSou() {

    return (
        <section id='quem-sou' className={'quem-sou'}>
            <div className={'quem-sou_img'}>
                <img src={Photo} alt={'Foto Karol'} className={'quem-sou_foto'} />
            </div>
            <div className={'quem-sou_content'}>
                <h1 className={'quem-sou_titulo'}>Quem sou <Underline color={'purple'} /></h1>
                <p>Meu nome é Karoline Lemes Vaz, ou só Karol, sou designer gráfica e
                    web design. Tenho 26 anos e atualmente sou freelancer, gerenciando
                    às redes sociais de uma empresa.</p>
            </div>
        </section>
    )
}