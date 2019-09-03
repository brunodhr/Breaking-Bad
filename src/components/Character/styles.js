import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 25%;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
  }
  @media (min-width: 426px) and (max-width: 1024px) {
    width: 50%;
  }
`
export const Card = styled(Link)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Banner = styled.img`
  height: 300px;
  width: 100%;
`

export const Name = styled.span`
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  left: 5%;
  bottom: 10px;
`

export const BirthdayBox = styled.div`
  padding: 5px;
`

export const Status = styled.span`
  background-color: ${props =>
    props.status === 'Alive' ? '#0D7842' : '#F56624'};
  border-radius: 5px 0 0 5px;
  position: absolute;
  right: 0;
  top: 10px;
  font-size: 14px;
  padding: 10px 30px;
`
export const Birthday = styled.span`
  font-size: 14px;
  padding: 10px;
`
export const Occupations = styled.span`
  font-size: 13px;
  color: #505050;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const StyledStar = styled.img`
  width: 15px;
  height: 15px;
  background-color: blue;
`
