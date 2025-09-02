import container from '../../common/core/container.js';
import YouTubeProviderStrategy from './strategies/youtubeProvider.strategy.js';
import DownloaderService from './downloader.service.js';
import DownloaderController from './downloader.controller.js';

const youtubeProvider = new YouTubeProviderStrategy();
container.register('youtubeProvider', youtubeProvider);

const downloaderService = new DownloaderService(youtubeProvider);
container.register('downloaderService', downloaderService);

const downloaderController = new DownloaderController(downloaderService);
container.register('downloaderController', downloaderController);

export { downloaderService, downloaderController };