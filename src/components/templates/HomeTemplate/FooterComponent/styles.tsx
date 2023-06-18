"use client"
import styled from "styled-components";


export const Div = styled.div`
    box-sizing: border-box;
    width: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    background: rgba(235, 242, 255);
    overflow: hidden;
    padding: 24px;
    margin: 8px 0 0 0;
    gap: 16px;

    div:nth-child(1), .ogdp {
        display: flex;
        flex-direction: column;

        span:nth-child(1) {
            box-sizing: border-box;
            width: 100%;
            height: min-content;
            display: flex;
            flex-direction: column;
            align-items:center;
            gap: 16px;

            span {
                margin: 0;
            }
        }

        span:nth-child(2) {
            box-sizing: border-box;
            width: 100%;
            justify-content: center;
            display: flex;
            gap: 16px;
            text-align: center;
            margin: 36px 0 36px 0;
            
        }
    }

    div:nth-child(2){
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-align: center;
        align-items:center;
 

        span:nth-child(1) {
            font-weight: 600;
        }

        span:nth-child(2) {
            box-sizing: border-box;
            display: flex;
            gap: 4px;
            text-align: center;

            a {
                i {
                    svg {
                        transform: scale(50%);
                    }
                }
            }
        }
    }

    p {

    }




    @media screen and (max-width: 400) and (orientation: landscape) {
     
    }

    @media screen and (max-width: 835px)  {

        p {
            font-size: 12px;
            display: flex;
            justify-self: start;
            text-align: start;
        }
    
    }

    @media screen and (max-width: 1000) and (orientation: landscape) {
     
    }

    @media screen and (max-width: 1200) and (orientation: landscape) {
    
    }
      

font: 400 16px 'Open Sans', sans-serif;



`;

export const Title = styled.h1``