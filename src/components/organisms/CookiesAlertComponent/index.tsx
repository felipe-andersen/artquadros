'use client'

import { Div } from "./styles"
import { GoX } from "react-icons/go";

function CookiesComponent () {
    return (
        <Div>

            <button className="close">
                <GoX/>
            </button>

            <picture>
                <img src="https://thumbs.dreamstime.com/b/cookie-deliciosa-dos-desenhos-animados-do-vetor-com-os-peda%C3%A7os-de-chocolate-isolados-sobre-97523699.jpg"/>
            </picture>

            <strong>Cookie</strong>

            <span>Usamos cookies para personalizar anúncios e melhorar a sua experiência no site. Ao continuar navegando, você concorda com a nossa <a>Política de Privacidade</a>.</span>

            <button className="go">Aceitar e continuar</button>

            
        </Div>
    )
};

export default CookiesComponent