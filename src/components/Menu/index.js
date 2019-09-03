import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from 'logo.svg'

import * as S from './styles'

const Menu = ({ showInput }) => (
  <S.Menu>
    <Link to='/'>
      <S.StyledLogo src={logo} alt='logo' />
    </Link>
    {showInput ? <S.StyledInput placeholder='Pesquise os personagens' /> : ''}
  </S.Menu>
)

Menu.defaultProps = {
  showInput: true
}

Menu.propTypes = {
  showInput: PropTypes.bool
}

export default Menu
