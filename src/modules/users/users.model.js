import { Schema, model } from 'mongoose';

const usersSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        name: String,
    },
    {
        timestamps: true
    }
);

export default model('Users', usersSchema);
