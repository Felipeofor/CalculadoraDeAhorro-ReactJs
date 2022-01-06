import styled from 'styled-components'

const Nav = styled.nav`
    background: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
`

const Span = styled.span`   
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
`

const Navbar = () => {
    return(
        <Nav>
          <Span>Calculadora de ahorro</Span>
        </Nav>
    )
}

export default Navbar;