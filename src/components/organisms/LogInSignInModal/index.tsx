'use client'
import { SchemaComponent } from "@/types";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { RiEyeCloseFill, RiEyeCloseLine } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import 'animate.css';
import { GoX } from "react-icons/go";
import Div from "./styles";
import { useState } from "react";


function LogInSignInModal(props: SchemaComponent) {

    const translates = [
        { authentication: "Autenticação", password: "Password", emailPlaceholder: "Entre com o email", passwordPlaceholder: "Entre com a senha", signIn:"Cadastrar" },
        { authentication: "Autenticação", password: "Password", emailPlaceholder: "Entre com o email", passwordPlaceholder: "Entre com a senha", signIn:"Cadastrar" },
    ];

    const content =  translates[1];

    const [visible, setVisible] = useState<boolean>(true);

    const [valid, setValid] = useState<boolean>(false);

    const [form, setForm] = useState<string>("Log In")

    let typeForm 

    function handleSubmit(e:any) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    
    function prenvent ( ) {

        visible ? setVisible(false) : setVisible(true)
    }

    return (

        <Div>

        <section className="animate__animated animate__bounceInUp">


            <div className="info-close--container">
                <i title="Info"><AiOutlineInfoCircle/></i>
                <i title="Close"><GoX/></i>
            </div>

            

                {
                    form === "Log In" ? 

                    <div>

                        <span className="registryTitle">

                            <h2>Log in to your account</h2>

                        </span>

                        <form onSubmit={handleSubmit}>
                            
                            <div>

                                <label className="label" style={{display:"flex", flexDirection: "column"}}>

                                    <span>Email</span>

                                    <div>

                                        <input placeholder={content.emailPlaceholder}></input>

                                        <div>

                                            <button><AiFillCloseCircle/></button>

                                        </div>

                                    </div>
                                    
                                </label>

                                <label className="label" style={{display:"flex", flexDirection: "column"}}>

                                    <span>{content.password}</span>

                                    <div>

                                        <input placeholder={content.passwordPlaceholder}></input>

                                        <div>

                                            <button onClick={() => prenvent} id="form_btns"><AiFillCloseCircle/></button>

                                            {
                                                visible ?  

                                                <button onClick={() => visible ? setVisible(false) : setVisible(true)} id="form_btns" title="Hide">
                                                    <RiEyeCloseFill/>
                                                </button> 

                                                :  

                                                <button onClick={() => visible ? setVisible(false) : setVisible(true)} id="form_btns" title="Show">
                                                    <IoIosEye/>
                                                </button>
                                            }

                                        </div>

                                    </div>
                                    
                                </label>

                                <span className="validationMsg" >

                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, veritatis. Id voluptatem animi ea aut doloremque nesciunt, debitis cum eligendi. Ad obcaecati tenetur expedita. Est itaque sunt pariatur voluptatum suscipit.
                                        
                                        
                                </span>

                            </div>

                            <div className="btns">

                                {/* <input className="submit" type="submit" title="Entrar"></input> */}

                                <button className="">Forgot the password</button>

                                <button className="submit">

                                    {
                                        valid ? 

                                        <div>
                                            <span className="lds-dual-ring"/>
                                        </div> 
                                        
                                        :

                                        <span>Log in</span>

                                    }
                                    
                                </button>

                            </div>

                            <div className="or">

                                <span/><div>or</div> <span/>

                            </div>

                            <div className="socialAuth">

                                <button>

                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg>
                                    </i>

                                    <span>Facebook</span>
                                    
                                </button>

                                <button>

                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg>
                                    </i>

                                    <span>Google</span>
                                    
                                </button>

                                <button>

                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg>
                                    </i>

                                    <span>Aplle</span>
                                    
                                </button>

                            </div>
                
                        </form>

                    </div>

                    :

                    <div>

                        <span className="registryTitle">

                            <h2>Registry</h2>

                        </span>

                        <form onSubmit={handleSubmit} className="registryForm">

                            <div>

                                <label className="label" style={{display:"flex", flexDirection: "column"}}>

                                    <span>Email</span>

                                    <div>

                                        <input placeholder={content.emailPlaceholder}></input>

                                        <div>

                                            <span><AiFillCloseCircle/></span>

                                        </div>

                                    </div>
                                    
                                </label>

                                <label className="label" style={{display:"flex", flexDirection: "column"}}>

                                    <span>{content.password}</span>

                                    <div>

                                        <input placeholder={content.passwordPlaceholder}></input>

                                        <div>

                                            <button onClick={() => prenvent} id="form_btns"><AiFillCloseCircle/></button>

                                            {
                                                visible ?  

                                                <button onClick={() => visible ? setVisible(false) : setVisible(true)} id="form_btns" title="Hide">
                                                    <RiEyeCloseFill/>
                                                </button> 

                                                :  

                                                <button onClick={() => visible ? setVisible(false) : setVisible(true)} id="form_btns" title="Show">
                                                    <IoIosEye/>
                                                </button>
                                            }

                                        </div>

                                    </div>
                                    
                                </label>

                                <span className="validationMsg" >

                                    {/* <strong>Invalid. </strong> */}
                                        
                                        
                                </span>

                                <label>
                                    Name
                                    <input id="name" type="text" placeholder="Name"/>

                                </label>

                                <label>
                                    Email
                                    <input id="email" type="email" placeholder="Email"/>

                                </label>

                                <label>
                                    Senha
                                    <input type="number" id="senha" />

                                </label>

                                <label>
                                    Repetir senha
                                    <input id="repeatSenha" />

                                </label>

                                </div>

                                <div>

                                <label>
                                    Telefone/Celular
                                    <input type="number" id="phone" />

                                </label>

                                <label>
                                Telefone/Celular Alternativo
                                    <input type="number" id="alternativePhone" />

                                </label>

                                <label>
                                    Endereço Principal
                                    <input type="text" id="adress" />

                                </label>

                                <label>
                                    Endereço alternativo
                                    <input type="text" id="alternativeAdress" />

                                </label>

                            </div>

                            <div className="btns">

                                {/* <input className="submit" type="submit" title="Entrar"></input> */}

                                <button className="submit registryBtn">

                                    {
                                        valid ? 

                                        <div>
                                            <span className="lds-dual-ring"/>
                                        </div> 
                                        
                                        :

                                        <span>Registry</span>

                                    }
                                    
                                </button>

                            </div>

                        </form>

                    </div>

                }

        


            <div>

                {/* <button>Sign in</button> */}

                {
                    form === "Log In" ? 
                    
                    <button onClick={() => setForm("Registry")}>Log In</button>

                    :

                    <button onClick={() => setForm("Log In")}>Registry</button>

                }

            </div>

        </section>

        </Div>
    )
};

export default LogInSignInModal