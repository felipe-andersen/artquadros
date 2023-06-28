'use client'

import { styled } from "styled-components";


export const Button = styled.button`
    box-sizing: border-box;
    align-items: center;
    display: flex;
    /* flex-direction: column; */
    background: #4285f4;
    width:50px;
    justify-content: center;
    position: fixed;
    height: 50px;
    top: calc(100% - 62px);
    left: calc(100% - 62px);;
    right: 12px;
    bottom: 12px;
    padding: 15px;
    border-radius: 555555px;
    // margin: calc(100% - 60px) 12px 12px 12px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    svg {
        transform: scale(180%);
        stroke:white;
        stroke-width: 1px;
    }
`;