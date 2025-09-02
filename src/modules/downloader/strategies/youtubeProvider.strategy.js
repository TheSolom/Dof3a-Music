import ytdlp from 'yt-dlp-exec';
import providerStrategy from './provider.strategy.js';

class YouTubeProviderStrategy extends providerStrategy {
    async downloadMedia (mediaId, filePath) {
        const url = `https://www.youtube.com/watch?v=${ mediaId }`;

        await ytdlp(url, {
            extractAudio: true,
            audioFormat: 'mp3',
            audioQuality: 0,
            output: filePath || process.env.DOWNLOAD_DIR,
            ffmpegLocation: process.env.FFMPEG_PATH || 'ffmpeg',
            noCheckCertificates: true,
            noWarnings: true,
            preferFreeFormats: true,
            retries: 3,
            fragmentRetries: 3,
            noPlaylist: true,
            verbose: false,
        });

        return { filePath, cached: false };
    }

    async getInfo (mediaId) {
        const url = `https://www.youtube.com/watch?v=${ mediaId }`;

        const result = await ytdlp.exec(url, {
            dumpJson: true,
            noWarnings: true
        });

        return JSON.parse(result.stdout);
    }
}
export default YouTubeProviderStrategy;
