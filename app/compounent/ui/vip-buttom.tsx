import { Button } from "@nextui-org/react";
import Avator3 from "./avator3";
import HeartIcon from "./heart-icon";

export default function VipSongButtonComponent() {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
      <div className="space-y-4 w-[320px] flex-shrink-0">
        <Button className="bg-black text-white py-11 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <Avator3 />
            </div>
            <div className="text-left">
              <p className="text-white">About you</p>
              <p className="text-white text-xs">The 1975</p>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
        <Button className="bg-black text-white py-11 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <Avator3 />
            </div>
            <div className="text-left">
              <p className="text-white">About you</p>
              <p className="text-white text-xs">The 1975</p>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
        <Button className="bg-black text-white py-11 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <Avator3 />
            </div>
            <div className="text-left">
              <p className="text-white">About you</p>
              <p className="text-white text-xs">The 1975</p>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
      </div>
      <div className="space-y-4 w-[320px] flex-shrink-0">
        <Button className="bg-black text-white py-11 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <Avator3 />
            </div>
            <div className="text-left">
              <p className="text-white">About you</p>
              <p className="text-white text-xs">The 1975</p>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
        <Button className="bg-black text-white py-11 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <Avator3 />
            </div>
            <div className="text-left">
              <p className="text-white">About you</p>
              <p className="text-white text-xs">The 1975</p>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
        <Button className="bg-black text-white py-11 w-full">
          <div className="flex items-center gap-4">
            <div className="">
              <Avator3 />
            </div>
            <div className="text-left">
              <p className="text-white">About you</p>
              <p className="text-white text-xs">The 1975</p>
            </div>
          </div>
          <div className="ml-auto">
            <HeartIcon />
          </div>
        </Button>
      </div>
    </div>
  );
}
