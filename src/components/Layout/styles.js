import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
  max-height: 100%;
  padding: 0 20%;
  @media (min-width: 320px) and (max-width: 425px) {
    padding: 5px;
  }
`

export const StyledLogo = styled.img`
  width: 80px;
  height: 80px;
`

export const StyledInput = styled.input`
  height: 30px;
  width: 100%;
  max-width: 300px;
  padding: 10px;
  background-color: #000;
  border: none;
  border-bottom: 1px solid #505050;
  color: white;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
