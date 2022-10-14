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
    <div className="flex flex-col items-center">
      <div
        className="flex flex-row justify-center items-start z-10 flex-wrap w-full "
        // style={{ height: "800px" }}
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
    </div>
  );
};
