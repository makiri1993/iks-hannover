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
      <div className={styleContentContainer}>
        <p className={styleContent}>{content}</p>
      </div>
      <div className={styleImageContainer}>
        <img className={styleImage} src={imageSourceUrl} />
      </div>
    </div>
  );
};
