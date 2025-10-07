import { Card, CardFooter, Button, CardHeader } from "@nextui-org/react";
import PlayIcon from "./play-icon";
import RightArrowWhite from "./right-arrow-white";
import AudioPlayer from "./audio-player";
import EnhancedImage from "./enhanced-image";
import { Song, getEditorChoiceSongs } from "../../data/songs";
import { useAudio } from "../../context/audio-context";

// Define props interface
interface EditorChoiceComponentProps {
  songs?: Song[];
  title?: string;
}

export default function EditorChoiceComponent({
  songs = [],
  title = "Editor's Choice",
}: EditorChoiceComponentProps) {
  const { currentSongId, isPlaying } = useAudio();
  // Use provided songs or default to Editor's Choice songs
  const songsToDisplay = songs.length > 0 ? songs : getEditorChoiceSongs();

  return (
    <div className="">
      <div className="my-3 mt-8 flex items-center gap-2">
        <p className="text-xl">{title}</p>
        <RightArrowWhite />
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 my-3">
        {songsToDisplay.map((song) => {
          const isCurrentlyPlaying = currentSongId === song.id && isPlaying;

          return (
            <Card
              key={song.id}
              isFooterBlurred
              className={`w-[300px] h-[300px] flex-shrink-0 transition-all duration-300 ${
                isCurrentlyPlaying
                  ? "ring-2 ring-green-500/50 shadow-lg shadow-green-500/20"
                  : ""
              }`}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-lg text-white font-bold">{song.title}</p>
                <h4
                  className={`font-bold text-sm ${
                    song.artist === "Hsu Pyae Aung" ||
                    song.artist === "Kyaw Htut"
                      ? "text-white"
                      : "text-zinc-500"
                  }`}
                >
                  {song.artist}
                </h4>
              </CardHeader>
              <EnhancedImage
                alt={`${song.title} by ${song.artist}`}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={song.avatar}
                fallbackSrc="https://lh3.google.com/u/0/d/1IdNnlhWav4YMgMxUNqxrUrF0FyYtJMvO=w2378-h1624-iv1?auditContext=prefetch"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                {song.audioFile ? (
                  <div className="flex-1">
                    <AudioPlayer
                      audioFile={song.audioFile}
                      songTitle={song.title}
                      artist={song.artist}
                      songId={song.id}
                      className="text-black"
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="text-black text-tiny">Available soon.</p>
                      <p className="text-black text-tiny">Get notified.</p>
                    </div>
                    <Button
                      className="text-tiny p-0 rounded-full w-12 h-12 min-w-12 bg-white/20 backdrop-blur-sm"
                      size="sm"
                      isIconOnly
                    >
                      <PlayIcon />
                    </Button>
                  </>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
