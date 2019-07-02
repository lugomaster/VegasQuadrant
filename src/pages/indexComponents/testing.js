import React from "react"
import styled, { keyframes } from "styled-components"


const BackgroundColor = keyframes`
1%{
    background-color: #751d1d;
}
20% {
    background-color: #21226b;  
}
40% {
    background-color: #7a7624;  
}
60% {
    background-color: #2a5b20;  
}
80% {
    background-color: #2a5b20;  
}
100% {
    background-color: black;  
}
`

const BackgroundFill = keyframes`
1%{
    fill: #db4848;
    visibility: visible;
}
20% {
    fill: #484adb;  
}
40% {
    fill: #dbd848;  
}
60% {
    fill: #3cb744;  
}
80% {
    fill: #c042d6;  
}
100% {
    fill: #db4848;  
}
`

const BackgroundStroke = keyframes`
1%{
    stroke: #db4848;
}
20% {
    stroke: #484adb;  
}
40% {
    stroke: #dbd848;  
}
60% {
    stroke: #3cb744;  
}
80% {
    stroke: #c042d6;  
}
100% {
    stroke:  #db4848;  
}
`

const VegasRect = styled.rect`
animation: ${BackgroundFill} 240s ease-in infinite;
animation-delay: 5s;
`

const VegasCirc = styled.circle`
animation: ${BackgroundStroke} 240s ease-in infinite;
animation-delay: 5s;
`

const VegasCirc2 = styled.circle`
animation: ${BackgroundFill} 240s ease-in infinite;
animation-delay: 5s;
`


const Index = styled.svg`
background-color: black;
animation: ${BackgroundColor} 240s ease-in infinite;
animation-delay: 5s;
`

export const AWebcomicByDonal = () => (
    <></>
)

export default AWebcomicByDonal;