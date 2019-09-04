import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.span`
  display: flex;
  padding: 10px;
  font-size: 17px;
  font-weight: bold;
`
export const Button = styled.button`
  cursor: pointer;
  color: #61dbfb;
  border: 2px solid #61dbfb;
  background-color: black;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  transition: 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`
export const Paginate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
