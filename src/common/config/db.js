import { connect, disconnect } from 'mongoose';

export default async () => {
    try {
        await connect(process.env.MONGODB_URI);
    } finally {
        await disconnect();
    }
};
