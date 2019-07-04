import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Link } from "gatsby";

let GetCurrentTime = new Date();
let CurrentTime = GetCurrentTime.toLocaleTimeString()
CurrentTime = CurrentTime.slice(0, -6);
let TickerTime = GetCurrentTime.toLocaleTimeString()
TickerTime = TickerTime.slice(0, -3);
// let CurrentTime = "18";

const TickerText = styled.text`
font: bold 18px sans-serif;
`
const HeadlineText = styled.text`
font: bold 26px sans-serif;
`

const LastestChapter = styled.svg`
left: 0;
top: 0;
position: absolute;
background-color: black;
`

const TvSGV = styled.svg`
rect{
filter:url(#spotlight)
}
`

const HoverSvg = styled.svg`
transition: all .2s ease-in-out;  
opacity: 0.3;
:hover{
  opacity: 0;
}
`

const MobileSvg = styled.svg`
@media (max-width: 600px) {
vsibility: visible;
background-color: black;
`

const BackgroundSvg = styled.svg`
background-color:"black";
position: absolute;
z-index: -1;
top: 0;
left: 0;
@media (max-height: 760px) {
	height: 110%;
}
@media (max-width: 600px) {
	height: 100%;
}
`

const Parallax = () => (
  <>
  <BackgroundSvg width="100%" height="330%">
			<rect fill="black" height="100%" width="100%" />
		</BackgroundSvg>
    <Controller>
      <Scene
        duration="300"
        triggerHook="OnEnter"
        offset="450"
      >
        <Timeline
          wrapper={<LastestChapter viewBox="0 0 1400 900" />}
        >
          <filter id="blurMe">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
          <image xlinkHref={require(`./times/${CurrentTime}/Back.png`)} height="100%" width="100%" />
          <image xlinkHref={require(`./times/${CurrentTime}/Clouds.png`)} y="-10%" height="100%" width="100%">
            <animate attributeType="XML" attributeName="x" from="0" to="1400"
              dur="280s" repeatCount="indefinite" />
          </image>
          <image xlinkHref={require(`./times/18/PelicanFlipped.png`)} x="-400" y="25%" height="5%" width="5%">
            <animate attributeType="XML" attributeName="x" from="2000" to="-200"
              dur="18s" repeatCount="0" begin="1s" />
          </image>
          <image xlinkHref={require(`./times/18/Clouds.png`)} y="-10%" height="100%" width="100%">
            <animate attributeType="XML" attributeName="x" from="-1400" to="0"
              dur="280s" repeatCount="indefinite" />
          </image>
          <image xlinkHref={require(`./times/18/CloudsFront.png`)} x="-10%" height="30%" width="30%">
            <animate attributeType="XML" attributeName="x" from="-100" to="1500"
              dur="280s" repeatCount="indefinite" />
          </image>
          <image xlinkHref={require(`./times/${CurrentTime}/Ship.png`)} y="50%" x="-500" height="5%" width="5%">
            <animate attributeType="XML" attributeName="x" from="1500" to="0"
              dur="45s" repeatCount="0" />
          </image>

          <circle cx="0" cy="0" r="1" fill="white"><animateTransform attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0 0"
            to="2000 360"
            dur="64s"
            repeatCount="0" /></circle>


          <circle cx="0" cy="0" r="1" fill="white"><animateTransform attributeName="transform"
            attributeType="XML"
            type="translate"
            from="1000 1000"
            to="-10 1000"
            dur="64s"
            repeatCount="0" /></circle>


          <circle cx="0" cy="0" r="1" fill="white"><animateTransform attributeName="transform"
            attributeType="XML"
            type="translate"
            from="1000 0"
            to="-100 3000"
            dur="84s"
            repeatCount="0" begin="50s" /></circle>


          <circle cx="390" cy="220" r="0" fill="white">
            <animate attributeType="XML" attributeName="r" from="0" to="10"
              dur="0.1s" repeatCount="0" begin="2.9s" />
          </circle>

          <image id="anim1" xlinkHref={require(`./times/${CurrentTime}/WarpShip.png`)} height="4%" width="4%">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="translate"
              from="360 200"
              to="380 180"
              dur="0.1s"
              repeatCount="0" begin="3s" />
          </image>

          <image xlinkHref={require(`./times/${CurrentTime}/WarpShip.png`)} height="4%" width="4%">
            <animateTransform attributeName="transform"
              attributeType="XML"
              type="translate"
              from="380 180"
              to="550 -20"
              dur="40s"
              repeatCount="0" begin="3.1s" />
          </image>


          <Tween
            position="0"
            from={{
              yPercent: 2.5,
            }}
            to={{
              yPercent: 0,
            }}
          >
            <image xlinkHref={require(`./times/${CurrentTime}/Middle.png`)} height="100%" width="100%" />
          </Tween>
          <Tween
            position="0"
            from={{
              yPercent: -1.5,
            }}
            to={{
              yPercent: 0,
            }}
          >
            <image xlinkHref={require(`./times/${CurrentTime}/Pelican.png`)} x="-400" y="35%" height="20%" width="20%">
              <animate id="pelican" attributeType="XML" attributeName="x" from="-400" to="2000"
                dur="18s" repeatCount="0" begin="18s" />
            </image>
            <image xlinkHref={require(`./times/${CurrentTime}/Front.png`)} height="100%" width="100%" />
          </Tween>
          <image xlinkHref={require(`./times/TVScreen.png`)} x="47px" y="390px" height="49%" width="49%" />

          <TvSGV width="44.1%" height="35%" x="78px" y="454px">

            <defs>
              <filter id="spotlight">
                <feFlood result="floodFill" x="0" y="0" width="100%" height="100%"
                  flood-color="aqua" flood-opacity="0.3" />
                <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
              </filter>
            </defs>
            <image opacity="0.5" xlinkHref={require(`./comics/2019-07/01-Prologue01/thumbnailart.png`)} x="15%" height="70%" width="70%" />
            <rect fill="white" width="99%" height="10%" y="80%" x="2px" />
            <rect id="Headlines" fill="white" width="99%" height="25%" y="65%" x="2px" />
            <HeadlineText y="75%" x="20px">
              Latest Chapter
            </HeadlineText>
            <TickerText font="bold 10px sans-serif" y="82%" x="20px">Prologue #1: Taylor</TickerText>
            <TickerText fill="black" x="100%" y="97%">
              latest planet in the Quadrant to be ousted as an independent and is now in the control of the Inter-Planetary
              Council.  |  Mounting pressure on MB and Bunny organisation as to explain themselves over CC Bradley's disappearence
              earlier this month.  |  The last of Charon assets in the Quadrant have been handed over to the Merchants Guild. Speaking earlier, the Boss said
              "Woop Woop in the Shoup". More at 11.  |  Revior Becomes the latest planet in the Quadrant to be ousted as an independant and
            <animate attributeType="XML" attributeName="x" from="15%" to="-585%"
                dur="60s" repeatCount="indefinite" />
            </TickerText>
            <rect fill="white" stroke="black" stroke-width="2" width="10%" height="12%" y="89%" x="2px" />
            <TickerText x="1.5%" y="97%">{TickerTime}</TickerText>
            <rect fill="black" width="99%" height="1%" y="89%" x="2px" />
            <rect fill="black" width="99%" height="1%" y="99%" x="2px" />
            
          </TvSGV>
          <HoverSvg width="44.1%" height="35%" x="78px" y="454px">
          <Link to="/Message">
            <rect width="100%" height="100%" fill="grey" />
            </Link>
            </HoverSvg>
          <rect width="100%" height="5%" />
          

          <rect width="100%" height="7%" y="93%" />
        </Timeline>
      </Scene>
    </Controller>
    <MobileSvg width="100%" height="800%" />
  </>
);

export default Parallax;
