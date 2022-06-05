import React from 'react'
import { colors } from '../variables'
import styled from 'styled-components'
import { mobile, tablet } from './responsive'

const Container = styled.div`
  height: 30px;
  background-color: ${colors.greenColor};
  color: ${colors.whiteColor};
  padding: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet({ fontSize: "0.85rem" })}
  ${mobile({ fontSize: "0.7rem" })}
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Worldwide Shipping on Orders Over $100
    </Container>
  )
}

export default Announcement