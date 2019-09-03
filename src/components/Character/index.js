import React from 'react'
import PropTypes from 'prop-types'
import star from 'star.svg'

import * as S from './styles'

const Character = ({ img, name, birthday, occupation, status }) => {
  return (
    <S.Container>
      <S.Card to='/character/:id'>
        <S.Status status={status}>
          {status === 'Alive' ? 'Vivo' : 'Morto'}
        </S.Status>
        <S.Banner src={img} />
        <S.Name>{name}</S.Name>
      </S.Card>
      <S.Infos>
        {birthday !== 'Unknown' ? (
          <S.BirthdayBox>
            <S.StyledStar src={star} alt='' />
            <S.Birthday>{birthday !== 'Unknown' ? birthday : ''}</S.Birthday>
          </S.BirthdayBox>
        ) : (
          ''
        )}

        <S.Occupations>
          {occupation.map(o => (
            <>{o}, </>
          ))}
        </S.Occupations>
      </S.Infos>
    </S.Container>
  )
}

Character.defaultProps = {
  children: '',
  img: '',
  name: '',
  birthday: ''
}

Character.propTypes = {
  children: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  birthday: PropTypes.string
}

export default Character
