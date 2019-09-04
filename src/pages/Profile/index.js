import React from 'react'
import { useSelector } from 'react-redux'

import Layout from 'components/Layout'

import * as S from './styles'

const Profile = props => {
  const spoiler = useSelector(state => state.spoiler.spoiler)
  const char = props.location.state.data
  return (
    <Layout showInput={false}>
      <S.Wrapper>
        <S.Photo src={char.img} alt='' />
        <S.Container>
          <h1>Nome</h1>
          <h3>{char.name}</h3>
          {char.birthday !== 'Unknown' ? (
            <>
              <h1>Data de nascimento</h1>
              <h3>{char.birthday}</h3>
            </>
          ) : (
            ''
          )}

          <h1>Apelido</h1>
          <h3>{char.nickname}</h3>
          <h1>Profissões</h1>
          <h3>{char.occupation.toString()}</h3>
          <h1>Ator</h1>
          <h3>{char.portrayed}</h3>
          {spoiler ? (
            <>
              <h1>Status</h1>
              <h3>{char.status === 'Alive' ? 'Vivo' : 'Morto'}</h3>
              <h1>Temporadas</h1>
              <h3>{char.appearance.toString()}</h3>
            </>
          ) : (
            ''
          )}
        </S.Container>
      </S.Wrapper>
    </Layout>
  )
}

export default Profile
