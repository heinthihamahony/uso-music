import { Link, Switch } from "@nextui-org/react";
import RightArrow from "./right-arrow";
import ShirtIcon from "./shirt-icon";
import MessageIcon from "./message-icon";
import ScanIcon from "./scan-icon";
import FeedbackIcon from "./feedback-icon";
import { useTheme } from "../../context/theme-context";

export default function HthLinkBody() {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <Link className="theme-text-primary font-semibold text-2xl flex gap-5" href="#">
          <ShirtIcon /> {isLightMode ? "Dark mode" : "Light mode"}
        </Link>
        <Switch 
          isSelected={isLightMode}
          onValueChange={toggleTheme}
          size="sm"
          color="success"
          classNames={{
            wrapper: "group-data-[selected=true]:bg-green-500",
          }}
        />
      </div>
      <Link
        className="theme-text-primary font-semibold text-2xl flex gap-5 my-5"
        href="/subscription"
      >
        <MessageIcon /> Subscription
      </Link>
      <Link 
        className="theme-text-primary font-semibold text-2xl flex gap-5 my-5" 
        href="https://forms.gle/tJ49zABFo1vbc3bK7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FeedbackIcon /> Feedback
      </Link>
      <Link className="theme-text-primary font-semibold text-2xl flex gap-5" href="#">
        <ScanIcon /> Scan
      </Link>
    </div>
  );
}
