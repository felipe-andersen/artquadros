import { ChangeEvent, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiEyeCloseFill } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
import { FiSlash, FiAlertTriangle } from "react-icons/fi";

interface translate {
    authentication: string
    password: string
    emailPlaceholder: string
    passwordPlaceholder: string
    signIn: string
    validationMsg: string //inputValidationMessage
};



type Validation = "Valid" | "Invalid" | "Alert"

function InputComponent() {

    const translates: translate[] = [
        { 
            authentication: "Autenticação", 
            password: "Password", 
            emailPlaceholder: "Entre com o email", 
            passwordPlaceholder: "Entre com a senha", 
            signIn:"Sign Up", 
            validationMsg: `
                Incorrect password.

                <br></br>

                Dicas:

                <br></br>

                <ul>
                    <li>&#9642; Use caracteres válidos (*$#@!);</li>
                    <li>&#9642; Use letras maiúsculas e minúsculas;</li>
                    <li>&#9642; Escolha uma senha forte. Mínimo 8 caracteres;</li>
                </ul>` 
        },
        { 
            authentication: "Autenticação", 
            password: "Password", 
            emailPlaceholder: "Entre com o email", 
            passwordPlaceholder: "Entre com a senha", 
            signIn:"Cadastrar", 
            validationMsg: `
                Incorrect password.

                <br></br>

                Dicas:

                <br></br>

                <ul>
                    <li>&#9642; Use caracteres válidos (*$#@!);</li>
                    <li>&#9642; Use letras maiúsculas e minúsculas;</li>
                    <li>&#9642; Escolha uma senha forte. Mínimo 8 caracteres;</li>
                </ul>` 
        },
    ];

    const content =  translates[1];
    const [visible, setVisible] = useState<boolean>(true);
    const [ inputType, setInputType ] = useState("password");
    const [valid, setValid] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<Validation>("Valid");
    const [form, setForm] = useState<string>("Log In");
    const [borderColor, setBorderColor] = useState<string>("1px solid red");
    const [boxShadow, setBoxShadow] = useState<string>("0 0 2px rgba(28, 106, 252)");
    const [ validation, setValidation ] = useState("default");
    const [display, setDisplay] = useState<Display>('none');
    const [value, setValue] = useState("");
    const require = true;

    let typeForm;

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

    function inputStatusValidation(): void {

        input!.innerHTML = `${translates[0].validationMsg}`

        if (isValid === "Valid") {
           
        }

        if (isValid === "Invalid") {
            

        }
        if (isValid === "Alert") {
            

        } else {
            throw new Error("Erro de validação de formulário.")
        }

    };

    let f = document.getElementById("inputPassword");

    // function handleFocus() {

    //     type validate = "not validated" | "valid" | 'invalid' | 'caution'

    //     let validation:validate = "valid";

    //     const border: Border = {
    //         dafault: "1px solid rgba(235, 235, 235)",
    //         valid: "1px solid rgba(28, 106, 252)",
    //         invalid: "blue",
    //         caution: "red" 
    //     };

    //     const boxShadow: BoxShadow = {
    //         dafault: "",
    //         valid: "",
    //         invalid: "",
    //         caution: ""
    //     };
    // };

    function e() {
        return "1px solid orange"
    };

    function j(): void {
        setValue('');
        setDisplay('none');
    };

    const resetButton = document.getElementById(
        'resetButton',
    ) as HTMLButtonElement | null;

    const input = document.getElementById(
        'input',
    ) as HTMLInputElement | null;
    
    if (input != null) {
        // setTimeout(  
        //     function i() {
        //         setValue(input.value)
        //     }, 3000
        // )

        // input.addEventListener('input',function () {
          
        //   } )
    };

    // setTimeout(  
    //     function i() {
    //         setValue(input!.value)
    //     }, 3000
    // )

    type Display = 'flex' | 'none';

    
    function IconValidation () {
        if (isValid === "Valid") return <span title="Valid"><BiCheck/></span>
        if (isValid === "Invalid") return <span title="Invalid"><FiSlash/></span>
        if (isValid === "Alert") return <span title="FiAlertTriangle"><FiAlertTriangle/></span>
        else return <></>
    };

    return (
        <div className="">

            <span>{content.password} {value}</span>

            <div>

                <div 
                    className={``} 
                    style={{border: `${e}`}} 
                    onClick={() => setValidation("invalid")}
                >

                    <input 
                        value={value} 
                        onChange={(e) => {setValue(e.target.value),setDisplay('flex')}}
                        placeholder={content.passwordPlaceholder} 
                        id="inputPassword input" 
                        type={inputType}
                    />
                    <div className="inputBtns">

                        <button 
                            onClick={j} 
                            id="form_btns resetButton"
                            style={{display: display}}

                        >

                            <AiFillCloseCircle/>

                        </button>

                        {
                            visible ?  //occult

                            <button 
                                onClick={() => {handleShowHidePassword(), setIsValid('Alert')}}id="form_btns" 
                                title="Hide"
                            >
                                <RiEyeCloseFill /*className="closedEye"*//>
                                
                            </button> 

                            :  

                            <button 
                                onClick={() => handleShowHidePassword()} 
                                id="form_btns" 
                                title="Show"
                            >
                                <IoIosEye /*className="openedEye"*//>

                            </button>
                        }

                    </div>

                    {
                     
                        <IconValidation/>
                      
                    }

                </div>

                <span className="validationMsg" >

                    Incorrect password.

                    <br></br>

                    Dicas:

                    <br></br>

                    <ul>
                        <li>&#9642; Use caracteres válidos (*$#@!);</li>
                        <li>&#9642; Use letras maiúsculas e minúsculas;</li>
                        <li>&#9642; Escolha uma senha forte. Mínimo 8 caracteres;</li>
                    </ul>

                </span>


            </div>

       

        </div>
    )
}

export default InputComponent

