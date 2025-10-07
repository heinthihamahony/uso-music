import CardComponent from "../compounent/ui/card";
import {
  getNewReleasesSongs,
  getVIPSongs,
  getYouHopeYouLikeItSongs,
} from "../data/songs";

// Example 1: Using default Editor's Choice songs
export function DefaultUsage() {
  return <CardComponent />;
}

// Example 2: Using custom title with default songs
export function CustomTitleUsage() {
  return <CardComponent title="My Favorite Songs" />;
}

// Example 3: Using New Releases songs
export function NewReleasesUsage() {
  return <CardComponent songs={getNewReleasesSongs()} title="New Releases" />;
}

// Example 4: Using VIP Songs
export function VIPSongsUsage() {
  return <CardComponent songs={getVIPSongs()} title="VIP Songs" />;
}

// Example 5: Using custom song data
export function CustomSongsUsage() {
  const customSongs = [
    {
      id: 100,
      title: "My Custom Song",
      artist: "Custom Artist",
      avatar: "https://example.com/image.jpg",
      category: "Custom",
    },
    {
      id: 101,
      title: "Another Custom Song",
      artist: "Another Artist",
      avatar: "https://example.com/image2.jpg",
      category: "Custom",
    },
  ];

  return <CardComponent songs={customSongs} title="Custom Playlist" />;
}

// Example 6: Using mixed songs from different categories
export function MixedSongsUsage() {
  const mixedSongs = [
    ...getNewReleasesSongs().slice(0, 2),
    ...getVIPSongs().slice(0, 1),
  ];

  return <CardComponent songs={mixedSongs} title="Mixed Playlist" />;
}
