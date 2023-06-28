'use client'

import { styled } from "styled-components";

export const Div = styled.div`
    box-sizing: border-box;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-image: url("https://t4.ftcdn.net/jpg/03/15/12/87/360_F_315128792_pYeedaWnVzdCuFiYiLQRNtHP5JT4pvWV.jpg");
    background: rgb(48, 19, 1);
    width:250px;
    position: fixed;
    height: 400px;
    top: calc(100% - 412px);
    left: 12px;
    right: 12px;
    bottom: 12px;
    padding: 24px;
    border-radius: 5px;
    // margin: calc(100% - 400px) 12px 12px 12px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    gap: 12px;
    font-size: 15px;
    color: white;

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

        svg {
            opacity: 0.2;
        }
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
        background-color: rgba(252, 132, 3);
        border-radius: 3px;
        color: white;
        font-weight: 600;
        margin: 0 0 0px 0;
        border-bottom: 3px solid rgba(252, 98, 3);
        width: min-content;
        white-space: nowrap;
        padding: 5px 16px;
    }

    button:nth-child(2), .accept {
        background-color: rgba(252, 132, 3);
        border-radius: 3px;
        color: white;
        font-weight: 600;
        margin: 0 0 0px 0;
        border-bottom: 3px solid rgba(252, 98, 3);
        min-width: 170px;
        white-space: nowrap;
        padding: 5px 16px;
    }

    .reject {
        background-color: rgba(252, 132, 3, 0);
        border-radius: 3px;
        color: white;
        font-weight: 600;
        margin: 0 0 0px 0;
        border-bottom: 3px solid rgba(252, 98, 3, 0);
        min-width: 170px;
        white-space: nowrap;
        padding: 5px 16px;
        border: 1px dotted white;
    }
`;