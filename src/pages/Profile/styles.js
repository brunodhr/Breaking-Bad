import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  h1 {
    color: #61dbfb;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 20px;
    }
    h3 {
      font-size: 15px;
    }
  }
`
export const StyledLink = styled(Link)``

export const Photo = styled.img`
  height: 300px;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 70%;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
