'use client'

import styled from "styled-components"

const Div = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap');
    <style>
    @import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');

    width: 100%;
    height: 114px;
    box-sizing: border-box;
    display: flex;
    border-bottom: none; //1px solid whitesmoke;
    font-size: 16px;
    background: white;
    color: black;
    margin: 0 0 12px 0;
    padding: 8px 24px 8px 24px;
   
    flex-direction: column;

    div:nth-child(1) {
        box-sizing: border-box;
        display: flex;
        height: 46px;
        justify-content: space-around;
        align-items: center;
        background: orange;
        width: 100%;
        position: relative;
       
        .size {
            display: none;
            box-sizing: border-box;
            padding: 0 24px;
            height: 50px;
            background: rgba(40, 40, 40);
            align-self: center;
            color: white;
            border-radius: 5px;
            font-size: 13px;
            margin: 0px 24px 0px 24px;
            white-space: nowrap;
        }

        form {
            width: 100%;
            box-sizing: border-box;
            height: 46px;
            display: flex;
            align-items: center;
            border-radius: 5px;
            border: 1px solid rgba(235, 235, 235, 1);
            background: rgba(246,246,246,0.5);
    
            justify-content: space-around;
            position: absolute;
            margin: 100px 0 0 0;
    
    
            i {
                background: blue;
                border-radius: 5px;
                height: 46px;
                width: 46px;
                overflow: hidden;
    
                svg {
                        transform: scale(70%);
                        fill: grey;
                }
            }
    
            input {
                height: 100%;
                background: red; 
                outline: transparent;
                width: 85%;
            }
        }

        .container-cart {
            gap: 12px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            white-space: nowrap;
            background: transparent;

            button {
                svg {
                    transform: scale(46%);
                }
            }
        }

        div:nth-child(3) {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: transparent;
        }

        i {
        
        }
    }

    form {
        width: 100%;
        box-sizing: border-box;
        height: 46px;
        display: none;
        align-items: center;
        border-radius: 5px;
        border: 1px solid rgba(235, 235, 235, 1);
        background: rgba(246,246,246,0.5);
        margin: 8px 0 0 0;
        justify-content: space-around;


        i {
            background: blue;
            border-radius: 5px;
            height: 46px;
            width: 46px;
            overflow: hidden;

            svg {
                    transform: scale(70%);
                    fill: grey;
            }
        }

        input {
            height: 100%;
            background: red; 
            outline: transparent;
            width: 85%;
        }
    }

    div:nth-child(3) {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        padding: 0 24px;
        border-top: 1px solid rgba(235, 235, 235, 1);
        border-bottom: 1px solid rgba(235, 235, 235, 1);

        a {
            dispĺay: flex;
            justify-content: center;
            align-items: center;
            height: calc(100% - 4px);
            background: rgba(235, 235, 235, 1);
            border-radius: 5px;
            padding: 0 8px;

            :hover {

                span {
                    display: flex;
                    width:  150px;
                    height: 150px;
                    background: white;
                    position: absolute;
                    border-radius: 12px;
                }
            }

            span {
                display: flex;
            }
        }
    }
`

export default Div