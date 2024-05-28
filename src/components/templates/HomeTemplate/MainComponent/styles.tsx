'use client'

import styled from "styled-components"



const Div = styled.div`
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    background: transparent;
    font-size: 16px;
    font-weight: 400;


        span:nth-child(1) {
            font-size: calc(0.9 * 16px);
            color: rgba(153, 153, 153,1);
            width:  100%;
            text-align: center;
    


            a {
                
                :hover {
                    color:rgba(47,109,211,1);
                }
            }
        }
 

    section, .section {
        width: 100vw;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12px 0 12px 0;
    }

    h1 {
        font-size: 32px;
        margin: 35px 0 24px 0;
        font-weight: 800;
        color: rgba(8,8,8,0.8);
        text-align: center;
    }

    h2, .h2 {
        font-family: 'Sen', sans-serif;
        font-family: 'Proza Libre', sans-serif;
        font-size: calc(2 * var(--fontSize));                                  /*dinamic value*/
        font-weight: 600;
        margin:  0 0 24px 0;                              /*dinamic value*/
        color: rgba(45,45,45,1);
        width:  100%;

        white-space: nowrap;
        letter-spacing: -1px;
    }

    p, .p {
        font-weight: 300;
        line-height: 25px;
    }

    a {
        /* text-decoration: none; */
    }

    ul {

    }

    li {

    }

    .one {
        box-sizing: border-box;
        height: min-content;

        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            margin: 0;
            font-weight: 800;
            color: rgba(8,8,8,0.8);
            text-align: center;
        }
    }

    div:nth-child(1) {
        box-sizing: border-box;
        width: 100%;
        height: 68vh;
        display: flex;
        justify-content: center;
        overflow: hidden;
        margin: 12px 0 12px 0;
        background-color: red;

        h1 {
            margin: 35px 0 24px 0;
            font-weight: 800;
            color: rgba(8,8,8,0.8);
            text-align: center;
        }
    

        div:nth-child(1) {
            box-sizing: border-box;
            width: 70%;
            display: flex;
            align-items: center;
            text-align: center;
            flex-direction: column;
            font-size: clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);
            position: relative;
            line-height: 1.1;

            div:nth-child(1){
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                box-sizing: border-box;
                height: 50px;
                width:  min-content;
          
                position: absolute;
                gap: 8px;
     
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    height: 34px;
                    width:  34px;
                    border-radius: 500000px;
                }
   
                .item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    height: 8px;
                    width:  34px;
                    border-radius: 500000px;

                    a {
                        

                        .galery {
                            position: relative;
                            dispĺay: none;

                            img {
                                position: absolute;
                                
                            }
                        }
                    }
                }
            }

           
            }

            h2 {
                font-size: 35px;
                line-height: 1.1;
                font-family: 'Proza Libre', sans-serif;
                letter-spacing: 1px;
            }

            button {
                box-sizing: border-box;
                padding: 0 24px;
                height: 50px;
                background: black;
                align-self: center;
                color: white;
                border-radius: 5px;
                font-size: 13px;
                margin: 50px 0 24px 0;
            }


    }

    .options {
        margin: 12px 0 12px 0;
        flex-direction: column;
        width:  100%;
        background-image: url("https://img.freepik.com/premium-vector/blue-watercolor-background-design_1102-2773.jpg");
 
        h2 {
            width: min-content;
            white-space: nowrap;
            text-align: center;
            padding: 4px 24px;
            border-radius: 555px;
            background: orange;
            font-size: 30px;
            color: white;
            font-family: 'Proza Libre', sans-serif;
            letter-spacing: 1px;
        }

        > div {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            width:  100%;
            gap: 12px;

            div {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                height: 450px;
                flex-direction: column;
                height: 380px;
                width:  250px;
                gap:12px;

                div {
                    background: whitesmoke;
                    border-radius: 8px;
                }

                span {
                    text-align: center;
                }
            }
        }
    }

    section:nth-child(1) {

        div {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;

            div {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    section {
        background: white;
        position: relative;
        flex-direction: column;
        text-align: start;
        overflow: hidden;
        border: 1px solid rgba(230, 230, 230,1);
        // box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        

        span:nth-child(1) {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: min-content;
            margin: 0;

            span:nth-child(1) {
                overflow:hidden;
                flex-wrap: nowrap;
                white-space: nowrap;
                display: flex;
                align-items: center;

                h2 {
                    text-align: start;
                    height: 100%;
                    white-space: nowrap;
                    width: 80%;
                    display: flex;
                    align-items: center;
                    margin: 0;


                    span {
                        color: rgba(100,100,100,1);
                        white-space: nowrap;
                        font-size: calc(2 * 16px);
                    }
                }
            }

            a {
                height: 100%;
                color: rgba(47,109,211,1);
                white-space: nowrap;
                font-size: 14px;
                
            }
        }
      
        .btns {
            box-sizing: border-box;
            display: none;
            justify-content: space-between;
            align-items: center;
            height: 45px;
            width:  100%;
            position: absolute;
            z-index: 35;
            color: rgba(40,40,40,1);
            margin: 0;
            padding: 0;

            button {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                height: 45px;
                width:  45px;
                background: red;
                margin: 0;
                padding: 0;
                
            }
        }

        :hover {

            .btns{
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 45px;
                width:  100%;
                pointer-events: none;
                margin: 0;
                padding: 0;

                button:nth-child(1) {
                    width: 48px;
                    height: 48px;
                    box-sizing: border-box;
                    display: flex;
                    background: rgba(0,0,0,0.6);
                    align-items: center;
                    border-radius: 50000px;
                    border: 2px solid rgba(255,255,255,0.4);
                    margin: 0;
                    padding: 0;
     
                }
        
                button:nth-child(2) {
                    width: 48px;
                    height: 48px;
                    box-sizing: border-box;
                    display: flex;
                    background: rgba(0,0,0,0.6);
                    align-items: center;
                    border-radius: 50000px;
                    border: 2px solid rgba(255,255,255,0.4);
                    margin: 0;
                    padding: 0;
    
                }
            }
        }

        .flexbox {
        display: flex;
        gap: 12px;
        justify-content: flex-start;
   

            ::-webkit-scrollbar {
                background: transparent;
            }
            
            ::-webkit-scrollbar:horizontal {
                background-color: transparent;
                height: 6px;
            }

            ::-webkit-scrollbar-thumb {
                background: rgba(0,0,0,0.1);
                border-radius: 565656px;
          
            }

            :hover {

                ::-webkit-scrollbar {
                    width: 20px;
                }
            
                ::-webkit-scrollbar:horizontal {
                    background-color: transparent;
                    height: 6px;
                }
        
                ::-webkit-scrollbar-thumb {
                    background: rgba(0,0,0,0.4);
                    background-image: url("https://t4.ftcdn.net/jpg/04/71/35/53/360_F_471355337_eOdxJI5xYFtrU1Y6MoFDfWtN5gY9AeHv.jpg");

                    -webkit-animation: color-change 2s linear infinite alternate both;
	                animation: color-change 2s linear infinite alternate both;

                    @-webkit-keyframes color-change {

                        0% {
                            background-image: url("https://t4.ftcdn.net/jpg/04/71/35/53/360_F_471355337_eOdxJI5xYFtrU1Y6MoFDfWtN5gY9AeHv.jpg")
                        }

                        100% {
                            background: #b22cff;
                        }
                    }

                      @keyframes color-change {
                        
                        0% {
                            background: #19dcea;
                        }

                        100% {
                            background: #b22cff;
                        }
                    }
                }
            }
            
            .item {

                /* background: rgba(235,235,235,0); */
                display: flex;
                align-items: center;
                min-width: 232px;
                width: 232px;
                max-width:  232px;
                height: 464px;
                border: 1px solid rgba(235,235,235,1);
                flex-direction: column;

                overflow: hidden;
                border-radius: 8px;
                padding: 0;
                                         /*dinamic value*/
    
                a {
                    height: 232px;
                    width: 232px;
                    overflow: hidden;
             
     

                    :hover {
                        transform: scale(102%);
                        -webkit-animation:change-scale 1s ease 0s infinite normal;
                        -moz-animation:change-scale 1s ease 0s normal;
                        -ms-animation:change-scale 1s ease 0s normal;
                        animation:change-scale 1s ease 0s normal;

                        @-webkit-keyframes change-scale {
                            0%{ transform: scale(100%); }
                            100%{ transform: scale(102%); }
                        }
                            
                        @keyframes change-scale {
                            0%{ transform: scale(100%); }
                            100%{ transform: scale(102%); }
                        }
                    }

                    div {
                        display: flex;
                        justify-content: center;
                        overflow: hidden;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        padding:0;
                        background: #ffffff;
                     

                        img {
                       
                            width: 100%;
                         
                            /* transform: scale(300%); */
                      
                        }
                    }
                }

                /* 
                div {
                    box-sizing: border-box;
                    height: 150px;
                    width: 232px;
                    overflow: hidden;
                    background: transparent;
                    padding:6px;
                    font-size: 14px;
                    display: flex;
                    flex-direction: column;
                    color: red;
                    white-space: nowrap;
                  

                    span:nth-child(1) {
                        font-weight: 800;

                    }
                } 
                */

            }
        }

        .BtsMobileSlider {
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: min-content;
            margin: 24px 0 0 0;
            gap: 12px;

            button {
                display: flex;
                align-items: center;
                width: 36px;
                height: 42px;
                border-radius: 6px;
                border: 3px solid rgba(0,0,0,0.1);;
                outline: black;
            }
        }
    }

    .banner {
        box-sizing: border-box;
        margin: 12px 0 12px 0;                                    /*dinamic value*/
        background: transparent;
        border: none;
        box-shadow: none;

        picture { 
            background-color: red;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            width: 100%;
            height: calc( 0.20 * calc(100vw - 24px));              /*dinamic value*/
            border-radius: 12px;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }

    .category {
        margin: 12px 0 12px 0;                                /*dinamic value*/
        background-color: white;
        width: 100%;
        flex-direction: column;

        h2 {
            
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

        }

        ul {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px 24px;                                   /*dinamic value*/
            flex-wrap: wrap;

            li {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                flex-direction: column;
                display: flex;
                gap: 12px;
                width: 160px;                                  /*dinamic value*/

                picture {
                    background-color: whitesmoke;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;                         
                    width: 100%;
                    height: 160px;                            /*dinamic value*/
                    border-radius: 5465465px;
                    overflow: hidden;
                }

                span {
                    width: min-content;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
            }
        }
        
    }

    .depoiment {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        overflow: hidden;
   
        margin: 12px 0 12px 0;                                 /*dinamic value*/

        h2 {
         
            text-align: center;
            white-space: nowrap;
        }
    }

    div:nth-child(6), .details {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        overflow: hidden;   
        padding: 12px 24px;                                   /*dinamic value*/
        margin: 12px 0 12px 0;                                 /*dinamic value*/

        h2 {
        
            text-align: center;
            white-space: nowrap;
        }

        ul {
            box-sizing: border-box;
            width: 100%;
            display: flex;
            justify-content: center;
            background: transparent;
            overflow: hidden;
            gap: 24px;                                         /*dinamic value*/
            flex-wrap: wrap;

            li {
                box-sizing: border-box;
                width: 40%;

                details {
                    box-sizing: border-box;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: transparent;
                    overflow: hidden;
                    padding: 0;
                    height: min-content; 
       
                    font-family: 'Proza Libre', sans-serif;

                    summary {
                        text-align: center;
                        font-family: 'Proza Libre', sans-serif;
                        font-size: 20px;                          /*dinamic value*/
                     
                        white-space: nowrap;
                        margin: 0 0 16px 0;
                        font-weight: 400;
                    }

                    p {
                        font-family: 'Proza Libre', sans-serif;
                        font-size: 16px;
                        font-weight: 300;
                        color: rgba(45,45,45,0.9);
                        line-height: 24px;
                    }

                    summary:focus {
               
        
                    }
               
                }
            
         
            }
        }
    }

    section:nth-child(10) {
        align-items: flex-start;
        gap: 24px;
                                   

        .about {
            padding: 0;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            width: 45%;                                     /*dinamic value*/
            height: min-content;


            h2 {
                margin: 0 0 24px 0;
            }

            p {
                color: rgba(45,45,45,0.9);
                margin: 0 0 24px 0;
            }
        }

    }

    section:nth-child(11) {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        gap: 12px;

        div {
            width: 240px;
            background: blue;
            box-sizing: border-box;

 
    
  
            overflow: hidden;
            padding: 8px;
            height:120px; 
            border-radius: 5px;
        }
    }

    @media screen and (max-width: 400) and (orientation: landscape) {
     
    }

    @media screen and (max-width: 835px) {
        div:nth-child(6), .details {
            box-sizing: border-box;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: white;
            overflow: hidden;
            padding: 24px;
            margin: 8px 0 8px 0;
    
            ul {
                box-sizing: border-box;
                width: 100%;
                display: flex;
                justify-content: center;
                background: transparent;
                overflow: hidden;
                padding: 8px;
                flex-direction: column;
                
                li {
                    box-sizing: border-box;
                    width: 100%;
    
                    details {
                        box-sizing: border-box;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        background: transparent;
                        overflow: hidden;
                        padding: 8px;
                        height: min-content; 
    
                        summary {
                            text-align: start;
                            font-family: 'Proza Libre', sans-serif;
                            font-size: 28px;
                            text-weidth: 700;
                            white-space: nowrap;
                            margin: 0 0 16px 0;
                        }
    
                        summary:focus {
                   
            
                        }
                   
                    }
                }
            }
        }

        section:nth-child(10) {
            align-items: flex-start;
            gap: 24px;                                        /*dinamic value*/
            // padding: 24px;                                      /*dinamic value*/
    
    
            .about {
                margin: 0;
                padding: 0;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                width: 100%;                                     /*dinamic value*/
                height: min-content;
    
    
                h2 {
                    margin: 0 0 12px 0;
                }
    
                p {
                    color: rgba(45,45,45,0.9);
    
                }
            }
    
        }
    }


    @media screen and (max-width: 1400px) {

        section, .section {
            padding: var( --paddingVertical-breakPoint1400px) var(--paddingHorizontal-breakPoint1400px);
        }
        
    }

    @media screen and (max-width: 1080px) {
        section, .section {
            padding: var( --paddingVertical-breakPoint1080px ) var( --paddingHorizontal-breakPoint1080px);
        }
    }

    @media screen and (max-width: 800px) {

        section, .section {
            padding: var( --paddingVertical-breakPoint830px) var(--paddingHorizontal-breakPoint830px);
        }
    }

    @media screen and (max-width: 501px) {
        section, .section {
            padding: var(--paddingVertical-breakPoint490px) var(--paddingHorizontal-breakPoint490px);
        }
        
    }
`

export default Div