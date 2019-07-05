import React from "react"
import styled, { keyframes } from "styled-components"
import logo from "./menuImages/logo.png"
import { Tween } from 'react-gsap';
import { AWebcomicByDonal } from "./indexComponents/AWebcomicbyDonal";
import { Link } from "gatsby";


const PathAnimation = keyframes`
to {
    stroke-dashoffset: 0;
  }
`

const Visible = keyframes`
to {
    visibility: visible;
      }
`

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
    background-color: #964686;  
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

const OnHoverText = keyframes`
to {
    transform: scale(1.01);
}
`


const PathAnimated = styled.path`
stroke-width: 15;
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
animation: ${PathAnimation} 2s ease-in forwards;
`

const Vegas = styled.circle`
animation: ${Visible} 2s ease-in forwards;
animation-delay: 5s;
`

const VegasCirc = styled.circle`
animation: ${BackgroundStroke} 240s ease-in infinite;
animation-delay: 5s;
`

const VegasCirc2 = styled.circle`
animation: ${BackgroundFill} 240s ease-in infinite;
animation-delay: 3s;
`


const Index = styled.svg`
left: 0;
top: 0;
position: absolute;
background-color: black;
animation: ${BackgroundColor} 240s ease-in infinite;
animation-delay: 5s;
@media (max-width: 760px) {
    height:115%;
    top: -15%;
}
@media (max-width: 600px) {
    height:120%;
    top: -20%;
}
@media (max-width: 480px) {
    height:125%;
    top: -25%;
}
@media (max-width: 380px) {
    height:130%;
    top: -32%;
}
`

const Grid = styled.path`
visibility: hidden;
animation: ${Visible} 2s ease-in forwards;
animation-delay: 5s;
`

const BigText = styled.text`
visibility: hidden;
font: bold 125px sans-serif; 
fill: #D8000C;
animation: ${BackgroundFill} 240s ease-in infinite;
animation-delay: 5s;
`

const BigTextGlitch = styled.text`
visibility: hidden;
font: bold 125px sans-serif; 
fill: white;
animation: ${Visible} 2s ease-in forwards;
animation-delay: 10s;
`

const Logo = styled.image`
visibility: hidden;
animation: ${Visible} 2s ease-in forwards;
animation-delay: 5s;
`

const Why = styled.text`
animation-delay: 8s;
color: white;
font-size: 36px;
font-family: "Courier New";
@media (max-width: 600px) {
    font-size: 66px;
}
.mobileWhy{
    visibility: hidden;
    @media (max-width: 600px) {
        visibility: visibile;
    }
}
    `
const TextYe = styled.text`
color: white;
font-size: 36px;
font-family: "Courier New";
`

const Button = styled(props => <Link {...props} />)`
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
:hover {
    fill: white;
    stroke-width: 5;
    animation: ${PathAnimation} 1s ease-out forwards;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    text{        
        animation: ${OnHoverText} 1s ease-out forwards;
    }
    @media (max-width: 600px) {
        stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    }
}
`
const PatreonButton = styled.a`
stroke-dasharray: 1000;
stroke-dashoffset: 1000;
:hover {
    fill: white;
    stroke-width: 5;
    animation: ${PathAnimation} 1s ease-out forwards;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    text{        
        animation: ${OnHoverText} 1s ease-out forwards;
    }
    @media (max-width: 600px) {
        stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    }
}
`

const InitialDelayG = styled.g`
animation: ${Visible} 2s ease-in forwards;
animation-delay: 5s;
@media (max-width: 600px) {
    visibility: hidden;
}
.mobile{
    visibility: hidden;
    @media (max-width: 600px) {
        visibility: visible;
    }
}
.desktop{
    @media (max-width: 600px) {
        visibility: hidden;
    }
}
`

export default class IndexPage extends React.Component {

