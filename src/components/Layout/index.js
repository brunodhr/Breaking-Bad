import React from 'react'

import Menu from 'components/Menu'

import * as S from './styles'

const Layout = ({ children, showLink, showInput }) => (
  <>
    <S.Container>
      <Menu showLink={showLink} showInput={showInput} />
      {children}
    </S.Container>
  </>
)

export default Layout
