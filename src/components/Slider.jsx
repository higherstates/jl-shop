import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../variables";
import { sliderItems } from "../data";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { mobile, tablet } from "./responsive";

// Styled Components:
const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	background-color: ${colors.yellowColor};
	position: relative;
	overflow: hidden;

	${mobile({ display: "none" })}
`;

const Arrow = styled.div`
	width: 40px;
	height: 40px;
	background-color: ${colors.whiteColor};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: ${(props) => props.direction === "left" && "3%"};
	right: ${(props) => props.direction === "right" && "3%"};
	bottom: 0;
	margin: auto;
	cursor: pointer;
	opacity: 0.3;
	overflow: hidden;
	z-index: 2;

	&:hover {
		opacity: 0.7;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: all 1.5s ease;
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #${(props) => props.bg};
	${tablet({ flexDirection: "column" })}
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	${tablet({ width: "100%", height: "65%" })}
`;

const Img = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

const InfoContainer = styled.div`
	/* flex: 1; */
	padding: 2em;
	width: 40%;
	/* display: flex; */
	/* flex-direction: column; */
	${tablet({
		width: "100%",
		height: "35%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	})}
`;

const Title = styled.h1`
	font-size: 3.5rem;
	text-transform: uppercase;
	${tablet({ fontSize: "1.9rem" })}
`;

// const SubText = styled.div`
//   /* ${tablet({ padding: "0 0 0 1em"})} */
// `

const Description = styled.p`
	margin: 2em 0;
	font-size: 1.3rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 2px;
	${tablet({ fontSize: "0.9rem", marginTop: "0" })}
`;

const Button = styled.button`
	border: 1px solid ${colors.blackColor};
	padding: 1em;
	background-color: transparent;
	/* color: ${colors.greenColor}; */
	font-weight: 600;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id} bg={item.bg}>
						<ImgContainer>
							<Img src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Description>{item.desc}</Description>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
