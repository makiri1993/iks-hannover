import React from "react";

interface AmbulantCareContentProps {
  content: string;
  imageSourceUrl: string;
  className: string;
  styleContent?: string;
  styleImage?: string;
}

export const ContentImageManager: React.FC<AmbulantCareContentProps> = ({
  content,
  imageSourceUrl,
  className,
  styleContent,
  styleImage,
}) => {
  return (
    <div className={className}>
      {/*<p className=" whitespace-pre-line px-8">{content}</p>*/}
      {/*<img*/}
      {/*  className="flex items-center rounded-full px-8 "*/}
      {/*  src={imageSourceUrl}*/}
      {/*  style={{ width: "40%" }}*/}
      {/*/>  */}
      <div className="w-full w-8/12 md:w-5/12">
        <p className={styleContent}>{content}</p>
      </div>
      <div className="flex flex-col items-center justify-center md:mb-11">
        <img className={styleImage} src={imageSourceUrl} />
      </div>
    </div>
  );
};
