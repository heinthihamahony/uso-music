import { Link } from "@nextui-org/react";
import RightArrow from "./right-arrow";
import ShirtIcon from "./shirt-icon";
import MessageIcon from "./message-icon";
import ScanIcon from "./scan-icon";
import FeedbackIcon from "./feedback-icon";
import SettingsIcon from "./settings-icon";

export default function HthLinkBody2() {
  return (
    <div className="my-5">
      <Link
        className="theme-text-primary font-semibold text-2xl flex gap-5"
        href="#"
      >
        <FeedbackIcon /> Feedback
      </Link>
      <Link
        className="theme-text-primary font-semibold text-2xl flex gap-5 my-5"
        href="#"
      >
        <SettingsIcon /> Settings
      </Link>
    </div>
  );
}
