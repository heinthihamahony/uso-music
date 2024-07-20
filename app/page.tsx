import Image from "next/image";
import Profile from "./profile/profile";
import { Title } from "./title/page";
import { Information } from "./information/page";

export default function Home() {
  return (
    <>
      <div className=" my-6">
        <Title />
        <Profile />
        <Information />
      </div>
    </>
  );
}
