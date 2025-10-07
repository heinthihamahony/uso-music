// Song data interface
export interface Song {
  id: number;
  title: string;
  artist: string;
  avatar: string;
  category: string;
  audioFile?: string; // Optional MP3 file path
  duration?: string; // Optional song duration (e.g., "3:45")
}

// All songs data
export const songsData: Song[] = [
  // Editor's Choice songs
  {
    id: 1,
    title: "Ignite the Sky",
    artist: "Hein Thiha",
    avatar: "https://lh3.google.com/u/0/d/1J5c32EHpGaTZypllg0gkH6HlIZJUYueO=w2378-h1624-iv1?auditContext=forDisplay",
    category: "Editor's Choice",
    audioFile: "/audio/Ignite-the-Sky.mp3",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Priority of Love",
    artist: "Yee Mon Khant",
    avatar: "https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1",
    category: "Editor's Choice",
    audioFile: "/audio/Pracha Songkhro Rd. 59 (Cover).mp3",
    duration: "4:20",
  },
  {
    id: 3,
    title: "Golden Light",
    artist: "Lin Htet",
    avatar: "https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1",
    category: "Editor's Choice",
    audioFile: "/audio/Golden-Light.mp3",
    duration: "3:30",
  },
  {
    id: 19,
    title: "Lost in the Cracks",
    artist: "Kyaw Htut",
    avatar: "https://lh3.google.com/u/0/d/1GjzdUaSOrnKkneVLoyCrqVc5g6BIuK9K=w542-h406-p-k-nu-iv2",
    category: "Editor's Choice",
    audioFile: "/audio/Lost in the Cracks.mp3",
    duration: "4:15",
  },
  {
    id: 20,
    title: "Somewhere We Could Stay",
    artist: "Hsu Pyae Aung",
    avatar: "https://lh3.google.com/u/0/d/15i2DH_ZubPoGHJIVCmxUnauI_udGilo4=w542-h406-p-k-nu-iv1",
    category: "Editor's Choice",
    audioFile: "/audio/Somewhere We Could Stay (Duo).mp3",
    duration: "3:45",
  },
  
  // New Releases songs
  {
    id: 4,
    title: "It's not living",
    artist: "Hein Thiha",
    avatar: "https://lh3.google.com/u/0/d/1JyiGE9iw7JZ-aix9pzV6QytGL3-NhPGQ=w2378-h1624-iv1?auditContext=forDisplay",
    category: "New Releases",
    audioFile: "/audio/Pracha Songkhro Rd. 59 (Cover).mp3",
    duration: "4:20",
  },
  {
    id: 5,
    title: "About you",
    artist: "The 1975",
    avatar: "https://lh3.google.com/u/0/d/15i2DH_ZubPoGHJIVCmxUnauI_udGilo4=w542-h406-p-k-nu-iv1",
    category: "New Releases",
  },
  {
    id: 6,
    title: "Why You Look At Me",
    artist: "Hein Thiha",
    avatar: "https://lh3.google.com/u/0/d/1aGA-wzMTGBKQegON76csQCJA-a4E0XsW=w2378-h1624-iv1?auditContext=forDisplay",
    category: "New Releases",
  },
  // VIP Songs
  {
    id: 8,
    title: "You Shine Anyway",
    artist: "Hein Thiha",
    avatar: "https://lh3.google.com/u/0/d/1J5c32EHpGaTZypllg0gkH6HlIZJUYueO=w2378-h1624-iv1?auditContext=forDisplay",
    category: "You hope you like it",
    audioFile: "/audio/You Shine Anyway .mp3",
    duration: "3:45",
  },
  {
    id: 17,
    title: "One Day",
    artist: "Lin Htet",
    avatar: "https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1",
    category: "You hope you like it",
    audioFile: "/audio/One Day.mp3",
    duration: "4:00",
  },
  {
    id: 18,
    title: "Somewhere We Could Stay",
    artist: "Hsu Pyae Aung",
    avatar: "https://lh3.google.com/u/0/d/15i2DH_ZubPoGHJIVCmxUnauI_udGilo4=w542-h406-p-k-nu-iv1",
    category: "You hope you like it",
    audioFile: "/audio/Somewhere We Could Stay (Duo).mp3",
    duration: "3:45",
  },
  {
    id: 23,
    title: "Rock Electro Pop",
    artist: "Yee Mon Khant",
    avatar: "https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1",
    category: "You hope you like it",
    audioFile: "/audio/Rock + Electro pop.mp3",
    duration: "3:22",
  },
  {
    id: 24,
    title: "Golden Light",
    artist: "Lin Htet",
    avatar: "https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1",
    category: "You hope you like it",
    audioFile: "/audio/Golden-Light.mp3",
    duration: "3:30",
  },
  {
    id: 25,
    title: "Lost in the Cracks",
    artist: "Kyaw Htut",
    avatar: "https://lh3.google.com/u/0/d/1GjzdUaSOrnKkneVLoyCrqVc5g6BIuK9K=w542-h406-p-k-nu-iv2",
    category: "You hope you like it",
    audioFile: "/audio/Lost in the Cracks.mp3",
    duration: "4:15",
  },
  // Custom User Songs - Add your own songs here!
  {
    id: 9,
    title: "My Custom Song",
    artist: "Your Name",
    avatar: "/app/IMG/very amazing song cover.jpeg", // Using local image
    category: "My Songs",
    audioFile: "/audio/my-custom-song.mp3", // MP3 file path
    duration: "3:45",
  },
  {
    id: 10,
    title: "Another Custom Song",
    artist: "Your Artist Name",
    avatar: "https://example.com/your-song-cover.jpg", // Or use online image
    category: "My Songs",
    audioFile: "/audio/another-custom-song.mp3", // MP3 file path
    duration: "4:12",
  },
  // Example songs with MP3 files
  {
    id: 11,
    title: "Sample Song 1",
    artist: "Sample Artist",
    avatar: "/app/IMG/very amazing song cover.jpeg",
    category: "My Songs",
    audioFile: "/audio/sample-song-1.mp3",
    duration: "2:30",
  },
  {
    id: 12,
    title: "Sample Song 2",
    artist: "Another Artist",
    avatar: "/app/IMG/heinthiha.png",
    category: "My Songs",
    audioFile: "/audio/sample-song-2.mp3",
    duration: "3:15",
  },
  // International Songs
  {
    id: 15,
    title: "International Hit",
    artist: "Global Artist",
    avatar: "https://lh3.google.com/u/0/d/15i2DH_ZubPoGHJIVCmxUnauI_udGilo4=w542-h406-p-k-nu-iv1",
    category: "International song",
    audioFile: "/audio/Rock + Electro pop.mp3",
    duration: "3:30",
  },
  {
    id: 16,
    title: "World Music",
    artist: "International Band",
    avatar: "https://lh3.google.com/u/0/d/1aGA-wzMTGBKQegON76csQCJA-a4E0XsW=w2378-h1624-iv1?auditContext=forDisplay",
    category: "International song",
    audioFile: "/audio/One Day.mp3",
    duration: "4:00",
  },
  {
    id: 32,
    title: "Pracha Song",
    artist: "Yee Mon Khant",
    avatar: "https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1",
    category: "Top Charts",
    audioFile: "/audio/pracha-song.mp3",
    duration: "4:20",
  },
  // New Album songs
  {
    id: 13,
    title: "It's not Living",
    artist: "Hein Thiha",
    avatar: "https://lh3.google.com/u/0/d/1JyiGE9iw7JZ-aix9pzV6QytGL3-NhPGQ=w2378-h1624-iv1?auditContext=forDisplay",
    category: "New Album",
    audioFile: "/audio/Its-not-living.mp3",
    duration: "4:20",
  },
  {
    id: 14,
    title: "Lost In The Cracks",
    artist: "Linn Htet",
    avatar: "https://lh3.google.com/u/0/d/1aGA-wzMTGBKQegON76csQCJA-a4E0XsW=w2378-h1624-iv1?auditContext=forDisplay",
    category: "New Album",
    audioFile: "/audio/Lost in the Cracks.mp3",
    duration: "3:45",
  },
];

