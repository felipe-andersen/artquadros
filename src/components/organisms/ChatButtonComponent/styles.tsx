'use client'

import { styled } from "styled-components";


export const Button = styled.button`
    box-sizing: border-box;
    align-items: center;
    display: flex;
    /* flex-direction: column; */
    background: #4285f4;
    width:70px;

    position: fixed;

    height: 70px;
    top: calc(100% - 92px);
    left: calc(100% - 92px);;
    right: 12px;
    bottom: 12px;
    padding: 24px;
    border-radius: 555555px;
    // margin: calc(100% - 60px) 12px 12px 12px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    svg {
        transform: scale(240%);
        stroke:white;
        stroke-width: 1px;
    }
 

   
    


`;