import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile, tablet } from '../components/responsive'


const Container = styled.div``

const Title = styled.h1`
  margin: 2em 1em 1em;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ justifyContent: "flex-start" })}
`

const Filter = styled.div`
  margin: 1em;
  ${tablet({ width: "30%", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  margin: 0 0.5em 0.5em 0;
  ${mobile({ fontSize: "0.9rem" })}

`
const Select = styled.select`
  padding: 0.3em;
  font-size: 0.8rem;
  margin: 0 0.5em 0.5em 0;
  ${mobile({ fontSize: "0.7rem" })}
`

const Option = styled.option``


const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("latest");

  const handleFilters = (e) => {
    const value = e.target.value
    // When choosing default value, show all products:
    if (value === "") {
      setFilters({})
    } else {
      setFilters({
        ...filters,
        [e.target.name]: value,
      })
    }
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option value="">All Color</Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="brown">Brown</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option value="">All Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>36</Option>
            <Option>37</Option>
            <Option>38</Option>
            <Option>39</Option>
            <Option>40</Option>
            <Option>41</Option>
            <Option>42</Option>
            <Option>43</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select name="sort" onChange={(e) => setSort(e.target.value)} >
            <Option value="latest">Latest</Option>
            <Option value="oldest">Oldest</Option>
            <Option value="asc">Price ↑ (Low to High)</Option>
            <Option value="desc">Price ↓ (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