// Helper functions to get songs by category
export const getSongsByCategory = (category: string): Song[] => {
  return songsData.filter(song => song.category === category);
};

export const getEditorChoiceSongs = (): Song[] => {
  return getSongsByCategory("Editor's Choice");
};

export const getNewReleasesSongs = (): Song[] => {
  return getSongsByCategory("New Releases");
};

export const getVIPSongs = (): Song[] => {
  return getSongsByCategory("VIP Songs");
};

export const getYouHopeYouLikeItSongs = (): Song[] => {
  return getSongsByCategory("You hope you like it");
};

export const getMyCustomSongs = (): Song[] => {
  return getSongsByCategory("My Songs");
};

// Function to add a new song dynamically
export const addNewSong = (song: Omit<Song, 'id'>): Song => {
  const newId = Math.max(...songsData.map(s => s.id)) + 1;
  const newSong: Song = {
    id: newId,
    ...song
  };
  songsData.push(newSong);
  return newSong;
};

// Function to create a song object (helper for easy song creation)
export const createSong = (
  title: string,
  artist: string,
  avatar: string,
  category: string = "My Songs",
  audioFile?: string,
  duration?: string
): Omit<Song, 'id'> => {
  return {
    title,
    artist,
    avatar,
    category,
    audioFile,
    duration
  };
};

// Function to get songs with audio files
export const getSongsWithAudio = (): Song[] => {
  return songsData.filter(song => song.audioFile);
};

// Function to get songs without audio files
export const getSongsWithoutAudio = (): Song[] => {
  return songsData.filter(song => !song.audioFile);
};
