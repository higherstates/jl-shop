import { useState, useEffect } from 'react';
import styled from 'styled-components'
// import { popularProducts } from '../data';
import Product from '../components/Product'
import { mobile } from './responsive'
import axios from 'axios'



// Styled components
const Container = styled.div`
  margin: 2em auto;
  padding: 1em;
  max-width: 1600px;
  `

// const Title = styled.h1`
//   text-align: center;
//   font-size: 2.5rem;
//   text-transform: uppercase;
//   margin-bottom: 1em;
//   ${mobile({ fontSize: "1.7rem" })}
//   `

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`

const Products = ({ category, filters, sort }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( category 
          ? `http://localhost:5000/api/products?category=${category}` 
          : `http://localhost:5000/api/products`
        )
        setProducts(res.data)
      } catch (err) {
        console.log(`Fetch all items failed - ${err}`)
      }
    }
    getProducts()
  }, [category])

  const filterProducts = (products) => {
    if (!category) {
      return products
    }
    return products.filter(item =>
      Object.entries(filters).every(([key, value]) =>
      item[key].includes(value))
    )
  }

  const sortProducts = (products) => {
    switch (sort) {
      case "asc":
        return [...products].sort((a, b) => a.price - b.price)
      case "desc":
        return [...products].sort((a, b) => b.price - a.price)
      case "oldest":
        return [...products].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      case "latest":
        default:
        return [...products].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    }
  }

  return (
    <Container>
      <ProductsWrapper>
        {sortProducts(filterProducts(products)).map(item => (
            <Product item={item} key={item._id} />
        ))}
      </ProductsWrapper>
    </Container>
  );
}

export default Products;
