import fs from 'fs/promises';
import path from 'path';

class DownloaderService {
    #providerStrategy;

    constructor(providerStrategy) {
        this.#providerStrategy = providerStrategy;
    }

    async download (mediaId, filePath) {
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });

        try {
            await fs.access(filePath);
            return { filePath, cached: true };
        } catch {
            // File doesn't exist, proceed with download
        }

        return await this.#providerStrategy.downloadMedia(mediaId, filePath);
    }

    async getInfo (mediaId) {
        return await this.#providerStrategy.getInfo(mediaId);
    }
}
export default DownloaderService;
