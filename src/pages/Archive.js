// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Animatesvg } from "./archive/Animatesvg.js";
import { Link } from "gatsby";

let LightAnimation = keyframes`
10%{
  opacity: 0;
}
90%
{
  opacity: 0.5;
}
`

let GrainAnimation = keyframes`
0%, 100% { transform:translate(0, 0) }
  10% { transform:translate(-5%, -10%) }
  20% { transform:translate(-15%, 5%) }
  30% { transform:translate(7%, -25%) }
  40% { transform:translate(-5%, 25%) }
  50% { transform:translate(-15%, 10%) }
  60% { transform:translate(15%, 0%) }
  70% { transform:translate(0%, 15%) }
  80% { transform:translate(3%, 35%) }
  90% { transform:translate(-10%, 10%) }
`

const SvgLightImage = styled.image`
opacity:0.5;
animation: ${LightAnimation} 1s linear infinite;
animation-delay:0.4s;
`

const Grain = styled.image`
animation: ${GrainAnimation} 2s steps(10) infinite;
filter: url(#grain);
opacity: 0.15;
`

let PlayButtonAnimation = keyframes`
50%
{
  opacity: 0;
}
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
grid-auto-rows: 100px
grid-gap: 10px;

@media (max-width: 960px) {
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: 100px
  grid-gap: 10px;
  width: 100%;
  height: 100%;  
}

h1{
  position: absolute;
  z-index: 1;
  left: 30%;
  color: white;
  font-size: 36px;
  font-weight: bold;
  font-family: Courier, monospace;
  opacity:1;
  animation: ${PlayButtonAnimation} 2s steps(1) infinite;
}

h2{
  @media (max-width: 960px) {
    display: none;
  }
  position: absolute;
  z-index: 0;
  left: 30%;
  top: 13%;
  color: white;
  font-size: 36px;
  font-weight: bold;
  font-family: Courier, monospace;
  opacity:1;
}

h3{
  z-index: 1;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  text-align:center; 
  font-family: Courier, monospace;

}

text {
  color: black;
  font-size: 1.3em;
  font-weight: bold;
  text-align:center; 
  font-family: Courier, monospace;
  font-size: 36px;
}
.world1 {
  opacity: 0;
}
.world2 {
  opacity: 0;
}
.world3 {
  opacity: 0;
}
.world4 {
  opacity: 0;
}

h3{
  visibility: hidden;
}

.tape1 {
  margin: 10px 45px 10px 45px;
  transition: all .2s ease-in-out;  
  grid-column: 1;
  grid-row: 3;

  @media (max-width: 960px) {
    margin: 0;
  transition: all .2s ease-in-out;  
  grid-column: 2;
  grid-row: 2;
  background-color: black;
  img {
    display: none;
  }
  h3{
    visibility: visible;
  }
  }

  @media (max-height: 700px) {
    grid-row: 2;
  }

  &:hover ~ .world1 h1 {
    opacity: 1;
  }  

  &:hover ~ .world1 h2 {
    opacity: 0;
  } 
  
  &:hover ~ .world1 {
    opacity: 1;
  }  

  &:hover {
    transform: scale(1.1);
  }

  &:hover img {
    opacity: 1;
  }

}

.tape1 img {
  opacity: 0.6;
}

.tape2 {
  margin: 20px 50px 20px 50px;
  transition: all .2s ease-in-out;  
  grid-column: 1;
  grid-row: 4;

  @media (max-width: 960px) {
    margin: 0;
  transition: all .2s ease-in-out;  
  grid-column: 2;
  grid-row: 3;
  background-color: black;
  img {
    display: none;
  }
  h3{
    visibility: visible;
  }
  }

  @media (max-height: 700px) {
    grid-row: 3;
  }

  &:hover ~ .world2 {
    opacity: 1;
  }  

  &:hover ~ .world2 h1 {
    opacity: 1;
  }  

  &:hover ~ .world2 h2 {
    opacity: 0;
  }

  &:hover ~ .world1 {
    opacity: 0;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover img {
    opacity: 1;
  }

}

.tape2 img {
  opacity: 0.6;
}

.tape3 {
  margin: -5px 55px -5px 55px;
  transition: all .2s ease-in-out;  
  grid-column: 1;
  grid-row: 5;

  @media (max-width: 960px) {
    margin: 0;
  transition: all .2s ease-in-out;  
  grid-column: 2;
  grid-row: 4;
  background-color: black;
  img {
    display: none;
  }
  h3{
    visibility: visible;
  }
  }

  @media (max-height: 700px) {
    grid-row: 4;
  }

  &:hover ~ .world3 {
    opacity: 1;
  }  

  &:hover ~ .world3 h1 {
    opacity: 1;
  }  

  &:hover ~ .world3 h2 {
    opacity: 0;
  }

  &:hover {
    transform: scale(1.15);
  }

  &:hover img {
    opacity: 1;
  }

}


.tape3 img {
  opacity: 0.6;
}

.tape4 {
  margin: 20px 50px 20px 50px;
  transition: all .2s ease-in-out;  
  grid-column: 1;
  grid-row: 6;

  @media (max-width: 960px) {
    margin: 0;
  transition: all .2s ease-in-out;  
  grid-column: 2;
  grid-row: 5;
  background-color: black;
  img {
    display: none;
  }
  h3{
    visibility: visible;
  }
  }

  @media (max-height: 700px) {
    grid-row: 5;
  }

  &:hover ~ .world4 {
    opacity: 1;
  }  

  &:hover ~ .world4 h1 {
    opacity: 1;
  }  

  &:hover ~ .world4 h2 {
    opacity: 0;
  }

  &:hover {
    transform: scale(1.1);
  }

}

.world1 {
    grid-column: 2 / 4;
    grid-row: 2 / 8;
    @media (max-width: 960px) {
      display:none;
    }
    @media (max-height: 700px) {
      grid-row: 1 / 7;
    }
}

.world2 {
  grid-column: 2 / 4;
  grid-row: 2 / 8;
  @media (max-width: 960px) {
    display:none;
  }
  @media (max-height: 700px) {
    grid-row: 1 / 7;
  }
}

.world3 {
  grid-column: 2 / 4;
  grid-row: 2 / 8;
  @media (max-width: 960px) {
    display:none;
  }
  @media (max-height: 700px) {
    grid-row: 1 / 7;
  }
}

.world4 {
  grid-column: 2 / 4;
  grid-row: 2 / 8;
  @media (max-width: 960px) {
    display:none;
  }
  @media (max-height: 700px) {
    grid-row: 1 / 7;
  }
}

}



.world1 h1 {
  opacity: 0;
}

.world1 h2 {
  opacity: 1;
}

.world2 h1 {
  opacity: 0;
}

.world2 h2 {
  opacity: 1;
}

.world3 h1 {
  opacity: 0;
}

.world3 h2 {
  opacity: 1;
}

.world4 h1 {
  opacity: 0;
}

.world4 h2 {
  opacity: 1;
}


.blurredH1 {
  -webkit-filter: blur(1px); /* Safari 6.0 - 9.0 */
  filter: blur(1px);
}

.world1 svg {
  position: relative;
}
.world2 svg {
  position: relative;
}
.world3 svg {
  position: relative;
}
.world4 svg {
  position: relative;
}

.archive {
  display: none;
  @media (max-width: 960px) {
    display: block;
    grid-column: 2;
    grid-row: 1;
  }
  // background-color: black;
  @media (max-width: 320px) {
    margin: 20% 0 20% 0;
  }
}

.menu {
  background-color: black;
  grid-column: 2;
  grid-row: 1;
  transition: all .2s ease-in-out;  
  margin-left: 80%;
  margin-top: 3%;
  opacity: 0.7;

  p {
    z-index: 1;
    color: white;
    font-size: 1.3em;
    font-weight: bold;
    text-align:center; 
    font-family: Courier, monospace;
  }
  :hover {
      opacity: 1;
      transform: scale(0.95);
  }

  @media (max-width: 960px) {
    display:none;
  }
  
  @media (max-height: 700px) {
    grid-row: 5;
    grid-column: 1;
    margin: 20px;
    }
    }
  }

`

