import React from 'react'
import logo from 'logo.svg'
import * as S from './styles'

const Layout = ({ children }) => (
  <>
    <S.Container>
      <S.Menu>
        <S.StyledLogo src={logo} alt='logo' />
        <S.StyledInput placeholder='Pesquise os personagens' />
      </S.Menu>
      {children}
    </S.Container>
  </>
)

export default Layout
