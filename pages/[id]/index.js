import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';


const SongsForm = styled.div`
    display: flex; 
    flex-flow : column nowrap;
    max-width : 500px;
    margin: 0 auto;
`

const ButtonDelete = styled.button`
    background-color : #831010;
    width : 5rem;
    color: white;
`


const Song = ({ song }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteSong();
        }
    }, [isDeleting])

    const deleteSong = async () => {
        const songId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/songs/${songId}`, {
                method: "Delete"
            });

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
    }

    return (
        <div className="song-container">
                <SongsForm>
                    <h1>{song.title}</h1>
                    <p>{song.author}</p>
                    <p>{song.description}</p>
                    <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
                </SongsForm>
        </div>
        
    )
}

Song.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/songs/${id}`);
    const { data } = await res.json();

    return { song: data }
}

export default Song;