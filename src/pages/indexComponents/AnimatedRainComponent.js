import React from "react"
import styled, { keyframes } from "styled-components"


const Rain = keyframes`
10%, 85%{
  transform: translate3d(442px, -162px, 0px);
}
20%, 95% {
  transform: translate3d(42px, 162px, 0px);  
}
30%, 65% {
  transform: translate3d(126px, 200px, 0px);  
}
40%, 75% {
  transform: translate3d(32px, -100px, 0px);  
}
50%, 5%{
  transform: translate3d(376px, 10px, 0px);  
}
60%, 20% {
  transform: translate3d(434px, -150px, 0px); 
}
70%, 15% {
  transform: translate3d(42px, -150px, 0px); 
}
80%, 45% {
  transform: translate3d(642px, 170px, 0px); 
}
90%, 35% {
  transform: translate3d(242px, -200px, 0px); 
}
100%, 25% {
  transform: translate3d(200px, 10px, 0px); 
}
55% {
  transform: translate3d(763px,  30px, 0px); 
}
`

const AnimatedRect = styled.rect`
animation: ${Rain} 1s steps(1, end) infinite;
`

export const AnimatedRainComponent = () => (
  <>
      <g>
      <AnimatedRect width="1" height="1250" fill="black" x="0" y="0">
        <animateTransform attributeName="transform" type="scale" from="1 1"
  to="1 10"
  begin="0s"
  dur="1s"
  repeatCount="indefinite" />
      </AnimatedRect>
      </g>
  </>
)

export default AnimatedRainComponent;