import React from 'react';
import styled, { keyframes } from 'styled-components';


const SvgBlurImage = styled.image`
filter: url(#blurMe);
`


export function Animatesvg(props) {
    return (<>
    <defs>          
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
        </defs>        
        <rect width="100%" height="100%" fill="white" />
        <g>
            <SvgBlurImage xlinkHref={require(`./cityscape.png`)} height="100%" width="300%">
                <animateTransform attributeName="transform"
                    type="translate"
                    from="-200 0"
                    to="-2000 0"
                    begin="0s"
                    dur="20s"
                    repeatCount="indefinite"
                />
            </SvgBlurImage>
            <animateTransform attributeName="transform"
                type="translate"
                from="0 0"
                to="0 2"
                begin="0s"
                dur="0.5s"
                repeatCount="indefinite"
            />
        </g>
        <rect width="50%" height="100%" fill="black">
            <animateTransform attributeName="transform"
                type="translate"
                from="2000 0"
                to="-2000 0"
                begin="0s"
                dur="1s"
                repeatCount="indefinite"
            />
        </rect>
        <rect width="1100%" height="100%" fill="black">
            <animateTransform attributeName="transform"
                type="translate"
                from="90000 0"
                to="00 0"
                begin="0s"
                dur="20s"
                repeatCount="indefinite"
            />
        </rect>

        <rect width="600%" height="100%" fill="black">
            <animateTransform attributeName="transform"
                type="translate"
                from="2000 0"
                to="-80000 0"
                begin="0s"
                dur="20s"
                repeatCount="indefinite"
            />
        </rect>
        
</>)
}


export default Animatesvg;