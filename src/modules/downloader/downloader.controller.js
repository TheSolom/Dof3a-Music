import path from 'path';
import { fileURLToPath } from 'url';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DownloaderController {
    #downloaderService;

    constructor(downloaderService) {
        this.#downloaderService = downloaderService;
    }

    async download (req, res, next) {
        const { mediaId } = req.params;

        if (!mediaId)
            return next(new createError.BadRequest('Invalid media ID format'));

        const filePath = path.join(__dirname, process.env.DOWNLOAD_DIR, `${ mediaId }.mp3`);

        try {
            const result = await this.#downloaderService.download(mediaId, filePath);

            return res.status(StatusCodes.CREATED).json({
                filePath: result.filePath,
                cached: result.cached,
            });
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Download failed:\n', err);
            return next(new createError.InternalServerError('Download failed'));
        }
    }

    async getInfo (req, res, next) {
        const { mediaId } = req.params;

        if (!mediaId)
            return next(new createError.BadRequest('Invalid media ID format'));

        try {
            const info = await this.#downloaderService.getInfo(mediaId);
            return res.status(StatusCodes.OK).json(info);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Failed to retrieve media info:\n', err);
            return next(new createError.InternalServerError('Failed to retrieve media info'));
        }
    }
}
export default DownloaderController;
