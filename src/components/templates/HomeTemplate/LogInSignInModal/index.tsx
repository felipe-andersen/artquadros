'use client'
import { SchemaComponent } from "@/types";
import Div from "./styles";


async function LogInSignInModal(props: SchemaComponent) {

    const translates = [
        { authentication: "Autenticação", password: "Senha", placeholder: "Entre com o email", signIn:"Cadastrar" },
        { authentication: "Autenticação", password: "Senha", placeholder: "Entre com o email", signIn:"Cadastrar" }
    ];

    const content = await translates[1];

    return (

        <Div>

        <section>

            <h2>{content.authentication}</h2>

            <form>

                <label>Email

                    <input placeholder={content.placeholder}/>

                </label>

                <label>{content.password}

                    <input placeholder={content.placeholder}/>

                </label>
    
                <button>

                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg>
                    </i>
                    
                    Facebook
                </button>
                <button>
                    Google
                </button>
                <button>
                    Aplle
                </button>

            </form>

            <form>

                <h2>{content.signIn}</h2>

                <div>

                <label>
                    Name
                    <input id="name" placeholder="Name"/>
                </label>

                <label>
                    Email
                    <input id="email" placeholder="Email"/>
                </label>

                <label>
                    Senha
                    <input id="senha" />
                </label>

                <label>
                    Repetir senha
                    <input id="repeatSenha" />
                </label>

                </div>

                <div>

                <label>
                    Telefone/Celular
                    <input id="phone" />
                </label>

                <label>
                Telefone/Celular Alternativo
                    <input id="alternativePhone" />
                </label>

                <label>
                    Endereço Principal
                    <input id="adress" />
                </label>

                <label>
                    Endereço alternativo
                    <input id="alternativeAdress" />
                </label>

                </div>

            </form>

        </section>

        </Div>
    )
};

export default LogInSignInModal