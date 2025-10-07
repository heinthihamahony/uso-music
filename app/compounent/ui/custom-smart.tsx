import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import PlayIcon from "./play-icon";
import RightArrowWhite from "./right-arrow-white";

export default function EditorChoiceComponent() {
  return (
    <div className="">
      <div className="my-3 mt-8 flex items-center gap-2">
        <p className="text-xl">Editor's Choice</p>
        <RightArrowWhite />
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 my-3">
        <Card isFooterBlurred className="w-[300px] h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-lg text-white font-bold">
              Money is there! My Honey Is Where?
            </p>
            <h4 className="text-zinc-500 font-bold text-sm">Hein Thiha</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://lh3.google.com/u/0/d/1JyiGE9iw7JZ-aix9pzV6QytGL3-NhPGQ=w2378-h1624-iv1?auditContext=forDisplay"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
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
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-[300px] h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-lg text-zinc-500 font-bold">About you</p>
            <h4 className="text-zinc-500 font-bold text-sm">The 1975</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://lh3.google.com/u/0/d/1IdNnlhWav4YMgMxUNqxrUrF0FyYtJMvO=w2378-h1624-iv1?auditContext=prefetch"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
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
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-[300px] h-[300px] flex-shrink-0">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-lg text-white font-bold">Why You Look At Me</p>
            <h4 className="text-zinc-500 font-bold text-sm">Hein Thiha</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://lh3.google.com/u/0/d/1aGA-wzMTGBKQegON76csQCJA-a4E0XsW=w2378-h1624-iv1?auditContext=forDisplay"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
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
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
