import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { colors } from '../variables';
import { mobile } from './responsive';

// Styled components
const Container = styled.div`
  height: 50vh;
  /* background-color: #fcf5f5; */
  background: linear-gradient( to left, rgba(38, 126, 1, 0.4), rgba(38, 120, 50, 0.8)), url('https://i.ibb.co/s3jcwDV/clip-1.webp');
  background-size: cover;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.whiteColor};
  text-shadow: 0 0 5px gray;
  ${mobile({ fontSize: '1.9rem' })}
`

const Desc = styled.p`
  font-weight: 300;
  margin-bottom: 1em;
  color: ${colors.whiteColor};
  ${mobile({ textAlign: 'center', fontSize: '0.8rem' })}
`

const InputContainer = styled.div`
  width: 45%;
  height: 35px;
  background-color: ${colors.whiteColor};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '70%', height: '30px' })}
  `

const Input = styled.input`
  color: ${colors.greenColor};
  border: none;
  border-radius: 10px;
  flex: 8;
  padding: 0.7em;
`

const Button = styled.button`
  border: none;
  border-radius: 0 10px 10px 0;
  flex: 1;
  background-color: ${colors.greenColor};
`


const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email Address" />
        <Button> 
          <SendIcon style={{color:"white"}} />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter