'use client'
import { SchemaComponent } from "@/@types";
import Div from "./styles";
import { GoX } from "react-icons/go";
import { TbShoppingBag } from "react-icons/tb";
import LogInSignInModal from "../../../organisms/LogInSignInModal";
import { useEffect, useState } from "react";
import { fetchAPI } from "@/utils/fetchAPI/fetchAPI";
import { TLD } from "@/utils/baseURL";
import { useQueryClient } from "react-query";


// pesquisar ocorrencias que começam com xyz, que contém xyz, 

// pesquisar ocorrencias que começam com xyz ou pqr | xyz e pqr ([T][e]| [T][o])w+

// principains itens da pesquisa no redis

// filtragem regex a pesquisa, em cada idioma.


function HeaderComponent(props: SchemaComponent) {

    const data = fetchAPI(`artquadros.com${TLD ? "." : ""}${TLD}`)

    useEffect(() => {
        console.log('Welcome'),
        []
    })

    const [state, setMyState] = useState(null)

    // const queryApp = useQueryClient()

    const { lang, content, setContent } = props

    const minBreakpoint = false

    const translates = [
        { 
            lang: "pt-BR", 
            header: {
                form: {
                    seachInput: {
                        placeholder: 'Pesquisar',
                    }
                }
            } 
        },
        { 
            lang: "en", 
            header: {
                form: {
                    seachInput: {
                        placeholder: 'search',
                    }
                }
            } 
        },
     ];
 
     const translate = translates.findIndex((currency)  => currency.lang === lang ? currency.lang === lang : currency.lang === "en");
 
     const translatedContent = translates[translate];

    return (
 
        <header>

            <Div>

                <div>
                    
                    <div>

                        <i>
                            <img src="https://w7.pngwing.com/pngs/482/653/png-transparent-vaio-hd-logo.png"/>
                        </i>
                        
                    </div>

                    {
                        minBreakpoint ? 
                        
                        <></> : 

                        <div>

                            <form>

                                <i className="searchIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/></svg>
                                </i>

                                <input spellCheck="false" aria-label={translatedContent.header.form.seachInput.placeholder} placeholder={translatedContent.header.form.seachInput.placeholder} aria-placeholder="" type="text"/>

                                <span>
                                    <i className="closeIcon">
                                        <GoX/>
                                    </i>
                                </span>

                            </form>

                            <button>cancel</button>

                        </div>

                    }
                    
                    <button className="size">TABELA DE MEDIDAS</button>
                    
                    <div className="container-cart">

                         <button>

                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-735q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-160 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm280 40q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-320 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-120 40q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-240 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm40 40q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm160 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm-480 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm40-40q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80-80q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm40-40q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 0q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm40 40q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm80 80q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6Zm40 40q-8 0-14-6t-6-14q0-8 6-14t14-6q8 0 14 6t6 14q0 8-6 14t-14 6ZM353.775-383Q331-383 315.5-398.725q-15.5-15.726-15.5-38.5Q300-460 315.725-475.5q15.726-15.5 38.5-15.5Q377-491 392.5-475.275q15.5 15.726 15.5 38.5Q408-414 392.275-398.5q-15.726 15.5-38.5 15.5Zm253 0Q584-383 568.5-398.725q-15.5-15.726-15.5-38.5Q553-460 568.725-475.5q15.726-15.5 38.5-15.5Q630-491 645.5-475.275q15.5 15.726 15.5 38.5Q661-414 645.275-398.5q-15.726 15.5-38.5 15.5ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm-.264-60Q622-140 721-239.267q99-99.266 99-240.469Q820-622 721.188-721 622.375-820 480-820q-141.312 0-240.656 98.812Q140-622.375 140-480q0 141.312 99.267 240.656Q338.533-140 479.736-140Z"/></svg>
                            </i>

                        </button>

                        <button className="button">

                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"/></svg>

                            </i>

                        </button>

                         <button className="button">

                            <i>
                               <TbShoppingBag/>
                            </i>
                   
                        </button>

                    </div>

                </div>

                {
                    minBreakpoint ? 
                    <form>

                        <input placeholder="Search" aria-label="Search" aria-placeholder="nb" type="text"/>

                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/></svg>
                        </i>

                    </form>
                    : <></> 
                }

            </Div>
            
        </header>

    )
}

export default HeaderComponent;