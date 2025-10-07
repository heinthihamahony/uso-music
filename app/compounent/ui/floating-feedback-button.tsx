"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import FeedbackIcon from "./feedback-icon";

export default function FloatingFeedbackButton() {
  const [isVisible, setIsVisible] = useState(true);

  const handleFeedbackClick = () => {
    window.open("https://forms.gle/tJ49zABFo1vbc3bK7", "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Button
        isIconOnly
        className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-14 h-14 rounded-full"
        onClick={handleFeedbackClick}
        title="Give us feedback!"
      >
        <FeedbackIcon />
      </Button>
    </div>
  );
}
