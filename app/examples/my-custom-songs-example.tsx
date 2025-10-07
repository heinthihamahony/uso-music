import CardComponent from "../compounent/ui/card";
import { getMyCustomSongs, addNewSong, createSong } from "../data/songs";

// Example 1: Display your custom songs
export function MyCustomSongsDisplay() {
  return <CardComponent songs={getMyCustomSongs()} title="My Custom Songs" />;
}

// Example 2: Add a new song and then display it
export function AddAndDisplaySong() {
  // Add a new song
  const newSong = addNewSong(
    createSong(
      "My New Song Title",
      "My Artist Name",
      "/app/IMG/very amazing song cover.jpeg", // Using your local image
      "My Songs"
    )
  );

  console.log("Added new song:", newSong);

  return (
    <CardComponent
      songs={getMyCustomSongs()}
      title="My Songs (Including New One)"
    />
  );
}

// Example 3: Create songs with different image sources
export function DifferentImageSources() {
  const songsWithDifferentImages = [
    // Using local image from your IMG folder
    {
      id: 200,
      ...createSong(
        "Song with Local Image",
        "Local Artist",
        "/app/IMG/very amazing song cover.jpeg",
        "My Songs"
      ),
    },
    // Using online image
    {
      id: 201,
      ...createSong(
        "Song with Online Image",
        "Online Artist",
        "https://example.com/song-cover.jpg",
        "My Songs"
      ),
    },
    // Using your existing image
    {
      id: 202,
      ...createSong(
        "Song with Existing Image",
        "Existing Artist",
        "https://lh3.google.com/u/0/d/1JyiGE9iw7JZ-aix9pzV6QytGL3-NhPGQ=w2378-h1624-iv1?auditContext=forDisplay",
        "My Songs"
      ),
    },
  ];

  return (
    <CardComponent
      songs={songsWithDifferentImages}
      title="Songs with Different Images"
    />
  );
}
