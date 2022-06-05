import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { colors } from '../variables';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Styled components
const Container = styled.div`
  flex: 1;
  margin: 1em;
  min-width: 250px;
  max-width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.08); */
  position: relative;
  `

const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  /* background-color: ${colors.whiteColor}; */
  position: absolute;
  `

const Img = styled.img`
  height: 77%;
  z-index: 2;
`

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2em;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.lightGreenColor};
    transform: scale(1.1);
  }
`


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Img src={item.img} />
      <Info>
        <Icon>
          <AddShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
