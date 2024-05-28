'use client'
import 'animate.css';
import styled from "styled-components";


const Div = styled.div<{$borderColor?: string, $boxShadow?: string}>`
    box-sizing: border-box;
    padding: 24px 24px;
    min-height: 100vh;
    /* width: 100vw; */ 
    background-color: rgba(0, 98, 255);
    background-image: url("https://cdn.buttercms.com/dKff0xTDQ8WonEQsLp7w");
    display: flex;
    align-items: center;
    justify-content: center;


    margin: 0;

    .k4jH9tb3oHs {
        box-sizing: border-box;
        dispĺay: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        background-color: rgba(255,255,255,1);
        /* overflow: scroll; */
        min-width: 390px;
        max-width: 450px;
        width: 100%;
        padding: 36px ;
        animation: bounceInUp; 
        animation-duration: 2s;
        /* height: 87vh; */
        border-radius: 3px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

        .ar8Edw4Fvka {
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
    }

.loader {
    margin: 0 25px 0 0;
  color: #000;
  width: 4px;
  height: 4px;
  /* aspect-ratio: 1; */
  border-radius: 50000px;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: l21 .5s infinite alternate linear;
  transform: scale(40%);
}

@keyframes l21 {
  50%  {box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px}
  100% {box-shadow: 19px 0 0 0  , 38px 0 0 3px, 57px 0 0 7px}
}

    
`;





export default Div;