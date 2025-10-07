"use client";
import { Button, Avatar } from "@nextui-org/react";
import Avator3 from "./avator3";
import HeartIcon from "./heart-icon";
import PlayIcon from "./play-icon";
import PauseIcon from "./pause-icon";
import { useAudio } from "../../context/audio-context";

// Component for avatar with play icon
function AvatarWithPlayIcon({
  songId,
  avatar,
  title,
  artist,
}: {
  songId: number;
  avatar: string;
  title: string;
  artist: string;
}) {
  const { currentSongId, isPlaying, playSong, pauseSong } = useAudio();
  const isCurrentlyPlaying = currentSongId === songId && isPlaying;

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCurrentlyPlaying) {
      pauseSong();
    } else {
      playSong(songId);
    }
  };

  return (
    <div className="relative">
      <Avatar isBordered radius="sm" src={avatar} className="w-12 h-12" />
      <button
        onClick={handlePlayPause}
        className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-sm hover:bg-black/70 transition-colors"
      >
        {isCurrentlyPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}

export default function TopChartsComponent() {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide ">
      <div className=" w-[320px] flex-shrink-0 theme-bg-tertiary rounded-lg p-2 pb-3">
        <p className="theme-text-primary text-xl font-semibold items-center flex my-2 ml-3">
          Top 5 Music
        </p>
        <Button className="theme-bg-tertiary theme-text-primary py-9 px-2 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <AvatarWithPlayIcon
                songId={32}
                avatar="https://lh3.google.com/u/0/d/1HcAsKiC_2bNmRKgNrEWU2uhy7PI2CY9m=w542-h406-p-k-nu-iv1"
                title="Pracha Song"
                artist="Yee Mon Khant"
              />
            </div>
            <div className="text-left flex gap-3">
              <div className="">
                <p className="theme-text-primary text-sm font-semibold">1</p>
              </div>
              <div className="">
                <p className="theme-text-primary">Pracha Song</p>
                <p className="theme-text-primary text-xs">Yee Mon Khant</p>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
        <Button className="theme-bg-tertiary theme-text-primary py-9 px-2 w-full my-4">
          <div className="flex items-center gap-4">
            <div className="">
              <AvatarWithPlayIcon
                songId={18}
                avatar="https://lh3.google.com/u/0/d/15i2DH_ZubPoGHJIVCmxUnauI_udGilo4=w542-h406-p-k-nu-iv1"
                title="Somewhere We Could Stay"
                artist="Hsu Pyae Aung"
              />
            </div>
            <div className="text-left flex gap-3">
              <div className="">
                <p className="theme-text-primary text-sm font-semibold">2</p>
              </div>
              <div className="">
                <p className="theme-text-primary">Somewhere We Could Stay</p>
                <p className="theme-text-primary text-xs">Hsu Pyae Aung</p>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
        <Button className="theme-bg-tertiary theme-text-primary py-9 px-2 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <AvatarWithPlayIcon
                songId={17}
                avatar="https://lh3.google.com/u/0/d/1reIwZsi0tIOZOmRDW7nlT5PcbJA5c1Iw=w542-h406-p-k-nu-iv1"
                title="One Day"
                artist="Lin Htet"
              />
            </div>
            <div className="text-left flex gap-3">
              <div className="">
                <p className="theme-text-primary text-sm font-semibold">3</p>
              </div>
              <div className="">
                <p className="theme-text-primary">One Day</p>
                <p className="theme-text-primary text-xs">Lin Htet</p>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
      </div>
      <div className=" w-[320px] flex-shrink-0 theme-bg-tertiary rounded-lg p-2 pb-3">
        <p className="theme-text-primary text-xl font-semibold items-center flex my-2 ml-3">
          Top 5 Music
        </p>
        <Button className="theme-bg-tertiary theme-text-primary py-9 px-2 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <AvatarWithPlayIcon
                songId={19}
                avatar="https://lh3.google.com/u/0/d/1GjzdUaSOrnKkneVLoyCrqVc5g6BIuK9K=w542-h406-p-k-nu-iv2"
                title="Lost in the Cracks"
                artist="Kyaw Htut"
              />
            </div>
            <div className="text-left flex gap-3">
              <div className="">
                <p className="theme-text-primary text-sm font-semibold">4</p>
              </div>
              <div className="">
                <p className="theme-text-primary">Lost in the Cracks</p>
                <p className="theme-text-primary text-xs">Kyaw Htut</p>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
        <Button className="theme-bg-tertiary theme-text-primary py-9 px-2 w-full my-4">
          <div className="flex items-center gap-4">
            <div className="">
              <AvatarWithPlayIcon
                songId={1}
                avatar="https://lh3.google.com/u/0/d/1J5c32EHpGaTZypllg0gkH6HlIZJUYueO=w2378-h1624-iv1?auditContext=forDisplay"
                title="Ignite the Sky"
                artist="Hein Thiha"
              />
            </div>
            <div className="text-left flex gap-3">
              <div className="">
                <p className="theme-text-primary text-sm font-semibold">5</p>
              </div>
              <div className="">
                <p className="theme-text-primary">Ignite the Sky</p>
                <p className="theme-text-primary text-xs">Hein Thiha</p>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
      </div>

      {/* Hidden audio elements for Top 5 Music */}
      <audio
        key="audio-32"
        data-song-id={32}
        src="/audio/pracha-song.mp3"
        preload="metadata"
        style={{ display: "none" }}
      />
      <audio
        key="audio-18"
        data-song-id={18}
        src="/audio/Somewhere We Could Stay (Duo).mp3"
        preload="metadata"
        style={{ display: "none" }}
      />
      <audio
        key="audio-17"
        data-song-id={17}
        src="/audio/One Day.mp3"
        preload="metadata"
        style={{ display: "none" }}
      />
      <audio
        key="audio-19"
        data-song-id={19}
        src="/audio/Lost in the Cracks.mp3"
        preload="metadata"
        style={{ display: "none" }}
      />
      <audio
        key="audio-1"
        data-song-id={1}
        src="/audio/Ignite-the-Sky.mp3"
        preload="metadata"
        style={{ display: "none" }}
      />
    </div>
  );
}
