import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import PlayIcon from "./play-icon";

import VipSongButtonComponent from "./vip-buttom";
import RightArrowWhite from "./right-arrow-white";

export default function VipSongComponent() {
  return (
    <div className="">
      <div className="my-3 mt-8 flex items-center gap-2">
        <h1 className="text-xl">VIP Songs For You</h1>
        <RightArrowWhite />
      </div>
      <div className="">
        <VipSongButtonComponent />
      </div>
    </div>
  );
}
