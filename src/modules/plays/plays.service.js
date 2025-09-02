import { Types } from 'mongoose';

class PlaysService {
    #playsModel;
    #songsModel;

    constructor(playsModel, songsModel) {
        this.#playsModel = playsModel;
        this.#songsModel = songsModel;
    }

    async logPlay (playData) {
        let songDoc = await this.#songsModel.findOne({ externalId: playData.song.externalId });
        if (!songDoc)
            songDoc = await this.#songsModel.create(playData.song);

        const play = await this.#playsModel.create({
            userId: Types.ObjectId(playData.userId),
            songId: songDoc._id,
        });

        return play;
    }

    async getTopSongs (userId) {
        const LIMIT = 30;

        return await this.#playsModel.aggregate([
            { $match: { userId: Types.ObjectId(userId) } },
            { $group: { _id: '$songId', playCount: { $sum: 1 } } },
            { $sort: { playCount: -1 } },
            { $limit: LIMIT },
            {
                $lookup: {
                    from: 'songs',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'song',
                },
            },
            { $unwind: '$song' },
            {
                $project: {
                    _id: 0,
                    songId: '$_id',
                    title: '$song.title',
                    artist: '$song.artist',
                    playCount: 1,
                },
            },
        ]);
    }
}
export default PlaysService;