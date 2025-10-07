"use client";
import { Avatar } from "@nextui-org/react";
import { useProfile } from "./profile-context";

interface ProfileAvatorProps {
  username?: string;
}

export default function ProfileAvator2({ username }: ProfileAvatorProps) {
  const { profilePicture, username: contextUsername } = useProfile();
  const currentUsername = username || contextUsername;

  return (
    <div className="flex gap-2 items-center mt-4">
      <Avatar
        isBordered
        src={profilePicture || undefined}
        name={currentUsername ? currentUsername.charAt(0).toUpperCase() : "?"}
        className="w-8 h-8 text-tiny"
        classNames={{
          img: "object-cover object-center",
          name: "theme-text-primary font-bold text-sm",
        }}
      />
      <div className="flex flex-col">
        <p className="text-[15px] theme-text-primary">
          {currentUsername || "Guest User"}
        </p>
      </div>
    </div>
  );
}