    render() {

        return (
            <>
                <Index width="100%" height="100%" viewBox="0 0 1280 800" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                    {/* Half-Tone Background */}
                    <defs>
                        <pattern id="polka-dots" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                            <animateTransform attributeType="xml"
                                attributeName="patternTransform"
                                type="rotate" from="35" to="395"
                                dur="240s" repeatCount="indefinite" />
                            <VegasCirc stroke="red" stroke-width="1" fill="black" cx="10" cy="10" r="5" />

                        </pattern>

                    </defs>

                    {/* Blur behind 'Quadrant' and Logo */}
                    <filter id="displacementFilter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur">
                            <animate id="gausAnim1" attributeType="xml" attributeName="stdDeviation" from="4" to="8" dur="12s" begin="0s; gausAnim2.end" fill="freeze" />
                            <animate id="gausAnim2" attributeType="xml" attributeName="stdDeviation" from="8" to="4" dur="12s" begin="gausAnim1.end" fill="freeze" />
                        </feGaussianBlur>
                    </filter>

                    <filter id="spotlight">
                        <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
                    </filter>

                    {/* Background */}
                    <rect width="100%" height="200%" fill="url(#polka-dots)" />

                    {/* One of many circles that flash alive at the start */}

                    <circle cx="250" cy="350" r="0" stroke="black" stroke-width="2" fill="transparent">
                        <animate attributeType="XML" attributeName="r" from="0" to="3000" begin="2s"
                            dur="2s" />
                        <animate attributeType="XML" attributeName="stroke-width" from="2" to="1000" begin="2s"
                            dur="2s" />
                    </circle>

                    <circle cx="250" cy="350" r="0" stroke="black" stroke-width="2" fill="transparent">
                        <animate attributeType="XML" attributeName="r" from="0" to="3000" begin="3s"
                            dur="1s" />
                        <animate attributeType="XML" attributeName="stroke-width" from="2" to="1000" begin="3s"
                            dur="1s" repeatCount="2" />
                    </circle>

                    {/* I think this flashing circle is the more fluid one */}

                    <circle cx="250" cy="350" r="0" stroke="black" stroke-width="2" fill="transparent">
                        <animate attributeType="XML" attributeName="r" from="0" to="2500" begin="3s"
                            dur="2s" />
                        <animate attributeType="XML" attributeName="stroke-width" from="2" to="2000" begin="3s"
                            dur="2s" repeatCount="2" />
                    </circle>

{/* BAckground messages */}
                    <path id="path">
                        <animate attributeName="d" from="m590,460 h0" to="m590,460 h1100" dur="6.8s" begin="6s" />
                    </path>

                    <TextYe font-size="26" font-family="Montserrat" fill='white'>
                        <textPath xlinkHref="#path">A Webcomic by Dónal.</textPath></TextYe>


                    {/* Yeah this is all code for the fluid circle. */}
                    <Vegas cx="250" cy="350" r="100" stroke="none" fill="transparent" visibility="hidden" >
                        <animate attributeType="XML" attributeName="stroke-width" from="0" to="50" begin="3s"
                            dur="1s" />
                        <animate attributeType="XML" attributeName="r" from="100" to="300" begin="3s"
                            dur="1s" />
                        <animate attributeType="XML" attributeName="stroke-width" from="50" to="0" begin="4s"
                            dur="1s" />
                        <animate attributeType="XML" attributeName="r" from="300" to="350" begin="4s"
                            dur="1s" />
                    </Vegas>

                    {/* PathAnimated is the two Paths meeting in the middle. First Vegas is a black circle helping the outline. Second is doing 
                        the same, only white
                     */}
                    
                    <path id="wire" d="M1000 1500 -1000 -1000" />
                    <Vegas cx="250" cy="350" r="115" stroke="none" stroke-width="0" fill="black" visibility="hidden" />
                    <PathAnimated transform="translate(10,0)" d="M350 820 150 750 300 600 230 500 L250 350" stroke="black" fill="transparent" />
                    <PathAnimated d="M350 820 150 750 300 600 230 500 L250 350" stroke="white" fill="transparent" />
                    <PathAnimated transform="translate(10,0)" d="M300 -20 450 50 150 150 270 250 L250 350" stroke="black" fill="transparent" />
                    <PathAnimated d="M300 -20 450 50 150 150 270 250 L250 350" stroke="white" fill="transparent" />
                    <Vegas cx="250" cy="350" r="105" stroke="none" stroke-width="0" fill="white" visibility="hidden" />

                    {/* Planet Fill. */}

                    <VegasCirc2 cx="250" cy="350" r="100" stroke="none" stroke-width="0" fill="red" visibility="hidden">
                        <animate attributeType="XML" attributeName="r" from="0" to="100" begin="3s"
                            dur="2s" />                        
                    </VegasCirc2>

                    {/* Vegas Planet Lines */}

                    <Grid d="M200 265 C 220 275, 255 295, 320 280" stroke="black" fill="transparent" />

                    <Grid d="M170 295 C 200 315, 280 335, 340 315" stroke="black" fill="transparent" />

                    <Grid d="M155 335 C 185 355, 315 375, 350 355" stroke="black" fill="transparent" />

                    <Grid d="M155 380 C 200 405, 295 415, 335 395" stroke="black" fill="transparent" />

                    <Grid d="M180 420 C 225 445, 270 440, 310 430" stroke="black" fill="transparent" />
                    <Grid d="M260 250 C 100 260, 140 440, 240 450" stroke="black" fill="transparent" />

                    <Grid d="M260 250 C 100 260, 140 440, 240 450" stroke="black" fill="transparent">
                        <animate attributeType="xml"
                            attributeName="d"
                            from="M260 250 C 100 260, 140 440, 240 450"
                            to="M260 250 C 130 300, 160 425, 240 450"
                            dur="3s" repeatCount="indefinite" />
                    </Grid>


                    <Grid d="M260 250 C 130 300, 160 425, 240 450" stroke="black" fill="transparent">
                        <animate attributeType="xml"
                            attributeName="d"
                            from="M260 250 C 130 300, 160 425, 240 450"
                            to="M260 250 C 200 300, 200 400, 240 450"
                            dur="3s" repeatCount="indefinite" />
                    </Grid>

                    <Grid d="M260 250 C 200 300, 200 400, 240 450" stroke="black" fill="transparent">
                        <animate attributeType="xml"
                            attributeName="d"
                            from="M260 250 C 200 300, 200 400, 240 450"
                            to="M260 250 C 240 450, 260 250, 240 450"
                            dur="3s" repeatCount="indefinite" />
                    </Grid>

                    <Grid d="M260 250 C 240 450, 260 250, 240 450" stroke="black" fill="transparent">
                        <animate attributeType="xml"
                            attributeName="d"
                            from="M260 250 C 240 450, 260 250, 240 450"
                            to="M260 250 C 320 300, 280 420, 240 450"
                            dur="3s" repeatCount="indefinite" />
                    </Grid>

                    <Grid d="M260 250 C 320 300, 280 420, 240 450" stroke="black" fill="transparent">
                        <animate attributeType="xml"
                            attributeName="d"
                            from="M260 250 C 320 300, 280 420, 240 450"
                            to="M260 250 C 380 300, 320 425, 240 450"
                            dur="3s" repeatCount="indefinite" />
                    </Grid>

                    <Grid d="M260 250 C 380 300, 320 425, 240 450" stroke="black" fill="transparent">
                        <animate attributeType="xml"
                            attributeName="d"
                            from="M260 250 C 380 300, 320 425, 240 450"
                            to="M260 250 C 400 270, 350 460, 240 450"
                            dur="3s" repeatCount="indefinite" />
                    </Grid>

                    <Grid d="M260 250 C 400 270, 350 460, 240 450" stroke="black" fill="transparent" />

                    {/* Logo  */}
                    <g>
                        <Tween
                            staggerFrom={{ opacity: '0' }}
                            stagger={13}
                            duration={12}
                            ease="RoughEase.ease"
                            repeat={-1}
                        >
                            <Logo xlinkHref={logo} x="430" y="-150" height="700px" width="700px" visibility="hidden" ref={img => this.logoContainer = img} />
                            <Logo xlinkHref={logo} filter="url(#displacementFilter)" x="430" y="-150" height="700px" width="700px" visibility="hidden" ref={img => this.logoContainer = img} />
                        </Tween>
                        <BigTextGlitch x="560" y="370" filter="url(#displacementFilter)">Quadrant</BigTextGlitch>
                        <BigText stroke="white" x="510" y="370" >Quadrant
                        <animateTransform id="Quad1" attributeName="transform" attributeType="XML" type="translate" from="2500 0" to="50 0" begin="5s" dur="1s" fill="freeze" />
                        </BigText>
                        <animateTransform id="anim1" attributeName="transform" attributeType="XML" type="translate" from="0 0" to="0 30" begin="0s; anim2.end" dur="5s" fill="freeze" />
                        <animateTransform id="anim2" attributeName="transform" attributeType="XML" type="translate" from="0 30" to="0 0" begin="anim1.end" dur="5s" fill="freeze" />
                    </g>

                    {/* Webcomic text. */}
                    <path id="path2" d="m580,520 h1100" />
                    <g>
                        <AWebcomicByDonal />
                        <animate attributeType="xml" attributeName="visibility" from="visible" to="hidden" dur="2s" begin="0s" />
                    </g>

                    <path id="path">
                        <animate attributeName="d" from="m590,460 h0" to="m590,460 h1100" dur="6.8s" begin="6s" />
                    </path>

                    <TextYe font-size="26" font-family="Montserrat" fill='white'>
                        <textPath xlinkHref="#path">A Webcomic by Dónal.</textPath></TextYe>

                     <InitialDelayG>
                        <Button to="/LatestChapter" className="desktop">
                        <rect opacity="0.6" x="437" y="492" width="210" height="245" stroke="black" fill="white" />
                         <rect x="435" y="490" width="210" height="245" stroke="white" fill="transparent" />
                         <Why x="450" y="680">Latest</Why>
                         <Why x="450" y="710">Chapter</Why>
                        </Button>

                        <Button className="desktop">
                            <rect opacity="0.6" x="697" y="492" width="210" height="45" stroke="black" width="210" height="245" fill="white" />
                            <rect x="695" y="490" width="210" height="45" stroke="white" width="210" height="245" fill="transparent" />
                            <Why x="710" y="680">First</Why>
                         <Why x="710" y="710">Chapter</Why>
                        </Button>

                        <Button to="/archive" className="desktop">
                            <rect opacity="0.6" x="950" y="492" stroke="black" width="210" height="100" fill="white" />
                            <rect x="950" y="490" stroke="white" width="210" height="100" fill="transparent" />
                            <Why x="960" y="545">archive</Why>
                        </Button>

                        <PatreonButton href="https://www.patreon.com/LugoMaster" target="_blank" rel="noopener noreferrer" className="desktop">
                            <rect opacity="0.6" x="950" y="602" stroke="black" width="210" height="100" fill="white" />
                            <rect x="950" y="600" stroke="white" width="210" height="100" fill="transparent" />
                            <Why x="960" y="660">Patreon</Why>
                        </PatreonButton>

                        <PatreonButton href="/LatestChapter" className="mobile">
                            <rect x="35%" y="65%" width="55%" height="20%" stroke="black" fill="white" opacity="0.5"/>
                            <rect x="35%" y="65%" width="55%" height="20%"stroke="white" fill="transparent" />
                            <Why className="mobileWhy" x="40%" y="75%">Latest Chapter</Why>
                        </PatreonButton>

                        <Button className="mobile">
                            <rect x="35%" y="95%" width="55%" height="20%" stroke="black" fill="white" opacity="0.5"/>
                            <rect x="35%" y="95%" width="55%" height="20%"stroke="white" fill="transparent" />
                            <Why x="40%" y="105%">First Chapter</Why>
                        </Button>

                        <PatreonButton href="https://www.patreon.com/LugoMaster" target="_blank" rel="noopener noreferrer" className="mobile">
                            <rect x="65%" y="125%" width="24%"  height="20%" stroke="black" fill="white" opacity="0.5"/>
                            <rect x="65%" y="125%" width="24%" height="20%"stroke="white" fill="transparent" />
                            <Why x="66%" y="135%">Patreon</Why>
                        </PatreonButton>

                        <Button to="/archive" className="mobile">
                            <rect x="35%" y="125%" width="24%" height="20%" stroke="black" fill="white" opacity="0.5"/>
                            <rect x="35%" y="125%" width="24%" height="20%"stroke="white" fill="transparent" />
                            <Why x="36%" y="135%">archive</Why>
                        </Button>
                    </InitialDelayG>

                    {/* <Button>
                        <rect x="637" y="552" width="210" height="45" stroke="black" fill="transparent" />
                        <rect x="635" y="550" width="210" height="45" stroke="white" fill="transparent" />
                        <Why x="650" y="560">Latest Chapter</Why>
                        <Why filter="url(#displacementFilter)" x="650" y="510">Chapter List</Why>
                    </Button> */}
                    <rect width="5%" height="300%" fill="black" />
                    <rect width="5%" height="300%" x="95%"fill="black" />
                    <rect width="100%" height="50%" y="-50%" fill="black" />
                    <rect width="30%" height="5%" y="100%" fill="black" />
                    <rect width="100%" height="50%" y="200%" fill="black" />
                </Index>

            </>
        );
    }
}
