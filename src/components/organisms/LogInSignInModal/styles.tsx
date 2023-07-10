'use client'
import 'animate.css';
import styled from "styled-components";


const Div = styled.div`
box-sizing: border-box;
padding: 24px;
height: 100vh;
width: 100vw;
background-color: rgba(0, 98, 255);
display: flex;
align-items: center;
justify-content: center;
position: absolute;
font-size: 14px;
z-index: 35353553;



    section {
        dispĺay: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        background-color: rgba(255,255,255,1);
        overflow-y: scroll;
        min-width: 390px;
        max-width: 390px;
        padding: 0px 24px 36px 24px;
        animation: bounceInUp; 
        animation-duration: 2s;
        height: 87vh;
        border-radius: 3px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

        .info-close--container {
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 24px 0 24px 0;
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

        > div {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;

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

        div:nth-child(2) {
            display: flex;
            flex-direction: column;

           
    

        > span, .registryTitle {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 ;

            h2 {
                border-bottom: 3px solid black;
                font-size: 22px;
            }
        }

        .registryTitle {
            margin: 0 0 0 0;
        }

        form {
            background-color: rgba(255,255,25,0);
            width: 100%;
            margin: 24px;
       
            > div {
                background-color: rgba(240,1,25,0);

                .validationMsg {
                    display: flex;
                    font-size: 13px;
                    color: rgba(250, 94, 82);
              
             
                }

                > label, .label {
                    display: flex;
                    /* border: 1px solid black; */
                    font-size: 13px;
                    
       

                    margin: 6px 0 6px 0;

                    > label:target, label:focus {

                        border: 1px solid grey;

                    }

                    span {
                        margin: 6px 0 6px 0;
                        color: rgba(80,80,80,1);
                    }

                    > div {
                        display: flex;
                        border: 0px solid grey; 
                        padding: 0 3px 0 8px;
                        height: 40px;
                        border-radius: 3px;
                        /* background-color: rgba(240,240,240,1); */
                        justify-content: space-between;
                        margin: 0 0 0 0;
                        border: 1px solid rgba(28, 106, 252);
                        border: 1px solid rgba(200, 200, 200);
                        /* box-shadow: 0 0 2px rgba(28, 106, 252); */
                        box-sizing: border-box;

                        > div {
                            border: none;
                            box-shadow: none;
                            height: 38px;
                            display: flex;
                            align-items: center;

                            background-color: transparent;
                            margin: 0;
                            padding: 0;
                            gap: 0;
                            justify-content: right;

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
                                }
                            }
                        }

                        input {
                            display: flex;
                            outline:none;
                            padding: 0;
                            background-color: transparent;
                            width: calc(100% - 28px);
                            resize: none;

                        }
                    }
                }       
            }

            .btns {
                margin: 24px 0 48px 0;
                display: flex;

                .submit {
                    padding: 0 12px;
                    height: 35px;
                    border-radius: 3px;
                    background-color: rgba(28, 106, 252);
                    width: 50%;
                    align-items: center;
                    color: white;   
                    margin: 0;
                    justify-content: center;
                    font-weight: 700;
                    display: flex;
                    /* background: rgb(131,58,180);
                    background: -moz-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
                    background: -webkit-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
                    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#833ab4",endColorstr="#fcb045",GradientType=1); */


                    &:hover {
                        background-color: rgba(28, 106, 220, 1);
                    }

                    div {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: min-content;
                        height: 100%;

                        .lds-dual-ring {
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            border: 2px solid #fff;
                            border-color: #fff transparent #fff transparent;
                            animation: lds-dual-ring 1.2s linear infinite;
                        }

                        /* .lds-dual-ring:after {
                            content: " ";
                            display: block;
                            width: 22px;
                            height: 22px;
                            margin: 0px;
                            border-radius: 50%;
                            border: 6px solid #fff;
                            border-color: #fff transparent #fff transparent;
                            animation: lds-dual-ring 1.2s linear infinite;
                        } */

                        @keyframes lds-dual-ring {
                            0% {
                                transform: rotate(0deg);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }
                    }
                }

                button {
                    padding: 0 12px;
                    height: 40px;
                    border-radius: 5px;
                    width: 50%;
                    align-items: center;
                    background-color: transparent;
                    margin: 0;
                    justify-content: center;
                    text-align: center;
                    font-size: 13px;
                    color:rgba(28, 106, 252);
                }

                .registryBtn {
                    width: 100%;

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
                    width: 100%; 
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
                    background-color: rgba(245,245,245,1);
                    margin: 0;
                    justify-content: center;
                    gap: 6px;
                    padding: 0 12px;
                    border-radius: 3px;
                    width: min-content; 
                    height: 40px;
                    color: rgba(80,80,80,1);

                    &:hover {
                        background-color: rgba(230,230,230,1);
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

        }
        
       
    }





`;


export default Div;