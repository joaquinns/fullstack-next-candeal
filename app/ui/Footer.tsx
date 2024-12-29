import Link from "next/link";
import { IgIcon } from "../icons/igIcon";
import { WsIcon } from "../icons/wsIcon";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 w-full h-full min-h-[90px] bg-[#ca9767] text-slate-950 font-semibold py-6">
      <div className="flex flex-row gap-4">
        <Link href="#">
          <WsIcon width="32" height="32" />
        </Link>
        <Link href="#">
          <IgIcon width="32" height="32" />
        </Link>
      </div>
    </footer>
  );
};