const SvgBlendImage = styled.image`
filter: url(#spotlight);
`

const SvgBlendImageGreen = styled.image`
filter: url(#spotlightGreen);
`

const SvgBlendImageYellow = styled.image`
filter: url(#spotlightyellow);
`

const SvgBlendImageOrange = styled.image`
filter: url(#spotlightorange);
`

const Background = styled.img`
position: absolute;
left: 0px;
top: 0px;
z-index: -1;
`

const BackgroundContainer = styled.div`
.mobile {
  visibility: hidden;
}
@media (max-width: 960px) {
  .desktop {
    visibility: hidden;
  }
  .mobile {
    visibility: visible;
    position:fixed;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
}
`

const archive = styled.svg`
position: absolute;
z-index: 1;
@media (max-width: 960px) {
  display: none;
}
`

const SvgBlurImage = styled.image`
filter: url(#blur)
`


const Parallax = () => (
  <>
    {/* <svg viewBox="0 0 1400 800"> */}

    {/* <rect fill="transparent" stroke="black" width="100%" height="100%" /> */}

    <archive height="20%" width="40%">
      <filter id="blur" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
      </filter>
      <SvgBlurImage xlinkHref={require(`./archive/archive.png`)} height="75%" width="75%" />
      <image xlinkHref={require(`./archive/archive.png`)} height="75%" width="75%" />
    </archive>

    <Wrapper >


      <div className="archive">
        <img src={require(`./archive/archive.png`)} height="100%" width="100%" />
      </div>
      <div className="tape1">
        <img src={require(`./archive/prologue01.png`)} height="100%" width="100%" />
        <h3>Prologue #1: Taylor</h3>
      </div>
      <div className="tape2">
        <img src={require(`./archive/prologue02.png`)} height="100%" width="100%" />
        <h3>Prologue #2: Sky</h3>
      </div>
      <div className="tape3">
        <img src={require(`./archive/prologue03.png`)} height="100%" width="100%" />
        <h3>Prologue #3: Jin</h3>
      </div>
      <Link className="tape4" to="/">
      <h3>Main Menu</h3>
      </Link>


      <h2 className="blurredH1">Pause &#9612;&#9612;</h2>

      {/* The Subway Part */}
      <div className="world1">
        <h1 className="blurredH1">Play &#9658;</h1>
        <svg className="svg" width="100%" height="100%" viewBox="0 0 1200 1000">
          <defs>
            <filter id="spotlight">
              <feFlood result="floodFill" width="150%" height="150%"
                flood-color="#d86161" flood-opacity="0.3" />
              <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
            </filter>
            <filter id="grain">
              <feBlend in="SourceGraphic" mode="multiply" />
            </filter>
          </defs>
          <Animatesvg />
          <image xlinkHref={require(`./archive/layout.png`)} height="100%" width="100%" />
          <SvgLightImage xlinkHref={require(`./archive/layoutLight.png`)} height="100%" width="100%" />
          <SvgBlendImage xlinkHref={require(`./archive/prologue01Taylor.png`)} height="100%" width="100%">
            <animateTransform attributeName="transform"
              type="translate"
              from="0 0"
              to="0 2"
              begin="0s"
              dur="0.5s"
              repeatCount="indefinite"
            />
          </SvgBlendImage>
          <SvgBlurImage xlinkHref={require(`./archive/prologue01Taylor.png`)} height="100%" width="100%" opacity="0.4" />
          <SvgLightImage xlinkHref={require(`./archive/prologue01TaylorLight.png`)} height="100%" width="100%">
            <animateTransform attributeName="transform"
              type="translate"
              from="0 0"
              to="0 2"
              begin="0s"
              dur="0.5s"
              repeatCount="indefinite"
            />
          </SvgLightImage>
          <Grain xlinkHref={require(`./archive/grain.png`)} x="-500px" y="-500px" height="200%" width="200%" />
          <rect width="25%" height="100%" x="-250px" fill="black" />
          <rect width="25%" height="100%" x="98%" fill="black" />
        </svg>
      </div>


      <div className="world2">
        <h1 className="blurredH1">Play &#9658;</h1>
        <svg className="svg" width="100%" height="100%" viewBox="0 0 1200 1000">
          <defs>
            <filter id="spotlightGreen">
              <feFlood result="floodFill" width="150%" height="150%"
                flood-color="#6bff85" flood-opacity="0.5" />
              <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
            </filter>
            <filter id="grain">
              <feBlend in="SourceGraphic" mode="multiply" />
            </filter>
          </defs>
          <Animatesvg />
          <SvgBlendImageGreen xlinkHref={require(`./archive/layout.png`)} height="100%" width="100%" />
          <SvgLightImage xlinkHref={require(`./archive/layoutLight.png`)} height="100%" width="100%" />
          <Grain xlinkHref={require(`./archive/grain.png`)} x="-500px" y="-500px" height="200%" width="200%" />
          <rect width="25%" height="100%" x="-250px" fill="black" />
          <rect width="25%" height="100%" x="98%" fill="black" />
        </svg>
      </div>

      <div className="world3">
        <h1 className="blurredH1">Play &#9658;</h1>
        <svg className="svg" width="100%" height="100%" viewBox="0 0 1200 1000">
          <defs>
            <filter id="spotlightyellow">
              <feFlood result="floodFill" width="150%" height="150%"
                flood-color="Yellow" flood-opacity="0.5" />
              <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
            </filter>
            <filter id="grain">
              <feBlend in="SourceGraphic" mode="multiply" />
            </filter>
          </defs>
          <Animatesvg />
          <SvgBlendImageYellow xlinkHref={require(`./archive/layout.png`)} height="100%" width="100%" />
          <SvgLightImage xlinkHref={require(`./archive/layoutLight.png`)} height="100%" width="100%" />
          <Grain xlinkHref={require(`./archive/grain.png`)} x="-500px" y="-500px" height="200%" width="200%" />
          <rect width="25%" height="100%" x="-250px" fill="black" />
          <rect width="25%" height="100%" x="98%" fill="black" />
        </svg>
      </div>

      <div className="world4">
        <h1 className="blurredH1">Play &#9658;</h1>
        <svg className="svg" width="100%" height="100%" viewBox="0 0 1200 1000">
          <defs>
            <filter id="spotlightorange">
              <feFlood result="floodFill" width="150%" height="150%"
                flood-color="orange" flood-opacity="0.5" />
              <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
            </filter>
            <filter id="grain">
              <feBlend in="SourceGraphic" mode="multiply" />
            </filter>
          </defs>
          <Animatesvg />
          <SvgBlendImageOrange xlinkHref={require(`./archive/layout.png`)} height="100%" width="100%" />
          <SvgLightImage xlinkHref={require(`./archive/layoutLight.png`)} height="100%" width="100%" />
          <Grain xlinkHref={require(`./archive/grain.png`)} x="-500px" y="-500px" height="200%" width="200%" />
          <rect width="25%" height="100%" x="-250px" fill="black" />
          <rect width="25%" height="100%" x="98%" fill="black" />
        </svg>
      </div>

      
      <Link className="menu" to="/">
        <p>Main Menu</p>
      </Link>



    </Wrapper>
    <BackgroundContainer>
      <Background className="desktop" src={require(`./archive/background.png`)} height="100%" width="100%" />
      <svg className="mobile" width="100%" height="100%">
        <rect fill="grey" width="100%" height="100%" />
        <image xlinkHref={require(`./archive/backgroundMobile.png`)} width="100%" height="100%" />
        <rect fill="black" width="100%" height="15%" />
        <rect fill="black" width="100%" height="20%" y="80%"/>
      </svg>
    </BackgroundContainer>
  </>
);

export default Parallax;