import React from "react"
import styled, { keyframes } from "styled-components"

const flicker = keyframes`
0%    { opacity: 1;   }
13%    { opacity: 0.6; }
26%    { opacity: .9;   }
37%    { opacity: 0.45; }
48%    { opacity: .87;   }
59%    { opacity: 0.5; }
70%   { opacity: 0.3;   }
89%   { opacity: 0.4}
100%  { opacity: 0.7;   }
`

const flickerFront = keyframes`
10%    { transform: translate3d(-1px, 0, 0);  }
20%    { transform: translate3d(0px, 0, 0); }
30%    { transform: translate3d(1px, 0, 0);  }
40%    { transform: translate3d(0px, 1px, 0); }
50%    { transform: translate3d(-1px, 0, 0);  }
60%    { transform: translate3d(0px, 0, 0); }
70%    { transform: translate3d(1px, 0, 0);  }
80%    { transform: translate3d(0px, 0, 0); }
90%    { transform: translate3d(-1px, 0, 0);  }
100%    { transform: translate3d(0px, 0, 0); }
`

const Text = styled.text`
color: white;
  font-size: 36px;
  font-family: "Courier New";
`

const TextFlicker = styled.text`
color: white;
  font-size: 36px;
  font-family: "Courier New";
  animation: ${flicker} 5s infinite 2s step-end;
  animation-delay: 5s;
`

const TextFlickerFront = styled.g`
color: white;
  font-size: 75px;
  font-family: "Courier New";
  animation: ${flickerFront} 1s infinite 1s step-end;
  animation-delay: 5s;
`

const Visible = keyframes`
to {
    visibility: visible;
      }
`

const Why = styled.g`
animation: ${Visible} 1s ease-in forwards;
animation-delay: 9s;
`

export const AWebcomicByDonal = () => (
  <Why visibility="hidden">   
  {/* Webcomic text. */}

    {/* 
    Blur vhs text:
    1. White Font
    2. Light gausian blur
    3. flashing rgb colors blending? popping out maybe (opacity 0/1)  
    */}
    <filter id="blurMe">
      <feGaussianBlur in="sourceGraphic" stdDeviation="1" />
    </filter>
    <g>
      <TextFlickerFront>
        <TextFlicker x="593" y="460" fill="red">A Webcomic by Dónal.</TextFlicker>
        <TextFlicker x="593" y="460" fill="blue">A Webcomic by Dónal.</TextFlicker>
        <Text x="590" y="460" fill="white" filter="url(#blurMe)">A Webcomic by Dónal.</Text>
        <Text x="590" y="460" fill="white">A Webcomic by Dónal.</Text>
      </TextFlickerFront>
    </g>
</Why>
)

export default AWebcomicByDonal
