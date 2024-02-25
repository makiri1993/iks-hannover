import React from "react";
import { FooterData } from "../../../data";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const Footer: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center w-full relative -bottom-8 mt-24 z-0 bg-[#ee7917]"
      style={{ height: "100%" }}
    >
      <div
        className="flex flex-col w-full items-center my-2 md:my-0 md:flex-row bg-[#ee7917] items-start  md:justify-center py-4"
        style={{ height: "100%" }}
      >
        {FooterData.map((elements, index) => (
          <div
            className="flex flex-col text-white justify-start items-start w-9/12 md:w-4/12 my-4 md:my-0"
            key={index}
            style={{ height: "470px" }}
          >
            <h3 className="text-3xl font-semibold pb-4">{elements.name}</h3>
            <div className="flex flex-col pb-4">
              <span>{elements.location}</span>
              <span>{elements.PLZ}</span>
            </div>
            <div className="flex flex-col pb-4">
              <span>Tel.{elements.phone}</span>
              <span>Fax {elements.FAX}</span>
            </div>
            {index === 0 ? (
              <div className="flex flex-col">
                <a href="mailto:iks-hannover@iks-hannover.de">
                  Mail:{elements.Mail}
                </a>
                <Link className="underline" to={"/impressum"}>
                  Impressum
                </Link>
                <Link className="underline" to={"/dataSecurity"}>
                  Datenschutzerklärung
                </Link>
              </div>
            ) : undefined}
            {index === 0 ? (
              <StaticImage
                className=" mt-18 h-full"
                style={{ width: "200px", height: "170px" }}
                src="../../images/logo_iks.png"
                alt={""}
              />
            ) : undefined}{" "}
            {index === 1 ? (
              <StaticImage
                className=""
                style={{ width: "200px", height: "170px" }}
                src="../../images/logo_baum.png"
                alt={""}
              />
            ) : undefined}
          </div>
        ))}
      </div>
    </div>
  );
};
