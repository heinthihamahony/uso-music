# How to Add Your Own Songs to the Music App

## 🎵 Quick Start - 3 Easy Ways to Add Your Songs

### Method 1: Add Songs Directly to the Data File (Easiest)

1. **Open the file**: `/app/data/songs.ts`
2. **Find the section**: Look for `// Custom User Songs - Add your own songs here!`
3. **Add your song** like this:

```tsx
{
  id: 11, // Use the next available number
  title: "Your Song Title",
  artist: "Your Name",
  avatar: "/app/IMG/very amazing song cover.jpeg", // Your image path
  category: "My Songs",
},
```

### Method 2: Use the Helper Functions (Recommended)

```tsx
import { addNewSong, createSong } from "./data/songs";

// Add a new song
const newSong = addNewSong(
  createSong(
    "Your Song Title",
    "Your Artist Name",
    "/app/IMG/very amazing song cover.jpeg",
    "My Songs"
  )
);
```

### Method 3: Use in Your Components

```tsx
import CardComponent from "./compounent/ui/card";
import { getMyCustomSongs } from "./data/songs";

// Display your custom songs
<CardComponent songs={getMyCustomSongs()} title="My Custom Songs" />;
```

## 📁 Image Options for Your Songs

### Option 1: Use Your Local Images

```tsx
avatar: "/app/IMG/very amazing song cover.jpeg";
avatar: "/app/IMG/heinthiha.png";
```

### Option 2: Use Online Images

```tsx
avatar: "https://example.com/your-song-cover.jpg";
avatar: "https://your-website.com/album-art.jpg";
```

### Option 3: Use Existing Images from Your App

```tsx
avatar: "https://lh3.google.com/u/0/d/1JyiGE9iw7JZ-aix9pzV6QytGL3-NhPGQ=w2378-h1624-iv1?auditContext=forDisplay";
```

## 🎯 Complete Example - Adding Your Song

Here's exactly what to do:

1. **Open** `/app/data/songs.ts`
2. **Add your song** after line 85:

```tsx
{
  id: 11, // Next number after 10
  title: "My Amazing Song",
  artist: "Hein Thiha",
  avatar: "/app/IMG/very amazing song cover.jpeg",
  category: "My Songs",
},
```

3. **Use it in your component**:

```tsx
import CardComponent from "./compounent/ui/card";
import { getMyCustomSongs } from "./data/songs";

export default function MyPage() {
  return (
    <div>
      <CardComponent songs={getMyCustomSongs()} title="My Custom Songs" />
    </div>
  );
}
```

## 🚀 Advanced: Add Multiple Songs at Once

```tsx
// Add multiple songs
const mySongs = [
  createSong("Song 1", "Artist 1", "/app/IMG/image1.jpg", "My Songs"),
  createSong("Song 2", "Artist 2", "/app/IMG/image2.jpg", "My Songs"),
  createSong("Song 3", "Artist 3", "/app/IMG/image3.jpg", "My Songs"),
];

// Add them all
mySongs.forEach((song) => addNewSong(song));
```

## 📝 Song Data Structure

Each song needs:

- `id`: Unique number (auto-generated if using functions)
- `title`: Your song title
- `artist`: Your name or artist name
- `avatar`: Image URL or path
- `category`: Category name (use "My Songs" for your songs)

## 🎨 Categories You Can Use

- `"My Songs"` - For your personal songs
- `"Editor's Choice"` - For featured songs
- `"New Releases"` - For new songs
- `"VIP Songs"` - For premium songs
- `"Custom"` - For any custom category

## 💡 Pro Tips

1. **Use local images** from `/app/IMG/` folder for better performance
2. **Keep image sizes reasonable** (under 1MB recommended)
3. **Use descriptive titles** for better search results
4. **Group similar songs** with the same category
5. **Test your songs** by viewing them in the app

## 🔧 Troubleshooting

**Problem**: Image not showing
**Solution**: Check the image path is correct and file exists

**Problem**: Song not appearing
**Solution**: Make sure you're using `getMyCustomSongs()` function

**Problem**: TypeScript errors
**Solution**: Make sure all required fields (title, artist, avatar, category) are provided

## 📚 Examples

Check these files for complete examples:

- `/app/examples/my-custom-songs-example.tsx`
- `/app/examples/card-usage-examples.tsx`
