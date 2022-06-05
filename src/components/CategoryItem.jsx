import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { colors } from '../variables'
import { mobile } from './responsive';

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 1em;
  height: 70vh;
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: ${colors.whiteColor};
  margin-bottom: 1em;
  ${mobile({ fontSize: "1.5rem" })}

`

const Button = styled.button`
  border: none;
  padding: 1em;
  background-color: ${colors.whiteColor};
  color: ${colors.greenColor};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`



const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Img src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
