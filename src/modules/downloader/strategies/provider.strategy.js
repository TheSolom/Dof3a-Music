class providerStrategy {
    async downloadMedia (mediaId, filePath) {
        throw new Error('downloadMedia() must be implemented');
    }

    async getInfo (mediaId) {
        throw new Error('getInfo() must be implemented');
    }
}
export default providerStrategy;
