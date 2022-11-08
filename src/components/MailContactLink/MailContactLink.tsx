import React from "react";

interface MailContactLinkProps {
  name: string;
  role: string;
  email: string;
}

export const MailcontactLink: React.FC<MailContactLinkProps> = ({
  name,
  role,
  email,
}) => {
  return (
    <div className="flex flex-col items-start my-2">
      <div className="flex flex-row">
        <span className="text-[#e53129] text-lg font-semibold mr-4">
          {name}
        </span>
        <h6 className="text-[#545456] mt-1 text-xs font-semibold">|{role}</h6>
      </div>
      <a className="text-[#e53129]" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
};
