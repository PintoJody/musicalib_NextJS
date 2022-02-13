import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Image from 'next/image';


const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 7rem 3rem
`

const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem
`

const CardSong = styled.div`
  padding: 3rem 2rem;
  background: #831010;
  border-radius: 15px;
  color: white;
  width: 15%;
`

const CardAdd = styled.div`
  padding: 4rem 2rem;
  background: grey;
  border-radius: 15px;
  color: black;
  width: 15%;
`


const Index = ({ songs }) => {
  return(
    <>
    
    <Wrapper>
      <CardsContainer>
        <CardAdd>
          <Link href="/new">
            <a>Ajouter</a>
          </Link>
        </CardAdd>
          {songs.map(song => {
          return (
            <CardSong>
              <img src={song.url_img} />
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
        )
    }
    )
  }
      </CardsContainer>
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