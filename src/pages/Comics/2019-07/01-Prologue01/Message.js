// @flow
import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const BackgroundSvg = styled.svg`
background-color:"black";
position: absolute;
z-index: -1;
top: 0;
left: 0;
@media (max-height: 760px) {
	height: 510%;
}
@media (max-width: 600px) {
	height: 600%;
}
`

const appearH1 = keyframes`
to {
	opacity: 1;
}
`

const TweenStyled = styled.div`

h1{
	color: white;
	left: 40%;
	position: absolute;
	opacity: 0;
	animation: ${appearH1} 2s forwards;
	animation-delay: 2s;
	@media (max-width: 600px) {
		left: 20%;
	}
}
background-color: black;
.introBlank {
  height: 600px;
  }

.textBlank {
    height: 30px;
    }
  
.flex-container {
  padding: 0 25% 0 25%;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  opacity: 0;
	left: (50% - 100px);
	
	@media (max-width: 600px) {
		padding: 0% 5% 0% 5%;
  }
}

.sent {
  border-radius: 25px;
  background: blue;
  padding: 15px;
  margin: 5px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: right;
  display:inline-block;
  align-self: flex-end; 
  @media (max-width: 600px) {
	font-size: 15px;
}
}

.recieved {
  border-radius: 25px;
  background: grey;
  padding: 15px;
  margin: 5px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  display:inline-block;
  align-self: flex-start;
  @media (max-width: 600px) {
	font-size: 15px;
}
}

.connection {
  padding: 15px;
  margin: 5px;
  color: gray;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  display:inline-block;
  align-self: center;
}
`
const TweenComponent = () => (
	<>
		<BackgroundSvg width="100%" height="330%">
			<rect fill="black" height="100%" width="100%" />
		</BackgroundSvg>
		<TweenStyled>
		<div className="textBlank" />

		<h1>Scroll to begin</h1>
			<div className="introBlank" />

			<div id="trigger0" />
			<Controller>
				<Scene
					triggerElement="#trigger0"
					duration={100}
				>
					{(progress) => (
						<Tween
							to={{
								opacity: "1",
							}}
							ease="ease.easeIn"
							totalProgress={progress}
							paused
						>
							<ul class="flex-container">
								<li class="connection">Connection Established at 22:14pm.</li>
							</ul>

						</Tween>
					)}
				</Scene>
				<div id="trigger" />


				<Scene
					triggerElement="#trigger"
					duration={100}
				>
					{(progress) => (
						<Tween
							to={{
								opacity: "1",
							}}
							ease="ease.easeIn"
							totalProgress={progress}
							paused
						>
							<ul class="flex-container">
								<li class="sent">Hear anything?</li>
							</ul>

						</Tween>
					)}
				</Scene>

				<div className="textBlank" />
				<div id="trigger2" />

				<Scene
					triggerElement="#trigger2"
					duration={100}
				>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused
					>
						<ul class="flex-container">
							<li class="recieved">missed their past two scheduled check-ins.</li>
						</ul>

					</Tween>
					)}
				</Scene>

				<div className="textBlank" />
				<div id="trigger3" />
				<Scene triggerElement="#trigger3" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="sent">This isn't normal codrum</li>
						</ul></Tween>
					)}</Scene>

				<div className="textBlank" />
				<div id="trigger4" />
				<Scene triggerElement="#trigger4" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="recieved">i get you but it's prolly fine. its the a-team like.</li>
						</ul></Tween>
					)}</Scene>

				<div id="trigger5" />
				<Scene triggerElement="#trigger5" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="recieved">I'm fine too btw</li>
						</ul></Tween>
					)}</Scene>

				<div className="textBlank" />
				<div id="trigger6" />
				<Scene triggerElement="#trigger6" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="sent">mmhmm sure</li>
						</ul></Tween>
					)}</Scene>

				<div id="trigger7" />
				<Scene triggerElement="#trigger7" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="sent">I didn't ask becuase I'll be honest<br /> I don't care</li>
						</ul></Tween>
					)}</Scene>

				<div className="textBlank" />
				<div id="trigger8" />
				<Scene triggerElement="#trigger8" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="recieved">I can't believe you said that</li>
						</ul></Tween>
					)}</Scene>

				<div id="trigger9" />
				<Scene triggerElement="#trigger9" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="recieved">me out here on the edge of space</li>
						</ul></Tween>
					)}</Scene>
				<div className="textBlank" />

				<div id="trigger10" />
				<Scene triggerElement="#trigger10" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="sent">2 parsecs away but whatever</li>
						</ul></Tween>
					)}</Scene>

				<div id="trigger11" />
				<Scene triggerElement="#trigger11" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="recieved">doing my part, keeping the peace.</li>
						</ul></Tween>
					)}</Scene>
				<div className="textBlank" />

				<div id="trigger12" />
				<Scene triggerElement="#trigger12" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="sent">wheres your patrol reports from last month?</li>
						</ul></Tween>
					)}</Scene>

				<div className="textBlank" />

				<div id="trigger13" />
				<Scene triggerElement="#trigger13" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="sent">Codrum?</li>
						</ul></Tween>
					)}</Scene>

				<div className="textBlank" />
				<div id="trigger14" />
				<Scene triggerElement="#trigger14" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="sent">You're literally sitting on your ass.</li>
						</ul></Tween>
					)}</Scene>

				<div id="trigger15" />
				<Scene triggerElement="#trigger15" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="sent">Just let me know the second you hear from them.<br />
								Unlike your half-assed reports this is serious, ok?</li></ul></Tween>
					)}</Scene>

				<div className="textBlank" />
				<div id="trigger16" />
				<Scene triggerElement="#trigger16" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="recieved">Roger that boss.</li>
						</ul></Tween>
					)}</Scene>

				<div id="trigger17" />
				<Scene triggerElement="#trigger17" duration={100}>
					{(progress) => (<Tween
						to={{
							opacity: "1",
						}}
						ease="ease.easeIn"
						totalProgress={progress}
						paused>
						<ul class="flex-container">
							<li class="recieved">Reaching the minute mark, closing the connection.</li>
						</ul></Tween>
					)}</Scene>
				<div className="textBlank" />
				<div id="trigger18" />
				<Scene
					triggerElement="#trigger18"
					duration={100}
				>
					{(progress) => (
						<Tween
							to={{
								opacity: "1",
							}}
							ease="ease.easeIn"
							totalProgress={progress}
							paused
						>
							<ul class="flex-container">
								<li class="connection">Connection closed at 22:15pm.<br />Conversation length: 56s</li>
							</ul>

						</Tween>
					)}
				</Scene>

				<div className="introBlank" />
			</Controller>
		</TweenStyled>

	</>
);

export default TweenComponent;
