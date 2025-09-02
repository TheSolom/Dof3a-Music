import { Schema, Types, model } from 'mongoose';

const playsSchema = new Schema(
    {
        userId: { type: Types.ObjectId, ref: 'Users' },
        songId: { type: Types.ObjectId, ref: 'Songs' },
    },
    {
        timestamps: true
    }
);

export default model('Plays', playsSchema);
