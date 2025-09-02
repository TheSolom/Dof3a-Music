class SongsService {
    #SongsModel;

    constructor(SongsModel) {
        this.#SongsModel = SongsModel;
    }

    async createSong (data) {
        return await this.#SongsModel.create(data);
    }

    async getAllSongs () {
        return await this.#SongsModel.find();
    }

    async findOrCreate (songData) {
        let song = await this.#SongsModel.findOne({ externalId: songData.externalId });
        if (!song)
            song = await this.#SongsModel.create(songData);

        return song;
    }
}
export default SongsService;