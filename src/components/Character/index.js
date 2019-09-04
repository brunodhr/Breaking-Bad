import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import star from 'star.svg'

import * as S from './styles'

const Character = ({ data }) => {
  const spoiler = useSelector(state => state.spoiler.spoiler)
  return (
    <S.Container>
      <S.Card to={{ pathname: `/character/${data.char_id}`, state: { data } }}>
        {spoiler ? (
          <S.Status status={data.status}>
            {data.status === 'Alive' ? 'Vivo' : 'Morto'}
          </S.Status>
        ) : (
          ''
        )}
        <S.Banner src={data.img} />
        <S.Name>{data.name}</S.Name>
      </S.Card>
      <S.Infos>
        {data.birthday !== 'Unknown' ? (
          <S.BirthdayBox>
            <S.StyledStar src={star} alt='' />
            <S.Birthday>{data.birthday}</S.Birthday>
          </S.BirthdayBox>
        ) : (
          ''
        )}

        <S.Occupations>
          {data.occupation ? data.occupation.toString() : ''}
        </S.Occupations>
      </S.Infos>
    </S.Container>
  )
}

Character.defaultProps = {
  data: {}
}

Character.propTypes = {
  data: PropTypes.object
}

export default Character
