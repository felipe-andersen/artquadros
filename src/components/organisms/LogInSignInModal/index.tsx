'use client'
import { SchemaComponent } from "@/types";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { RiEyeCloseFill, RiEyeCloseLine } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
import 'animate.css';
import { GoX } from "react-icons/go";
import Div from "./styles";
import { ReactHTMLElement, useState } from "react";
import { ThemeProvider } from "styled-components";
import Link from "next/link";
import  InputComponent  from "@/components/molecules/input";


type Border = {
    dafault: string
    valid: string
    invalid: string
    caution: string
};

type BoxShadow = {
    dafault: string
    valid: string
    invalid: string
    caution: string
};


function LogInSignInModal(props: SchemaComponent) {

    const translates = [
        { authentication: "Autenticação", password: "Password", emailPlaceholder: "Entre com o email", passwordPlaceholder: "Entre com a senha", signIn:"Cadastrar" },
        { authentication: "Autenticação", password: "Password", emailPlaceholder: "Entre com o email", passwordPlaceholder: "Entre com a senha", signIn:"Cadastrar" },
    ];

    const content =  translates[1];

    const [ visible, setVisible ] = useState<boolean>(true);

    const [ inputType, setInputType ] = useState("password");

    const [ valid, setValid ] = useState<boolean>(false);

    const [ form, setForm ] = useState<string>("Log In");

    const [ borderColor, setBorderColor ] = useState<string>("1px solid red");

    const [ boxShadow, setBoxShadow ] = useState<string>("0 0 2px rgba(28, 106, 252)");

    const [ validation, setValidation ] = useState("default");

    const require = true;

    let typeForm ;

    function handleSubmit(e:any) {
        e.preventDefault();
        console.log('You clicked submit.');
    };
    
    function handleShowHidePassword() {

        visible ? setVisible(false) : setVisible(true);

        inputType === "password" ? setInputType("text") : setInputType("password")
    };

    function inputClear(){
        
    };

    const [value, setValue] = useState("");

    let f = document.getElementById("inputPassword");

    function handleFocus() {

        type validate = "not validated" | "valid" | 'invalid' | 'caution'

        let validation:validate = "valid";

        const border: Border = {
            dafault: "1px solid rgba(235, 235, 235)",
            valid: "1px solid rgba(28, 106, 252)",
            invalid: "blue",
            caution: "red" 
        };

        const boxShadow: BoxShadow = {
            dafault: "",
            valid: "",
            invalid: "",
            caution: ""
        };
    };

    function E() {
        return "1px solid orange"
    };

    const input = document.getElementById(
        'inputPassword',
    ) as HTMLInputElement | null;
    
    if (input != null) {

        input.addEventListener("input", () => {
            console.log("")
        })
    };

// export declare type LinkProps = {
//     href: Url;
//     as?: Url;
//     replace?: boolean;
//     scroll?: boolean;
//     shallow?: boolean;
//     passHref?: boolean;
//     prefetch?: boolean;
// }
    return (

        <Div>

        <section className="animate__animated animate__bounceInUp">

            <div className="info-close--container">
                <i title="Info"><AiOutlineInfoCircle/></i>
                <i title="Close"><GoX/></i>
            </div>

                {
                    form === "Log In" ? 

                    <div className="form--container form formLogIn animate__animated animate__fadeInLeft">

                        <span className="titleForm">

                            <h2>Log in to your account</h2>

                        </span>

                        <form onSubmit={handleSubmit}>
                            
                            <div className="input--container">

                            <InputComponent/>

                                
                                <label className="label">

                                    <span>Email</span>

                                    <div>

                                        <input 
                                            placeholder={content.emailPlaceholder} 
                                            spellCheck={false}
                                        />

                                        <div>

                                            <button><AiFillCloseCircle/></button>

                                        </div>

                                    </div>
                                    
                                </label>

                                <span className="validationMsg" >

                                    Invalid email.

                                    <br></br>

                                </span>

                               

                                
                            </div>

                            <div className="btns">

                                {/* <input className="submit" type="submit" title="Entrar"></input> */}

                                <button className="">Forgot the password
                                    {/* <span>&#8594;</span> */}
                                </button>

                                <button 
                                    className="submit" 
                                    onClick={() => borderColor === "1px solid blue" ? setBorderColor("1px solid red") : setBorderColor("1px solid blue")}
                                >

                                    {
                                        valid ? 

                                        <div>

                                            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

                                        </div> 
                            
                                        :

                                        <div>

                                            <span>Log In</span>

                                        </div> 


                                    }
                                    
                                </button>

                            </div>

                            <div className="or">

                                <span/>

                                <div>or</div>

                                <span/>
                               

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

                    <div className="form--container form formRegistry animate__animated animate__fadeInLeftBig">

                        <span className="titleForm">

                            <h2>Registry</h2>

                        </span>

                        <form onSubmit={handleSubmit} className="registryForm">

                            <div>

                                <label className="label">

                                    <span>Email&nbsp;<i className="req">*</i></span>

                                    <div className="input-ctrls--container">

                                        <input placeholder={content.emailPlaceholder}></input>

                                        <div>

                                            <span><AiFillCloseCircle/></span>

                                        </div>

                                    </div>
                                    
                                </label>

                                <label className="label">

                                    <span>{content.password}*</span>

                                    <div className="">

                                        <input placeholder={content.passwordPlaceholder} id="typepass" type={inputType}></input>

                                        <div>

                                            <button id="form_btns clearInput" title="Clear"><AiFillCloseCircle/></button>

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

                                      
                                           <span className="">Registry</span>
                                    

                                     

                                    }
                                    
                                </button>

                            </div>

                        </form>

                        <p>
                                Signing up signifies that you have read and agree to the <Link href={"#"}>Terms of Service</Link> and our  <Link href={"#"}>Privacy Policy</Link>.
                                Cookie Preferences.
                            </p>

                    </div>

                }

            <div className="formSwitch">

                {/* <button>Sign in</button> */}

                {
                    form === "Log In" ? 
                    
                    <button onClick={() => setForm("Registry")}>Registry</button>

                    :

                    <button onClick={() => setForm("Log In")}> Log In</button>

                }

            </div>

        </section>

        </Div>

    )
};

export default LogInSignInModal