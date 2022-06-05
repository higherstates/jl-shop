import React from "react";
import { colors } from "../variables";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { mobile, tablet } from "./responsive";
import { useSelector } from "react-redux";

// Styled Components
const Nav = styled.nav`
	padding: 1em 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({ padding: "1em" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 0.9rem;
	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 1px solid ${colors.lightGreenColor};
	border-radius: 20px;
	display: flex;
	align-items: center;
	margin-left: 1.5em;
	padding: 0.2em 0.3em;
	${mobile({ marginLeft: "0" })}
`;

const Input = styled.input`
	border: none;
	outline: none;
	color: ${colors.greenColor};
	${mobile({ width: "45px", fontSize: "0.6rem" })}
	${tablet({ width: "60px" })}
`;

const Center = styled.div`
	width: auto;
	text-align: center;
`;

const Logo = styled.h1`
	font-size: 2rem;
	${mobile({ fontSize: "1.5rem" })}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 0.9rem;
	cursor: pointer;
	margin-left: 1em;
	${mobile({ fontSize: "0.6rem" })}
`;

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);

	return (
		// <Container>
		<Nav>
			<Left>
				<Language>EN</Language>
				<SearchContainer>
					<SearchIcon style={{ color: colors.pinkColor, fontSize: "1rem" }} />
					<Input placeholder="Search" />
				</SearchContainer>
			</Left>
			<Center>
				<Logo>J&L</Logo>
			</Center>
			<Right>
				<MenuItem>Register</MenuItem>
				<MenuItem>Sign In</MenuItem>
				<MenuItem>
					<Badge
						badgeContent={quantity}
						color="primary"
						style={{ fontSize: "10px" }}
						sx={{
							[`& .${badgeClasses.badge}`]: {
								minWidth: "auto",
								width: "17px",
								height: "17px",
								borderRadius: "50%",
								fontSize: "0.65rem",
							},
						}}
					>
						<ShoppingBagOutlinedIcon
							style={{ fontSize: "1.1rem" }}
							color="action"
						/>
					</Badge>
				</MenuItem>
			</Right>
		</Nav>
		// </Container>
	);
};

export default Navbar;
