'use client'

import { styled } from "styled-components";

export const Div = styled.div`
    box-sizing: border-box;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-image: url("https://t4.ftcdn.net/jpg/03/15/12/87/360_F_315128792_pYeedaWnVzdCuFiYiLQRNtHP5JT4pvWV.jpg");
    width:100%;
    max-width: 290px;
    position: fixed;
    max-height: 400px;
    max-height: 360px;
    top: calc(100% - 360px);
    left: 12px;
    right: 12px;
    bottom: 12px;
    padding: 24px;
    border-radius: 5px;
    // margin: calc(100% - 400px) 12px 12px 12px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    gap: 12px;
    font-size: 15px;

    button:nth-child(1), .close {
        width: 26px;
    position: fixed;
    height: 26px;
    align-self: flex-end;
        background-color: rgba(0, 0, 0, 0.05);

        border-radius: 555555px;
        display: flex;
        justify-content: center;

        align-items: center;
        margin: -12px;
    }

    picture {
        display: flex;
        justify-content: center;
        overflow: hidden;

        img {

            transform: scale(70%);
        }
       
    }

    span {
        text-align: center;
        margin: 0 0 12px 0;
   
    }

    button:nth-child(2), .go {
        background-color: rgba(59, 171, 53);
        padding: 8px  12px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        margin: 0 0 12px 0;
    }

`;