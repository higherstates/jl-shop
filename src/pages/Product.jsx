import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../variables";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile, tablet } from "../components/responsive";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
	height: 100vh;
	padding: 2em;
	display: flex;
	align-items: center;
	${tablet({ padding: "0.5em", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
	width: 55%;
	height: 80vh;
	${tablet({ width: "100%", height: "50vh" })}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* ${mobile({ height: "50%" })} */
`;

const InfoContainer = styled.div`
	width: 40%;
	padding: 0 1em 0 2em;
	${tablet({ width: "100%", height: "50vh", padding: "1em" })}
`;

const Title = styled.h1`
	font-weight: 300;
`;

const Desc = styled.p`
	margin: 1em 0;
	font-weight: 200;
	font-size: 0.9rem;
	${mobile({ fontSize: "0.8rem" })}
`;

const Price = styled.span`
	font-weight: 600;
	font-size: 1rem;
`;

const FilterContainer = styled.div`
	width: 100%;
	margin: 1.5em 0;
	display: flex;
	justify-content: space-between;
	${tablet({ margin: "1em 0", justifyContent: "flex-start" })}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	${tablet({ margin: "0.5em 1em 0.5em 0" })}
`;

const FilterTitle = styled.div`
	font-size: 1rem;
	font-weight: 200;
	margin-right: 0.5em;

	${tablet({ fontSize: "0.7rem" })}
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 0.5px solid #999;
	background-color: ${(props) => props.color};
	margin: 0 0.2em;
	cursor: pointer;
	${mobile({ width: "15px", height: "15px" })}
`;

const FilterSize = styled.select`
	margin-left: 0.5em;
	padding: 0.2em;
	${mobile({ fontSize: "0.7rem" })}
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	width: 100%;
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: flex-end;
	${tablet({ justifyContent: "space-evenly" })}
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
	cursor: pointer;
`;

const Amount = styled.span`
	width: 25px;
	height: 25px;
	font-size: 0.8rem;
	border-radius: 1px;
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0.2em;
`;

const Button = styled.button`
	padding: 1em;
	margin: 0 0 0 1em;
	border: 1px solid ${colors.blackColor};
	background-color: lightyellow;
	font-weight: 500;
	cursor: pointer;
	/* ${tablet({ margin: "1em 0 0" })} */

	transition: all 0.3s ease;

	&:hover {
		background-color: papayawhip;
	}
`;

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	const [product, setProducts] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get("/products/find/" + id);
				setProducts(res.data);
			} catch (err) {
				console.log(`Fetching product failed - ${err}`);
			}
		};
		getProduct();
	}, [id]);

	const handleQuantity = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	const handleClick = () => {
		// Update cart:
		dispatch(addProduct({ ...product, quantity, color, size }));
	};

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Img src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>{product.desc}</Desc>
					<Price>$ {product.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color?.map((c) => (
								<FilterColor color={c} key={c} onClick={() => setColor(c)} />
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={(e) => setSize(e.target.value)}>
								{product.size?.map((s) => (
									<FilterSizeOption key={s}>{s}</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<RemoveIcon
								style={{ fontSize: "1rem" }}
								onClick={() => handleQuantity("dec")}
							/>
							<Amount>{quantity}</Amount>
							<AddIcon
								style={{ fontSize: "1rem" }}
								onClick={() => handleQuantity("inc")}
							/>
						</AmountContainer>
						<Button onClick={handleClick}>Add To Cart</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
