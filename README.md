# Dof3a-Music

A Node.js backend service for music downloading and metadata archiving, built with Express and MongoDB.

## Features

- YouTube music download and streaming
- Play history tracking
- Song metadata tracking
- User management system

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- yt-dlp for media handling

## Prerequisites

- Node.js v18 or higher
- MongoDB instance

## Installation

1. Clone the repository:

```bash
git clone https://github.com/TheSolom/Dof3a-Music.git
cd Dof3a-Music
```

2. Install dependencies:

```bash
npm install
```

3. Install FFmpeg (optional):

4. Install FFmpeg (optional, but recommended for "mp3" download format):

    For Windows: (https://www.youtube.com/watch?v=eRZRXpzZfM4)
    - Download the latest static build of FFmpeg from https://github.com/BtbN/FFmpeg-Builds
    - Extract the downloaded zip file to a directory of your choice (e.g. `C:\ffmpeg\bin`)
    - Add the `bin` directory to your system's PATH environment variable

    For Linux/macOS:
    - Install FFmpeg using your package manager of choice (e.g. `sudo apt-get install ffmpeg` on Ubuntu)

5. Create `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/dof3a-music
FFMPEG_PATH=C:\\ffmpeg\\bin # optional
```

## Running the Application

Development mode with hot reload:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## API Endpoints

### Downloader

- `POST /api/v1/downloader/:mediaId` - Download/stream media
- `GET /api/v1/downloader/:mediaId/info` - Fetch media info

### Songs

- `POST /api/v1/songs` - Add new song
- `GET /api/v1/songs` - Get all songs

### Plays

- `POST /api/v1/plays` - Record new play
- `GET /api/v1/plays/top/:userId` - Get user top plays

### Users

- `POST /api/v1/users` - Create new user
- `GET /api/v1/users/:id` - Get user by ID

## Project Structure

```
src/
├── app.js                  # Express app setup
├── server.js              # Server entry point
├── common/                # Shared utilities
│   ├── config/           # Configuration files
│   └── core/            # Core functionality
├── downloads/            # Downloaded media storage
└── modules/              # Feature modules
    ├── downloader/      # Media download handling
    ├── plays/           # Play history tracking
    ├── songs/           # Song management
    └── users/           # User management
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

TheSolom
