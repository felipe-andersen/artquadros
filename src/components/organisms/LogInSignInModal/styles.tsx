'use client'
import 'animate.css';
import styled from "styled-components";


const Div = styled.div<{$borderColor?: string, $boxShadow?: string}>`
box-sizing: border-box;
padding: 24px;
height: 100vh;
width: 100vw;
background-color: rgba(0, 98, 255);
background-image: url("https://cdn.buttercms.com/dKff0xTDQ8WonEQsLp7w");
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
z-index: 5555555555555;
opacity: 1;

    section {
        box-sizing: border-box;
        dispĺay: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        background-color: rgba(255,255,255,1);
        overflow-y: scroll;
        min-width: 390px;
        max-width: 390px;
        padding: 12px 24px 36px 24px;
        animation: bounceInUp; 
        animation-duration: 2s;
        height: 87vh;
        border-radius: 3px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

        div:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 0 24px 0;
            background-color: rgba(248,248,248,0);
            width:100%;

            i:nth-child(1) {
                margin: 0;
            }

            i:nth-child(2) {
                margin: 0;
                background-color: rgba(248,248,248,1);
            }

            i {
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                background-color: rgba(240,240,240,0);
                justify-content: center;
                border-radius: 2555555px;

                &:hover {
                    background-color: rgba(240,240,240,1);
                }
            }
        }

        .formSwitch{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 24px;
            top: calc(100% - 40px - 24px);

            button {
                height: 40px;
                width: 50%;
                background-color: rgba(245,245,245,1);
                border-radius: 5px;
                font-size: 13px;
                font-weight: 700;

                &:hover {
                    background-color: rgba(238,238,238,1);
                }
            }
        } 

        .form--container, .form {
            display: flex;
            flex-direction: column;
            margin: 0 ;
            padding: 0;
           
        span:nth-child(1), .titleForm {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 24px 0;
            width: min-content;
            align-self: center;
          

            h2 {
                color: rgba(80,80,80,1);
                border-bottom: 2.5px solid rgba(80,80,80,1);
                font-size: 22px;
            }
        }

        .registryTitle {
            margin: 0 0 0 0;
        }

        form {
            background-color: rgba(255,255,25,0);
            width: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;
            height: min-content;
            div:nth-child(1) {
            display: flex;
            flex-direction: column;
            background-color: rgba(240,1,25,0);

                .validationMsg {
                    display: inline-block;
                    font-size: 13px;
                    color: rgba(250, 94, 82);
                    width: 100%;
                }

                > label, .label {
                    display: block;
                    /* flex-direction: column; */
                    /* border: 1px solid black; */
                    font-size: 13px;
                    width: 100%;
                    margin: 6px 0 6px 0;

                    span {
                        margin: 0px 0 4px 0;
                        color: rgba(80,80,80,1);
                        white-space: nowrap;

                        i, i:hover {
                            background-color: none;

                            margin: 0px 0 4px 0;
                            color: red;
                            font-size: 11px;
                        }
                    }

                    // .valid {
                    //         border: 1px solid blue; 
                    //         box-shadow: 0 0 2px rgba(28, 106, 252); 
                    //     }

                    //     .invalid {
                    //         border: 1px solid red; 
                    //     }

                    //     .caution {
                            
                    //     }

                    //     .default {
                    //         border: 1px solid grey;
                    //         box-shadow: 0 0 0px rgba(28, 106, 252, 0);
                    //     }

                    div{
              

                        div, div:nth-child(2), .input-ctrls--container {
                            display: flex;
                            border: 0px solid grey; 
                            padding: 0 3px 0 8px;
                            height: 40px;
                            border-radius: 3px;
                            // background-color: rgba(253,253,253,1);
                            justify-content: space-between;
                            margin: 0 0 0 0;
                            box-sizing: border-box;
                            border: 1px solid rgba(245,245,245);
                            //box-shadow: ${props => props.$boxShadow};
    
                            &:hover {
                                border: 1px solid rgba(235,235,235);
    
                                > div {
                                    border: none;
                                }
                            }
    
                            > div {
                                border: none;
                                box-shadow: none;
                                height: 38px;
                                align-items: center;
                                display: flex;
                                background-color: transparent;
                                margin: 0;
                                padding: 0;
                                gap: 0;
                                justify-content: right;
                                width: min-content;
    
                                button {
                                    box-sizing: border-box;
                                    width: 28px;
                                    height: 28px;
                                    padding: 0;
                                    display: flex;
                                    align-items: center;
                                    background-color: rgba(240,240,240, 0);
                                    margin: 0;
                                    justify-content: center;
                                    border-radius: 2555555px;
    
                                    svg {
                                        fill: rgba(80,80,80,1);;
                                        transform: scale(100%);
                                    }
    
                                    &:hover {
                                        background-color: rgba(220,220,220);
                                        border: none;
                                    }
                                }
                            }
    
                            input {
                                display: flex;
                                outline:none;
                                padding: 0;
                                background-color: transparent;
                                width: 50px;
                                resize: none;
                                
    
                                &::placeholder {
                                    color: rgba(150,150,150);
                                }
    
                                &:focus::placeholder {
                                    color: rgba(200,200,200);
                                }
                            }
                        }

                    }

                   
                }       
            }

            .btns {
                margin: 24px 0 48px 0;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .submit {
                    display: flex;
                    padding: 0 12px;
                    height: 40px;
                    border-radius: 3px;
                    background-color: rgba(28, 106, 252);
                    width: 48%;
                    align-items: center;
                    color: white;   
                    margin: 0;
                    justify-content: center;
                    font-weight: 700;
                    white-space: nowrap;
                    text-align: center;
                    /* background: rgb(131,58,180);
                    background: -moz-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
                    background: -webkit-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
                    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#833ab4",endColorstr="#fcb045",GradientType=1); */
                    outline: black;

                    &:hover {
                        background-color: rgba(28, 106, 220, 1);
                    }

                   
                }

                button {
                    display: flex;
                    padding: 0 12px;
                    height: 40px;
                    border-radius: 5px;
                    width: 48%;
                    align-items: center;
                    background-color: transparent;
                    margin: 0;
                    justify-content: center;
                    text-align: center;
                    font-size: 12px;
                    color:rgba(28, 106, 252);

                    div {
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        width: 100%;
                        margin: 0;

                        .lds-ellipsis {
                            display: inline-block;
                            position: relative;
                            width: 80px;
                            height: 80px;
                            transform: scale(50%);
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            background: transparent;
                        }

                          .lds-ellipsis div {
                            position: absolute;
                       
                            width: 13px;
                            height: 13px;
                            border-radius: 50%;
                            background: #fff;
                            animation-timing-function: cubic-bezier(0, 1, 1, 0);
                          }
                          .lds-ellipsis div:nth-child(1) {
                            left: 8px;
                            animation: lds-ellipsis1 0.4s infinite;
                          }
                          .lds-ellipsis div:nth-child(2) {
                            left: 8px;
                            animation: lds-ellipsis2 0.4s infinite;
                          }
                          .lds-ellipsis div:nth-child(3) {
                            left: 32px;
                            animation: lds-ellipsis2 0.4s infinite;
                          }
                          .lds-ellipsis div:nth-child(4) {
                            left: 56px;
                            animation: lds-ellipsis3 0.4s infinite;
                          }
                          @keyframes lds-ellipsis1 {
                            0% {
                              transform: scale(0);
                            }
                            100% {
                              transform: scale(1);
                            }
                          }
                          @keyframes lds-ellipsis3 {
                            0% {
                              transform: scale(1);
                            }
                            100% {
                              transform: scale(0);
                            }
                          }
                          @keyframes lds-ellipsis2 {
                            0% {
                              transform: translate(0, 0);
                            }
                            100% {
                              transform: translate(24px, 0);
                            }
                          }

                        span {
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            height: 100%;
                            width: 100%;
                            margin: 0;
                        }
                    }
                 

                    &:active {

                      

                    }
                }

                .registryBtn {
                    width: 100%;
                    margin: 0;
                    text-align: center;

                    span {
                        margin: 0;
                    }
                }
            }

            .or {
                display: flex;
                align-items: center;
                background-color: transparent;
                margin: -24px 0 0 0;
                justify-content: center;
                gap: 6px;

                span {
                    margin: 0;
                    width: 45%; 
                    height: 1px;
                    background-color: rgba(235,235,235,1);
                }
            }

            .socialAuth {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap:6px;
                margin: 6px 0;
                font-size: 13px;

                button {
                    display: flex;
                    align-items: center;
                    background-color: rgba(245,245,245,0);
                    margin: 0;
                    justify-content: center;
                    gap: 6px;
                    padding: 0 12px;
                    border-radius: 3px;
                    width: 100%; 
                    height: 40px;
                    color: rgba(80,80,80,1);
                    outline: 1px;
                    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.1);
                    border: 1px solid rgba(245,245,245,1);

                    &:hover {
                        background-color: rgba(245,245,245,1);
                    }

                    span {
                        color: rgba(80,80,80,1);
                    }

                    i {
                        svg {
                            width: 22px; 
                        
                        }
                    } 
                }

            }
        }

        p {
            font-size: 13px;
            line-height: 1.6;
        }
        
        }
        }
    }
`;





export default Div;