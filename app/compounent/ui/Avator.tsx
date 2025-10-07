"use client";
import { Avatar, Button, Input } from "@nextui-org/react";
import { useProfile } from "./profile-context";
import { useRef, useState } from "react";

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
  const [isImageLoading, setIsImageLoading] = useState(false);
  const currentUsername = username || contextUsername;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsImageLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfilePicture(result);
        setIsImageLoading(false);
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
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
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
