import React, { useEffect } from 'react'
import Character from 'components/Character'
import { useDispatch, useSelector } from 'react-redux'

import { getCharacters } from 'store/thunks/characters'

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
      {loading ? (
        'Carregando'
      ) : (
        <>
          {characters &&
            characters.map(character => (
              <Character>{character.name}</Character>
            ))}
        </>
      )}
    </>
  )
}

export default Characters
