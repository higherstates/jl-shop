import React from 'react';
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from './responsive';

// Styled Components
const Container = styled.div`
  display: flex;
  padding: 1em;
  justify-content: space-between;

  ${mobile({ flexDirection: "column", padding: "0" })}
`


const Categories = () => {
  return (
  <Container>
    {categories.map(item => (
      <CategoryItem key={item.id} item={item}>
      </CategoryItem>
    ))}
  </Container>   
 
  );
}

export default Categories;
