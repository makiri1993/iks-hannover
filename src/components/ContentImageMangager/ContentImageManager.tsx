import React from "react";

interface AmbulantCareContentProps {
  content: string;
  imageSourceUrl: string;
  className: string;
  styleContent?: string;
  styleContentContainer?: string;
  styleImage?: string;
  styleImageContainer?: string;
}

export const ContentImageManager: React.FC<AmbulantCareContentProps> = ({
  content,
  imageSourceUrl,
  className,
  styleContent,
  styleImage,
  styleContentContainer,
  styleImageContainer,
}) => {
  return (
    <div className={className}>
      {/*<p className=" whitespace-pre-line px-8">{content}</p>*/}
      {/*<img*/}
      {/*  className="flex items-center rounded-full px-8 "*/}
      {/*  src={imageSourceUrl}*/}
      {/*  style={{ width: "40%" }}*/}
      {/*/>  */}
      {/*<div className="w-full w-8/12 md:w-5/12">*/}
      <div className={styleContentContainer}>
        <p className={styleContent}>{content}</p>
      </div>
      {/*</div>*/}
      {/*<div className="flex flex-col items-center justify-center md:mb-11">*/}
      <div className={styleImageContainer}>
        <img className={styleImage} src={imageSourceUrl} />
      </div>

      {/*</div>*/}
    </div>
  );
};
