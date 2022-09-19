import React from "react";
import { Heading } from "../Heading/Heading";
import { ServicesTile } from "../ServicesTile/ServicesTile";

interface ServicesProps {
  nodes: {
    title: string;
    servicesFields: {
      serviceicon: {
        sourceUrl: string;
      };
      servicetext: string;
    };
  }[];
}

export const Services: React.FC<ServicesProps> = ({ nodes }) => {
  return (
    <div
      className="flex flex-row justify-center items-start flex-wrap w-full mt-48"
      style={{ height: "800px" }}
    >
      {nodes.map((elements, index) => (
        <ServicesTile
          key={index}
          title={elements.title}
          text={elements.servicesFields.servicetext}
          index={index}
          sourceUrl={elements.servicesFields.serviceicon.sourceUrl}
        />
      ))}
    </div>
  );
};
