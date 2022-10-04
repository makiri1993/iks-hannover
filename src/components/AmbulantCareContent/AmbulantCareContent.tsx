import React from "react";

interface AmbulantCareContentProps {
  content: string;
  imageSourceUrl: string;
  className: string;
}

export const AmbulantCareContent: React.FC<AmbulantCareContentProps> = ({
  content,
  imageSourceUrl,
  className,
}) => {
  return (
    <div className={className} style={{ width: "60%" }}>
      <p className=" px-8">{content}</p>
      <img
        className="flex items-center rounded-full px-8 "
        src={imageSourceUrl}
        style={{ width: "40%" }}
      />
    </div>
  );
};
