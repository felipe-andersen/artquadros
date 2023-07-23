import { styled } from "styled-components";





export const Input = styled.div`

label, .label {
                    display: block;
                    /* flex-direction: column; */
                    /* border: 1px solid black; */
                    font-size: 13px;
                    width: 100%;
       

                    margin: 6px 0 6px 0;

                    > label:target, label:focus {
                        border: 1px solid grey;
                    }

                    span {
                        margin: 0px 0 4px 0;
                        color: rgba(80,80,80,1);
                        white-space: nowrap;

                        span {
                            margin: 0px 0 4px 0;
                            color: red;
                            font-size: 11px;
                        }
                    }

                    .valid {
                            border: 1px solid blue; 
                            box-shadow: 0 0 2px rgba(28, 106, 252); 
                        }

                        .invalid {
                            border: 1px solid red; 
                        }

                        .caution {
                            
                        }

                        .default {
                            border: 1px solid grey;
                            box-shadow: 0 0 0px rgba(28, 106, 252, 0);
                        }

                    div:nth-child(2), .input-ctrls--container {
                        display: flex;
                        border: 0px solid grey; 
                        padding: 0 3px 0 8px;
                        height: 40px;
                        border-radius: 3px;
                        background-color: rgba(253,253,253,1);
                        justify-content: space-between;
                        margin: 0 0 0 0;
                        box-sizing: border-box;
                        border: 1px solid rgba(245,245,245);
                        

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
                                display: none;
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
                            width: calc(100% - 28px);
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

`;