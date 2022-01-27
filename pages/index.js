import styled from 'styled-components'
import Link from 'next/link'


const Title1 = styled.h1`
  font-size: 2rem;
  background: black;
  text-align:center;
  color: white;
`

const SearchForm = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 4rem 4rem 0 0;
`

const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 7rem 3rem
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-flow : row wrap;
`

const CardLink = styled.a`
  padding: 7rem 3rem;
  background: #831010;
  border-radius: 15px;
  box-shadow: 3px 3px 10px 3px #564D4D;
  color: white;
`

export default function Home() {
  return(
    <>
    <Title1>Musicalib</Title1>
    
    <SearchForm>
      <form>
        <input id="search" name="search" type="text" placeholder='Titre, auteur, ...' />
        <button type="submitted">Rechercher</button>
      </form>
    </SearchForm>

    <Wrapper>
      <CardsContainer>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
        <Link href="/">
          <CardLink>Carte Musique</CardLink>
        </Link>
      </CardsContainer>
    </Wrapper>

    </>
  )
}
