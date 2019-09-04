import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from 'logo.svg'

import Toogle from 'components/Toogle'

import * as S from './styles'

const Menu = ({ showLink, showInput }) => {
  return (
    <S.Menu>
      <Link to='/'>
        <S.StyledLogo src={logo} alt='logo' />
      </Link>
      <Toogle />
      {showLink ? <S.StyledLink to='/'>Characters</S.StyledLink> : ''}
      {showInput ? <S.StyledInput placeholder='Pesquise os personagens' /> : ''}
    </S.Menu>
  )
}

Menu.defaultProps = {
  showInput: true,
  showLink: true
}

Menu.propTypes = {
  showInput: PropTypes.bool,
  showLink: PropTypes.bool
}

export default Menu
