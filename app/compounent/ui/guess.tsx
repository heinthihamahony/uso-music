import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import PlayIcon from "./play-icon";
import GuessButtonComponent from "./button";

export default function GuessComponent() {
  return (
    <div className="">
      <div className="my-3 mt-8">
        <h1 className="text-xl">We hope you like it</h1>
      </div>
      <div className="">
        <GuessButtonComponent />
      </div>
    </div>
  );
}
