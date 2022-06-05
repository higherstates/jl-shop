import styled from 'styled-components'
import { colors } from '../variables'
import { mobile, tablet } from '../components/responsive'

const Container = styled.div`
 width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://i.ibb.co/gR3K60k/11.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 1.5em;
  background-color: ${colors.whiteColor};
  ${tablet({ width: "50%" })}
  ${mobile({ width: "75%" })}
`

const Title = styled.h1`
  font-size: 2.2rem;
  text-transform: uppercase;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.5em 0;
  padding: 0.5em;
`

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 1em 1.2em;
  margin: 1em 0;
  background-color: ${colors.greenColor};
  color: ${colors.whiteColor};
  font-weight: 600;

`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Link = styled.a`
  margin: 0.2em 0.5em 0.5em 0;
  font-size: 0.8rem;
  white-space: nowrap;
  text-decoration: underline;
  cursor: pointer;
`



const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button>Log In</Button>
        </Form>
        <Links>
          <Link>Forgot Password</Link>
          <Link>Create New Account</Link>
        </Links>
      </Wrapper>
    </Container>
  );
}

export default Login;
