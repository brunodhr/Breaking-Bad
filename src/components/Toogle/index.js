import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { alternateSpoiler } from 'store/thunks/spoiler'

import * as S from './styles'

const Toogle = () => {
  const spoiler = useSelector(state => state.spoiler.spoiler)
  const dispatch = useDispatch()

  function toogle() {
    dispatch(alternateSpoiler(!spoiler))
  }

  return (
    <S.Container>
      <S.WrapperToogle>
        <S.SliderToogle type='checkbox' defaultChecked={spoiler} />
        <S.Toogle onClick={toogle} />
      </S.WrapperToogle>
      <S.Text>Spoiler</S.Text>
    </S.Container>
  )
}

export default Toogle
