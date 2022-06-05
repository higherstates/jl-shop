import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
// import Products from '../components/Products'
// import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile, tablet } from '../components/responsive'

const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 1em;
  ${tablet({ padding: "2em" })}
  ${mobile({ padding: "0.5em 1em" })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin: 1em 0 0.5em;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  ${tablet({ justifyContent: "center", padding: "0" })}
`

const TopButton = styled.button`
  padding: 0.5em;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border: ${props => props.type === 'filled' ? 'none' : '1px solid black'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
  ${tablet({ display: "none" })}
`

const TopTexts = styled.div`
  /* ${mobile({ display: 'flex', justifyContent: 'center', alignItems: 'center' })} */

`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 0.5em;
  ${tablet({ fontSize: "0.8rem" })}
  ${mobile({ fontSize: "0.7rem" })}
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  ${tablet({ flexDirection: "column" })}
`

const Info = styled.div`
  width: 60%;
  ${tablet({ width: "100%", display: "flex", flexDirection: "column" })}
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
`

const ProductDetail = styled.div`
  display: flex;
  ${mobile({ width: "100%" })}
`

const PriceDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Img = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  ${tablet({ width: "120px", height: "120px" })}

`

const Details = styled.div`
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${mobile({ width: "50%" })}
  `

const ProductName = styled.span`
  font-family: 'Couture', sans-serif;
  font-size: 0.95rem;
  ${tablet({ fontSize: "0.9rem" })}
  ${mobile({ fontSize: "0.7rem" })}
`

const ProductId = styled.span`
  font-size: 0.9rem;
  ${tablet({ fontSize: "0.8rem" })}
  ${mobile({ fontSize: "0.7rem" })}
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  /* ${mobile({ fontSize: "0.7rem" })} */
`

const ProductSize = styled.span`
  font-size: 0.9rem;
  ${tablet({ fontSize: "0.8rem" })}
  ${mobile({ fontSize: "0.7rem" })}
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`

const ProductAmount = styled.div`
  margin: 0.5em;
  font-size: 0.9rem;
  ${tablet({  fontSize: "0.8rem" })}
  ${mobile({ fontSize: "0.7rem" })}
`

const ProductPrice = styled.div`
  font-size: 0.9rem;
  font-weight: 200;
  margin-top: 0.3em;
  ${tablet({  fontSize: "0.8rem" })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  width: 29%;
  height: 50%;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 1em;
  ${tablet({ width: "100%", margin: "2em 0"})}
`

const SummaryTitle = styled.h2`
  font-size: 1.3rem;
  ${tablet({ fontSize: "1.2rem" })}
`

const SummaryItem = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "600"};
  font-size: ${props => props.type === "total" ? "1.1rem" : "0.9rem"};
  ${tablet({ fontSize: props => props.type !== "total" && "0.8rem" })}
`

const SummaryItemText = styled.span`
  ${tablet({ fontSize: "0.8rem" })}
`

const SummaryItemPrice = styled.span`
  margin: 0.2em 0;
`

const Button = styled.button`
  width: 100%;
  padding: 1em;
  background-color: #2666FA;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  border: none;
  border-radius: 10px;
`


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Shopping Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Img src="https://www.chanel.com/images/t_fashionzoom1/f_auto/open-shoes-black-patent-goatskin-patent-goatskin-packshot-artistique-vue3-g39048x5654494305-8851015893022.jpg"/>
                <Details>
                  <ProductName>CHANEL OPEN SHOES</ProductName>
                  <ProductId><b>ID: </b>828283010</ProductId>
                  <ProductSize><b>Size: </b>37.5</ProductSize>
                  <ProductColor color="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon style={{ fontSize: "1rem" }} />
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon style={{ fontSize: "1rem" }} />
                </ProductAmountContainer>
                <ProductPrice>
                  $ 1200
                </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Img src="https://www.chanel.com/images/t_fashionzoom1/f_auto/open-shoes-black-patent-goatskin-patent-goatskin-packshot-artistique-vue3-g39048x5654494305-8851015893022.jpg"/>
                <Details>
                  <ProductName>CHANEL OPEN SHOES</ProductName>
                  <ProductId><b>ID: </b>828283010</ProductId>
                  <ProductSize><b>Size: </b>37.5</ProductSize>
                  <ProductColor color="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon style={{ fontSize: "1rem" }} />
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon style={{ fontSize: "1rem" }} />
                </ProductAmountContainer>
                <ProductPrice>
                  $ 800
                </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
           <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 1500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 1500</SummaryItemPrice>
            </SummaryItem>
            <Button>Proceed To Checkout →</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart