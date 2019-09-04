import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
  }
`

export const StyledLogo = styled.img`
  width: 80px;
  height: 80px;
  transition: 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

export const StyledInput = styled.input`
  height: 30px;
  width: 100%;
  max-width: 300px;
  padding: 10px;
  background-color: #000;
  border: none;
  border-bottom: 1px solid #505050;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #61dbfb;
  transition: 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    padding: 20px;
  }
`
