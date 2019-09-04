import styled from 'styled-components'

export const WrapperToogle = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 16px;
  > input {
    display: none;
  }
`

export const Toogle = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f56624;
  trasition: 0.4s;
  border-radius: 15px;
  &:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    background-color: #61dbfb;
    transition: 0.2s;
    border-radius: 50%;
  }
`

export const SliderToogle = styled.input`
  &:checked + ${Toogle} {
    background-color: #0d7842;
    &:before {
      transform: translateX(15px);
      background-color: #61dbfb;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled.span`
  margin-left: 10px;
  color: #61dbfb;
`
