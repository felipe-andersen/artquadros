'use client'

import { usePathname } from "next/navigation";
import { Div } from "./styles"
import { GoX } from "react-icons/go";
import Link from "next/link";
import hostingHTTP from "@/utils/hostingHTTP";
import { useState } from "react";

interface Props {
   
}

function CookiesComponent ({}:Props) {

    const [display, setDisplay] = useState<boolean>(true);

    const pathname =  usePathname()

    console.log(pathname)

    return (
        <Div>

            {
                display ? 

                <>
                    <button className="close"><GoX/></button>

                    <picture>
                        <img src="https://thumbs.dreamstime.com/b/cookie-deliciosa-dos-desenhos-animados-do-vetor-com-os-peda%C3%A7os-de-chocolate-isolados-sobre-97523699.jpg"/>
                    </picture>

                    <strong>Cookies</strong>

                    <span>Usamos cookies para personalizar anúncios e melhorar a sua experiência no site. Ao continuar navegando, você concorda com os <Link href={`${hostingHTTP}/category`}>Termos de Uso</Link> e <Link href={`${hostingHTTP}/category`}>Política de Privacidade</Link>.</span>

                    <button 
                        className="accept"
                        onClick={() => setDisplay(false)}>Aceitar e continuar</button>

                    <button className="manage accept">Gerenciar cookies</button>

                    <button className="reject" style={{display:'none'}}>Rejeitar</button>

                </> 

                : 
                
                <></>
            }

        </Div>
    )
};

export default CookiesComponent