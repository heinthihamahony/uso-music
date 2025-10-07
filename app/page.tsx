"use client";
import ProfileAvator2 from "./compounent/ui/avator2";
import CardComponent from "./compounent/ui/card";
import GuessComponent from "./compounent/ui/guess";
import SearchComponent from "./compounent/ui/search";
import NavbarComponent from "./compounent/ui/tableleft";
import TopChartsComponent from "./compounent/ui/top-charts";
import RightArrowWhite from "./compounent/ui/right-arrow-white";
import VipSongComponent from "./compounent/ui/vip-song";
import EarAdventureComponent from "./compounent/ui/ear-adventure";
import NewAlbumComponent from "./compounent/ui/new-album";

export default function Home() {
  return (
    <>
      <div className="pb-10 theme-bg-primary">
        <div className="min-h-screen px-4 py-3 theme-bg-primary">
          <div className="w-full">
            <NavbarComponent />
          </div>
          <div className="flex justify-center items-center">
            <SearchComponent />
          </div>
          <div className="">
            <ProfileAvator2 />
            <CardComponent />
            <GuessComponent />
            <div className="">
              <NewAlbumComponent />
              <div className="my-3 mt-8 flex items-center gap-2">
                <h1 className="text-xl theme-text-primary">
                  International songs
                </h1>
                <RightArrowWhite />
              </div>
              <TopChartsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
