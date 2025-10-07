import { Link } from "@nextui-org/react";
import RightArrow from "./right-arrow";
import RightArrowWhite from "./right-arrow-white";

interface HthLinkHeadProps {
  username?: string;
}

export default function HthLinkHead({ username }: HthLinkHeadProps) {
  // Define the special users who get 100M Followers and 100K Following
  const specialUsers = [
    "Hein Thiha Leo",
    "Yee Mon Khant",
    "Lin Ktet",
    "Hsu Pyae Aung",
    "Lin Htet",
  ];

  // Check if current user is in the special users list
  const isSpecialUser = username && specialUsers.includes(username);

  // Set followers and following based on user type
  const followers = isSpecialUser ? "100M" : "0";
  const following = isSpecialUser ? "100K" : "0";

  return (
    <div className="theme-text-primary my-5">
      <Link className="theme-text-primary font-bold text-3xl flex" href="#">
        {username || "Guest User"}
        <RightArrowWhite />
      </Link>
      <div className="text-sm theme-text-secondary">
        <p className=" my-1">ID: 1234567890</p>
        <div className="flex items-center gap-6 mt-2">
          <div className="flex gap-2">
            <p className="theme-text-primary">{followers}</p>
            <p className="theme-text-secondary">Followers</p>
          </div>
          <div className="w-px h-6 theme-border bg-current"></div>
          <div className="flex gap-2">
            <p className="theme-text-primary">{following}</p>
            <p className="theme-text-secondary">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}
