import React from "react"
import styled, { keyframes } from "styled-components"
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';

export const AnimatedCard = () => (
    <>
        <path d="M0 0 V400" stroke="#db4848" strokeWidth="3">
            <animateTransform id="anim1" attributeName="transform" type="translate" from="0 0"
                to="300 0"
                dur="5s"
                repeatCount="indefinite" begin="0s; anim2.end" /></path>

        <path d="M300 0 V400" stroke="#db4848" strokeWidth="3">
            <animateTransform id="anim1" attributeName="transform" type="translate" from="0 0"
                to="-300 0"
                dur="5s"
                repeatCount="indefinite" begin="0s; anim2.end" /></path>

        <Tween
            wrapper={
                <svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg" />
            }
            duration={2.5}
            repeat={-1}
            ease="Power0.easeNone"
            yoyo={true}
            from={{
                svgDraw: [1, 0],
            }}
            to={{
                svgDraw: [0, 0.5],
            }}
        >
            <path d="M0 0 L300 0" stroke="#db4848" strokeWidth="5" />
        </Tween>

        <Tween
            wrapper={
                <svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg" />
            }
            duration={2.5}
            repeat={-1}
            ease="Power0.easeNone"
            yoyo={true}
            from={{
                svgDraw: [1, 0],
            }}
            to={{
                svgDraw: [0, 0.5],
            }}
        >
            <path d="M0 400 L300 400" stroke="#db4848" strokeWidth="5" />
        </Tween>
        <Tween
            wrapper={
                <svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg" />
            }
            duration={2.5}
            repeat={-1}
            ease="Power0.easeNone"
            yoyo={true}
            to={{ scaleX: '0px', transformOrigin: "100% 0%" }}
        >
            <path d="M440 250 430 260 430 330 410 350 400 400 400 400 380 350 410 250 L440 50 " fill="#db4848" transform="scale(0.6,0.6) translate(-210,100)" />
        </Tween>

        <Tween
            wrapper={
                <svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg" />
            }
            duration={2.5}
            repeat={-1}
            ease="Power0.easeNone"
            yoyo={true}
            to={{ scaleX: '0px', transformOrigin: "100% 0%" }}
        >
            <path d="M400 400 380 350 410 250 440 50 440 250 430 260 430 330 410 350 L400 400" fill="#db4848" transform="scale(-0.6,0.6) translate(-710,100)" />
        </Tween>



        {/* <path d="M300 100 H100" stroke="black" strokeWidth="3">
      <animateTransform id="topAnim2" attributeName="transform" type="scale" from="1 1"
        to="0.1 1"
        dur="5s"
        repeatCount="indefinite" begin="topAnim1.end" />
    </path> */}

        {/* <path d="M300 100 V400" stroke="black" strokeWidth="3">
    <animateTransform id="anim2" attributeName="transform" type="translate" from="0 0"
        to="-100 0"
        begin="0s"
        dur="1s"
        repeatCount="indefinite" begin="anim1.end" /></path> */}
    </>
)

export default AnimatedCard;