import React from 'react'
import styled from 'styled-components'
import { colors } from '../variables';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ExploreIcon from '@mui/icons-material/Explore';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import { mobile } from './responsive';



// Styled components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  padding: 1em;
  margin-top: 2em;
  box-shadow: 0 -3px 10px -8px rgba(51, 51, 51, 0.22);
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em;
`

const Logo = styled.h1`
  font-size: 1.2rem;
`

const Desc = styled.p`
  margin: 1em 0;
  font-weight: 200;
  font-size: 0.75rem;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${colors.whiteColor};
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;
`

const Center = styled.div`
  flex: 1;
  padding: 1em;
`

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8em;
  text-transform: uppercase;
  white-space: nowrap;
  ${mobile({ fontSize:'1.1rem' })}
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  `

const ListItem = styled.li`
  font-size: 0.75rem;
  font-weight: 200;
  width: 45%;
  margin-bottom: 0.5em;
`

const Right = styled.div`
  flex: 1;
  padding: 1em;
`

const ContactItem = styled.div`
  margin-bottom: 0.6em;
  display: flex;
  align-items: center;
  font-weight: 200;
  font-size: 0.75rem;
`

const Payment = styled.img`
  width: 60%;
`




const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>J&L</Logo>
        <Desc>J&L is an internation B2C e-commerce fashion company. J&L mainly focuses on high quality products from high-end to casual brands. J&L mainly targets America, Europe, Asia, Australia along with other consumer markets.</Desc>
        <SocialContainer>
          <SocialIcon color="#257ffad9">
            <FacebookRoundedIcon />
          </SocialIcon>
          <SocialIcon color="#b088f9d9">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#db2d43d9">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Explore J&L</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <ExploreIcon style={{ marginRight: "10px", fontSize: "1.1rem" }}/> 369 Pacific Street, San Francisco, CA 91432</ContactItem>
        <ContactItem><CallIcon style={{ marginRight: "10px", fontSize: "1.1rem" }} /> +1 234 5678</ContactItem>
        <ContactItem><AlternateEmailIcon style={{ marginRight: "10px", fontSize: "1.1rem" }} /> contact@jlappearal.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer