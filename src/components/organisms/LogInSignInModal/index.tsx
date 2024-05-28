'use client'
import { SchemaComponent } from "@/@types";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { RiEyeCloseFill, RiEyeCloseLine } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
import 'animate.css';
import { GoX } from "react-icons/go";
import Div from "./styles";
import React, { ReactHTMLElement, useState } from "react";
import { ThemeProvider } from "styled-components";
import Link from "next/link";
import  InputComponent  from "@/components/molecules/input";
import { CiCircleAlert } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCheck } from "react-icons/fa";

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

type FormData = {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
}


function LogInSignInModal(props: SchemaComponent) {

    const translates = [
        { authentication: "Autenticação", password: "Password", emailPlaceholder: "Entre com o email", passwordPlaceholder: "Entre com a senha", signIn:"Cadastrar" },
        { authentication: "Autenticação", password: "Password", emailPlaceholder: "Entre com o email", passwordPlaceholder: "Entre com a senha", signIn:"Cadastrar" },
    ];

    const content =  translates[1];

    const [ visible, setVisible ] = useState<boolean>(true);

    const [ inputType, setInputType ] = useState("password");

    const [ valid, setValid ] = useState<boolean>(false);

    const [ form, setForm ] = useState<FormType>("Log In");

    const [ borderColor, setBorderColor ] = useState<string>("1px solid red");

    const [ boxShadow, setBoxShadow ] = useState<string>("0 0 2px rgba(28, 106, 252)");

    const [ validation, setValidation ] = useState("default");

    const require = true;

    let typeForm ;

    function handleSubmit_(e:any) {
        e.preventDefault();
        console.log('You clicked submit.');
    };
    
    function handleShowHidePassword() {

        visible ? setVisible(false) : setVisible(true);

        inputType === "password" ? setInputType("text") : setInputType("password")
    };

    function inputClear(){
        
    };

    // const LogInformSchema = z.object({
    //     name: z.string().min(1, { message: 'Campo necessário.' }).max(30),
    //     email: z.string().email({message:"Digite um email válido. Ex.: jonh@emailprovider.com"}).min(1, { message: 'Campo necessário.' }).max(50, {message: "É permitido no máximo 50 caracteres."}),
    //     password: z.string().max(30, {message: "É permitido no máximo 50 caracteres."}),
    //     confirmPassword: z.string().min(1, { message: '.Campo necessário' }).max(250)
    // });

    // const {register, formState, handleSubmit,watch, getFieldState, setFocus} = useForm<FormData>({resolver: zodResolver(LogInformSchema),criteriaMode: 'all',
    // mode: 'all', defaultValues: {
    //   name: `` ,
    //   email: `` ,
    //   password: `` ,
    // } });

    const formSchema = z.object({
        name: z.string().min(1, { message: 'Campo necessário.' }).max(30),
        email: z.string().email({message:"Digite um email válido. Ex.: jonh@emailprovider.com"}).min(1, { message: 'Campo necessário.' }).max(50, {message: "É permitido no máximo 50 caracteres."}),
        password: z.string().max(30, {message: "É permitido no máximo 50 caracteres."}),
        confirmPassword: z.string().min(1, { message: '.Campo necessário' }).max(250)
    });

    const {register, formState, handleSubmit,watch, getFieldState, setFocus} = useForm<FormData>({resolver: zodResolver(formSchema),criteriaMode: 'all',
    mode: 'all', defaultValues: {
      name: `` ,
      email: `` ,
      password: `` ,
    } });

    const watchEmail = watch("email");

    React.useEffect(() => {
        setFocus("email")
    }, [setFocus])


    
    const onChange = getFieldState("email", formState).isTouched

    function _onChange() {

        if (onChange) {
            return
            !onChange && "validando"
        } 

    }

    
    const logInForm = (

    <form method="post" onError={() => {}} action={() => {}} onSubmit={handleSubmit_} className="animate__animated animate__fadeInLeft">

            <div className="ar8Edw4Fvka">
                <i title="Info"><AiOutlineInfoCircle/></i>
                <i title="Close"><GoX/></i>
            </div>

            <h1>Bem vindo!<br/>Faça login</h1>

            <div className="flex flex-column my-2 w-full ">

                <span className="flex items-center w-full justify-between">

                    <label className="h-10 w-full flex  items-center">Email
                    </label>

                    {   
                        formState.errors.email! &&  

                        <span className="flex items-center text-sm text-red-500">
                            <CiCircleAlert className="mr-1"/> Inválido
                        </span>
                    }

                </span> 

                <div className="h-10 border border-sky-500 rounded-2 p-0.5">

                    <input {...register("email", {required: true})} placeholder="Digite seu email" className="px-2 w-full h-full rounded-2 outline-transparent"  />

                </div>

                {

                    formState.errors.email! &&  

                    <span className={`w-full my-2 flex justify-center flex-col px-2 text-sm text-red-500`}>
                    
                        <span className="">{formState.errors.email?.message}</span>

                    </span>

                }

            {/* <p>{getFieldState("email").isTouched ? "dirty" : "lklfd"}</p> */}
                
          
            </div>

            <div className="flex flex-column my-2 w-full">

                <span className="flex items-center w-full justify-between">

                    <label className="h-10 w-full flex  items-center">Password
                    </label>

                    {   
                        formState.errors.password! &&  

                        <span className="flex items-center text-sm text-red-500">
                            <CiCircleAlert className="mr-1"/> Inválido
                        </span>
                    }

                    {/* <span className="loader"></span> */}

                </span> 

                <div>

                    <input {...register("password", {required: true})}placeholder="Digite sua senha" className="px-2 h-10 w-full border rounded-2" type="text" />

                </div>

                {

formState.errors.password! &&  

                    <span className={`w-full my-2 flex justify-center flex-col px-2 text-sm text-red-500`}>
                    
                        <span className="">{formState.errors.password?.message}</span>

                    </span>

                }

            </div>
            
            <button /*aria-disabled="true"*/  className=" disabled:opacity-20 flex justify-center items-center w-full h-10  text-white bg-blue-600 rounded-4 font-semibold hover:bg-blue-500 my-6 " disabled={!formState.isDirty || !formState.isValid} type="submit">Entrar
                <span className="loader text-white"></span>
            </button>

            <button onFocus={() => setForm("Redefine")} className="text-blue-600 self-end">Esqueceu a senha</button>


            <div className="flex  justify-center w-full justify-between mb-4 ">

                <button className=" flex justify-center items-center w-full h-10  text-zinc-900 border bg-white-600 hover:bg-zinc-200 rounded-4 font-semibold  " type="submit">Google</button>

                <button className=" mx-2 flex justify-center items-center w-full h-10  text-zinc-900 border bg-white-600 hover:bg-zinc-200 rounded-4 font-semibold  " type="submit">Facebook</button>

                <button className=" flex justify-center items-center w-full h-10  text-zinc-900 border bg-white-600 hover:bg-zinc-200 rounded-4 font-semibold  " type="submit">Apple</button>
            
            </div>
            
            <p>
                Signing up signifies that you have read and agree to the <Link href={"#"}>Terms of Service</Link> and our  <Link href={"#"}>Privacy Policy</Link>.
                Cookie Preferences.
            </p>

            <button onFocus={() => setForm("Sign In")} className={`flex justify-center items-center px-6 h-10  text-white bg-zinc-900 rounded-4 font-semibold hover:bg-zinc-800 my-6`}>{"Sign In"}</button>

        </form>
    )

    const signInForm = (

        <form onSubmit={handleSubmit_} className="animate__animated animate__fadeInLeft">

            <div className="ar8Edw4Fvka">
                <i title="Info"><AiOutlineInfoCircle/></i>
                <i title="Close"><GoX/></i>
            </div>

            <h1>Bem vindo!<br/>Crie uma conta</h1>

            <div className="flex flex-column my-2 w-full ">
                <label className="h-10 w-full flex  items-center">Nome</label>
                <div></div>
                <input placeholder="Seu nome" className="px-2 h-10 w-full border rounded-2 border-solid border-blue-900" type="text"></input>
                <span className=" w-full my-2 flex justify-center flex-col px-2 text-sm text-red-500 ">
                    <span className="flex items-center">
                        <CiCircleAlert className="mr-1"/> Inválido
                    </span>
                
                    <span className="mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                </span>
                <span className="h-7 w-full my-2 flex items-center px-2 text-sm text-green-500"><CiCircleAlert className="mr-1" />Válido</span>
                <span className="h-7 w-full my-2 flex items-center px-2 text-sm text-orange-500"><CiCircleAlert className="mr-1"/>Atenção</span>
            </div>

            <div className="flex flex-column my-2 w-full ">
                <label className="h-10 w-full flex  items-center">Email</label>
                <input placeholder="Digite seu email" className="px-2 h-10 w-full border rounded-2" type="text"></input>
                <span></span>
            </div>

            <div className="flex flex-column my-2 w-full">
                <label className="h-10 w-full flex  items-center ">Senha</label>
                <input placeholder="Digite sua senha" className="px-2 h-10 w-full border rounded-2" type="password"></input>
                <span></span>
            </div>

            <div className="flex flex-column my-2 w-full">
                <label className="h-10 w-full flex  items-center">Confirme a senha</label>
                <input placeholder="Repita a senha" className="px-2 h-10 w-full border rounded-2 focus:border-blue-500" type="password"></input>
                <span></span>
            </div>

            <button className=" flex justify-center items-center w-full h-10  text-white bg-blue-600 rounded-4 font-semibold hover:bg-blue-500 my-6 " type="submit">CRIAR UMA CONTA</button>

            <div className=" w-full h-px bg-zinc-100 my-4"></div>


            <div className="flex  justify-center w-full justify-between mb-4 ">

                <button className=" flex justify-center items-center w-full h-10  text-zinc-900 border bg-white-600 hover:bg-zinc-200 rounded-4 font-semibold  " type="submit">Google</button>

                <button className=" mx-2 flex justify-center items-center w-full h-10  text-zinc-900 border bg-white-600 hover:bg-zinc-200 rounded-4 font-semibold  " type="submit">Facebook</button>

                <button className=" flex justify-center items-center w-full h-10  text-zinc-900 border bg-white-600 hover:bg-zinc-200 rounded-4 font-semibold  " type="submit">Apple</button>
            
            </div>
            
            <p>
                Signing up signifies that you have read and agree to the <Link href={"#"}>Terms of Service</Link> and our  <Link href={"#"}>Privacy Policy</Link>.
                Cookie Preferences.
            </p>

            <button onFocus={() => setForm("Log In")} className={`flex justify-center items-center px-6 h-10  text-white bg-zinc-900 rounded-4 font-semibold hover:bg-zinc-800 my-6`}>{"Log In"}</button>

        </form>
    )

    const redefineForm = (

        <form onSubmit={handleSubmit_} className="w-full mt-4 animate__animated animate__fadeInLeft">

            <button onFocus={ ()=> setForm("Log In") } className="flex justify-center items-center w-7 h-7 rounded-full bg-zinc-900 mb-3 ">
                <FaArrowLeft className="fill-white"/>
            </button>

            <h3>Redefinição de senha</h3>

            <div className="flex flex-column my-2 w-full ">

                <label className="h-10 w-full flex  items-center">Insira um email cadastrado</label>
                <div className="h-10 border border-blue-500 rounded-2  shadow-[0px_0px_4px_4px_rgba(3,48,252,0.1)] ">

                    <input placeholder="Seu email" className="px-2  w-full h-full rounded-2 " type="text"></input>
                    
                </div>
                    
            </div>

            <button onFocus={() => {
                setForm("Log In")
                response()
                
            }} className={`flex justify-center items-center px-6 h-10  text-white bg-zinc-900 rounded-4 font-semibold hover:bg-zinc-800 my-6`}>{"Enviar"}</button>
    
        </form>
    )

    function response() {
        setForm("Response")
    }

    const createPassword = (
        <form onSubmit={handleSubmit_} className="w-full mt-4">

            <h3>Nova senha</h3>

            <div className="flex flex-column my-2 w-full ">

                <label className="h-10 w-full flex  items-center">Senha</label>
                <div className="h-10 border border-sky-500 rounded-2">
                    <input placeholder="Digite sua senha" className="px-2  w-full h-full rounded-2" type="text"></input>
                </div>
                    
            </div>

            <div className="flex flex-column my-2 w-full ">

                <label className="h-10 w-full flex  items-center">Confirme a senha</label>
                <div className="h-10 border border-sky-500 rounded-2">
                    <input placeholder="Confirme sua senha" className="px-2  w-full h-full rounded-2" type="text"></input>
                </div>
                    
            </div>
            
        </form> 
    )

    const responseComponent = (
        <>
            <h3>Envio de email</h3>

            <p>O link para a redefinição de senha foi enviado por email.</p>

            <button onFocus={() => setForm("Log In")} className={`flex justify-center items-center px-6 h-10  text-white bg-zinc-900 rounded-4 font-semibold hover:bg-zinc-800 my-6`}>{"Log In"}</button>
                        
        </>
    )

    type FormType = "Log In" | "Sign In" | "Redefine" | "Create Password" | "Response"

    function formHandle(formType:FormType) {

        if (formType === "Log In") {
            return logInForm;
        } else if (formType === "Sign In") {
            return signInForm
        } else if (formType === "Redefine") {
            return redefineForm
        } else if (formType === "Create Password") {
        return createPassword 
        } else if (formType === "Response") {
            return responseComponent
        }
    }
    
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

            <main className=" flex rounded-1 flex-col border-box min-w-97.5 max-w-97.5">
        
                <section className="k4jH9tb3oHs  overflow-auto">
                    
                    {
                        formHandle(form)
                        
                    }

                </section>

            </main>

        </Div>

    )
};

export default LogInSignInModal

