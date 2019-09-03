import React from 'react'

import Menu from 'components/Menu'

import * as S from './styles'

const Layout = ({ children, showInput }) => (
  <>
    <S.Container>
      <Menu showInput={showInput} />
      {children}
    </S.Container>
  </>
)

export default Layout
