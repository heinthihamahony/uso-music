"use client";
import { Avatar, Button, Input } from "@nextui-org/react";
import { useProfile } from "./profile-context";
import { useRef } from "react";

interface ProfileAvatorProps {
  username?: string;
}

export default function ProfileAvator({ username }: ProfileAvatorProps) {
  const {
    profilePicture,
    setProfilePicture,
    username: contextUsername,
  } = useProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentUsername = username || contextUsername;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfilePicture(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePicture = () => {
    setProfilePicture(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="relative">
        <Avatar
          isBordered
          src={profilePicture || undefined}
          name={currentUsername ? currentUsername.charAt(0).toUpperCase() : "?"}
          className="w-16 h-16 cursor-pointer hover:opacity-80 transition-opacity"
          classNames={{
            img: "object-cover object-center",
            name: "text-white font-bold text-xl",
          }}
          onClick={() => fileInputRef.current?.click()}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onClick={() => fileInputRef.current?.click()}
          className="text-xs"
        >
          {profilePicture ? "Change" : "Upload"} Photo
        </Button>
        {profilePicture && (
          <Button
            size="sm"
            variant="flat"
            color="danger"
            onClick={handleRemovePicture}
            className="text-xs"
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
