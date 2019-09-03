import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from 'store/thunks/characters'

import Layout from 'components/Layout'
import Character from 'components/Character'

import * as S from './styles'

const Characters = () => {
  const characters = useSelector(state => state.characters.characters)
  const loading = useSelector(state => state.characters.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  useEffect(() => {
    console.log(characters)
  }, [characters])

  return (
    <>
      <Layout>
        <S.Title>Personagens</S.Title>
        {loading ? (
          'Carregando'
        ) : (
          <S.Container>
            {characters &&
              characters.map(character => (
                <Character
                  img={character.img}
                  name={character.name}
                  status={character.status}
                  birthday={character.birthday}
                  occupation={character.occupation}
                />
              ))}
          </S.Container>
        )}
      </Layout>
    </>
  )
}

export default Characters
