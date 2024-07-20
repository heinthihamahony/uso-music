import { Avatar } from "@nextui-org/react";

export default function Profile() {
  return (
    <>
      <div className="">
        <Avatar
          src="https://lh3.google.com/u/0/d/1ziCyUn-bmInTvKx8U3kRX1U0d7af9Uly=w2062-h1626-iv2"
          className="w-36 h-36 mx-auto"
        />

        <div className=" text-center my-3">
          <p className="text-xl font-semibold text-[#ea1a4e] ">Hein Thiha</p>
          <p className=" text-gray-500">19 November 2004</p>
        </div>
      </div>
    </>
  );
}
