# How to Put Songs in Card Component

## Overview

Your `card.tsx` component has been updated to be dynamic and accept song data as props. Here are all the ways you can use it:

## 1. Basic Usage (Default Songs)

```tsx
import CardComponent from "./compounent/ui/card";

// Uses default Editor's Choice songs
<CardComponent />;
```

## 2. Custom Title

```tsx
<CardComponent title="My Custom Playlist" />
```

## 3. Using Predefined Song Categories

```tsx
import CardComponent from "./compounent/ui/card";
import { getNewReleasesSongs, getVIPSongs } from "./data/songs";

// New Releases
<CardComponent
  songs={getNewReleasesSongs()}
  title="New Releases"
/>

// VIP Songs
<CardComponent
  songs={getVIPSongs()}
  title="VIP Songs"
/>
```

## 4. Custom Song Data

```tsx
const mySongs = [
  {
    id: 1,
    title: "My Song Title",
    artist: "Artist Name",
    avatar: "https://example.com/image.jpg",
    category: "Custom",
  },
];

<CardComponent songs={mySongs} title="My Playlist" />;
```

## 5. Mixed Songs from Different Categories

```tsx
import { getNewReleasesSongs, getVIPSongs } from "./data/songs";

const mixedSongs = [
  ...getNewReleasesSongs().slice(0, 2),
  ...getVIPSongs().slice(0, 1),
];

<CardComponent songs={mixedSongs} title="Mixed Playlist" />;
```

## Song Data Structure

Each song must have this structure:

```tsx
interface Song {
  id: number; // Unique identifier
  title: string; // Song title
  artist: string; // Artist name
  avatar: string; // Image URL for the song cover
  category: string; // Category (e.g., "Editor's Choice", "New Releases")
}
```

## Available Helper Functions

- `getEditorChoiceSongs()` - Returns Editor's Choice songs
- `getNewReleasesSongs()` - Returns New Releases songs
- `getVIPSongs()` - Returns VIP Songs
- `getYouHopeYouLikeItSongs()` - Returns "You hope you like it" songs
- `getSongsByCategory(category)` - Returns songs by specific category

## Adding New Songs

To add new songs, edit `/app/data/songs.ts` and add them to the `songsData` array:

```tsx
{
  id: 9, // Next available ID
  title: "New Song Title",
  artist: "New Artist",
  avatar: "https://example.com/new-image.jpg",
  category: "New Category"
}
```

## Component Props

```tsx
interface EditorChoiceComponentProps {
  songs?: Song[]; // Optional array of songs
  title?: string; // Optional title (defaults to "Editor's Choice")
}
```

## Examples in Your App

Check `/app/examples/card-usage-examples.tsx` for complete working examples of all these usage patterns.
