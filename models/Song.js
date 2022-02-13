const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Ajouter un titre'],
        unique: true,
        trim: true,
        maxlength: [40, 'Le titre ne doit pas comporter plus de 40 characteres']
    },
    author: {
        type: String,
        required: [true, 'Ajouter un auteur'],
        trim: true,
        maxlength: [50, 'Auteur ne doit pas comporter plus de 50 characteres']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'La description ne doit pas comporter plus de 40 characteres']
    },
    url_img: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.Song || mongoose.model('Song', SongSchema);