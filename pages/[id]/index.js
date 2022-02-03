import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
                <>
                    <h1>{song.title}</h1>
                    <p>{song.author}</p>
                    <p>{song.description}</p>
                    <button color='red' onClick={handleDelete}>Delete</button>
                </>
        </div>
        
    )
}

Song.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/songs/${id}`);
    const { data } = await res.json();

    return { song: data }
}

export default Song;