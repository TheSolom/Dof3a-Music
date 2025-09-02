import { Schema, model } from 'mongoose';

const songsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        artists: {
            type: Array,
            default: [],
            required: true,
            trim: true,
        },
        album: {
            type: String,
            default: null,
            trim: true,
        },
        genre: {
            type: String,
            default: null,
            trim: true,
        },
        source: {
            type: String,
            enum: ['YouTube', 'Local'],
            default: 'YouTube',
        },
        externalId: {
            type: String,
            required: true,
            unique: true,
        },
        duration: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true
    }
);

export default model('Songs', songsSchema);
