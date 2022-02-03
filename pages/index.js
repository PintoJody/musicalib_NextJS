import styled from 'styled-components';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


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

const CardSong = styled.div`
  padding: 7rem 3rem;
  background: #831010;
  border-radius: 15px;
  box-shadow: 3px 3px 10px 3px #564D4D;
  color: white;
`

const Index = ({ songs }) => {
  return(
    <>
    <SearchForm>
      <form>
        <input id="search" name="search" type="text" placeholder='Titre, auteur, ...' />
        <button type="submitted">Rechercher</button>
      </form>
    </SearchForm>

    <Wrapper>
    {songs.map(song => {
          return (
          <CardsContainer>
          <CardSong>
            <h1>{song.title}</h1>
            <p>{song.author}</p>
            <p>{song.description}</p>

            <Link href={`/${song._id}`}>
              <a>View</a>
            </Link>
            <Link href={`/${song._id}/edit`}>
              <a>Edit</a>
            </Link>

          </CardSong>
      </CardsContainer>
        )
    }
    )
  }
    </Wrapper>
    </>
  )
}


Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/songs');
  const { data } = await res.json();

  return { songs: data }
}

export default Index;