import React from "react";

interface AdvertisementLinkProps {
  path: string;
}

export const AdvertisementLink: React.FC<AdvertisementLinkProps> = ({
  path,
}) => {
  return (
    <div
      className="flex w-full items-end justify-end pt-16"
      style={{ height: "50px" }}
    >
      <a className="text-[#f58f30] underline font-extrabold" href={path}>
        mehr erfahren und bewerben
      </a>
    </div>
  );
};
