import CardComponent from "../compounent/ui/card";
import {
  getSongsWithAudio,
  getMyCustomSongs,
  addNewSong,
  createSong,
} from "../data/songs";

// Example 1: Display only songs that have MP3 files
export function SongsWithMP3Display() {
  return (
    <CardComponent songs={getSongsWithAudio()} title="Songs with MP3 Files" />
  );
}

// Example 2: Display your custom songs (some with MP3, some without)
export function MyCustomSongsWithMP3() {
  return (
    <CardComponent
      songs={getMyCustomSongs()}
      title="My Custom Songs (MP3 Ready)"
    />
  );
}

// Example 3: Add a new song with MP3 file
export function AddSongWithMP3() {
  // Add a new song with MP3 file
  const newSong = addNewSong(
    createSong(
      "My New MP3 Song",
      "Your Name",
      "/app/IMG/very amazing song cover.jpeg",
      "My Songs",
      "/audio/my-new-song.mp3", // MP3 file path
      "3:30" // Duration
    )
  );

  console.log("Added new song with MP3:", newSong);

  return (
    <CardComponent
      songs={getMyCustomSongs()}
      title="My Songs (Including New MP3)"
    />
  );
}

// Example 4: Create multiple songs with MP3 files
export function MultipleMP3Songs() {
  const mp3Songs = [
    {
      id: 100,
      ...createSong(
        "Song 1 with MP3",
        "Artist 1",
        "/app/IMG/very amazing song cover.jpeg",
        "My Songs",
        "/audio/song1.mp3",
        "2:45"
      ),
    },
    {
      id: 101,
      ...createSong(
        "Song 2 with MP3",
        "Artist 2",
        "/app/IMG/heinthiha.png",
        "My Songs",
        "/audio/song2.mp3",
        "4:12"
      ),
    },
    {
      id: 102,
      ...createSong(
        "Song 3 with MP3",
        "Artist 3",
        "/app/IMG/very amazing song cover.jpeg",
        "My Songs",
        "/audio/song3.mp3",
        "3:20"
      ),
    },
  ];

  return <CardComponent songs={mp3Songs} title="Multiple MP3 Songs" />;
}
