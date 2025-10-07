"use client";
import { useState } from "react";
import { Avatar } from "@nextui-org/react";

interface EnhancedAvatarProps {
  src: string;
  name?: string;
  className?: string;
  fallbackSrc?: string;
  [key: string]: any;
}

export default function EnhancedAvatar({
  src,
  name,
  className = "",
  fallbackSrc,
  ...props
}: EnhancedAvatarProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    console.warn(`Failed to load avatar: ${imageSrc}`);
    setHasError(true);
    
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(false);
    }
  };

  return (
    <Avatar
      {...props}
      src={hasError ? undefined : imageSrc}
      name={name}
      className={className}
      onError={handleError}
      classNames={{
        img: "object-cover object-center",
        name: "text-white font-bold",
        ...props.classNames
      }}
    />
  );
}
