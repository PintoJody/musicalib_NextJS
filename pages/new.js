import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const SongsForm = styled.div`
    display: flex; 
    flex-flow: column nowrap; 
    max-width : 600px;
    margin: 0 auto;
`

const NewSong = () => {
    const [form, setForm] = useState({ title: '', author: '', description: '', url_img: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createSong();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createSong = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/songs', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        if (!form.title) {
            err.title = 'Title is required';
        }
        if (!form.author) {
            err.author = 'Title is required';
        }
        if (!form.description) {
            err.description = 'Description is required';
        }
        if (!form.url_img) {
            err.url_img = 'url_img is required';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Create Song</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titre</label>
                <input id="title" name="title" type="text" autoComplete="title" onChange={handleChange} required />

                <label htmlFor="author">Auteur</label>
                <input id="author" name="author" type="text" autoComplete="author" onChange={handleChange} required />

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" type="textarea" autoComplete="description" onChange={handleChange} required />

                <label htmlFor="url_img">URL image</label>
                <textarea id="url_img" name="url_img" type="url" autoComplete="image_url" onChange={handleChange} required />

                 <button type="submit">Ajouter</button>
            </form>
            </div>
        </div>
    )
}

export default NewSong;