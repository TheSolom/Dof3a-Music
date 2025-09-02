import app from './app.js';

const server = app.listen(process.env.PORT);

const exitHandler = () => {
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => {
    if (server) server.close();
});