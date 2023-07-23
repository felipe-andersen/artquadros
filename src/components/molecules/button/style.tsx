'use client'
import 'animate.css';
import styled from "styled-components";


export const Button = styled.button`

@import url('https://fonts.googleapis.com/css?family=Montserrat:700');

$color: black;

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
	position: fixed;
  width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: white;
}

button {
	position: relative;
	display: block;
	margin: 0 auto;
  background: $color;
  color: #fff;
  text-align: center;
  font-size: 16px;
	font-family: "Montserrat";
	font-weight: 700;
	padding: 20px 45px;
	letter-spacing: .25em;
	text-transform: uppercase;
	border: 0;
	overflow: hidden;
	border: 5px white solid;
	cursor: pointer;
	
	&:active,
	&:visited,
	&:focus {
		outline: 0;
		border: 0;
	}
}

/*  Ripple */
span {
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: scale(0);
  position: absolute;
  opacity: 1;
}
.rippleAnimation {
    animation: ripple .6s linear;
}

@keyframes ripple {
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

`
