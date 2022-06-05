import styled from 'styled-components'
import { colors } from '../variables'
import { mobile, tablet } from '../components/responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.3)), url("https://i.ibb.co/wJT87HT/10.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 45%;
  padding: 1.5em;
  background-color: ${colors.whiteColor};
  ${tablet({ width: "50%" })}
  ${mobile({ width: "80%" })}

`

const Title = styled.h1`
  font-size: 2.2rem;
  text-transform: uppercase;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1em 0.5em 0 0;
  padding: 0.5em;
`

const Agreement = styled.span`
  font-size: 0.8rem;
  margin: 1em 0;
`

const Checkbox = styled.input`
  margin-right: 0.5em;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1em 1.2em;
  background-color: ${colors.greenColor};
  color: ${colors.whiteColor};
  font-weight: 600;
`



const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name" required />
          <Input placeholder="Last Name" required />
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Password" type="password" required />
          <Input placeholder="Confirm Password" type="password" required />
          <Agreement>
            <Checkbox type="checkbox" required />
            By creating account, I consent to the processing of my personal data in accordance with the privacy policy.
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
