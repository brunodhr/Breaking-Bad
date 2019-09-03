import React from 'react'

import Layout from 'components/Layout'

import * as S from './styles'

const Profile = props => {
  const char = props.location.state.data
  return (
    <Layout showInput={false}>
      <S.Container>
        <img src={char.img} alt='' />
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
        <h1>Status</h1>
        <h3>{char.status === 'Alive' ? 'Vivo' : 'Morto'}</h3>
        <h1>Temporadas em que apareceu</h1>
        <h3>{char.appearance.toString()}</h3>
      </S.Container>
    </Layout>
  )
}

export default Profile
