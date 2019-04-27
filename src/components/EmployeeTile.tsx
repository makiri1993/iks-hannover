import React, { Component } from "react";
import Heading from "./heading/Heading";
import Img, { FluidObject } from "gatsby-image";

interface Props {
  team?: boolean;
  image: FluidObject;
  signature?: FluidObject;
  name: string;
  job: string;
  alt: string;
  email?: string;
}

export default class EmployeeTile extends Component<Props> {
  render() {
    const { image, job, name, team, email, alt, signature } = this.props;
    return (
      <div className="employee-container">
        <Img className="EmployeeImage" title={name} alt={alt} fluid={image} />
        <Heading center size={4} orange>
          {name}
        </Heading>
        <p className="CenteredPWithWidth">{job}</p>
        {team ? (
          <a className="LinkEmailOrange" title={name} href={"mailto:" + email}>
            E-Mail
          </a>
        ) : (
          <Img
            className="SignatureImage"
            title={name}
            alt={alt}
            fluid={signature}
          />
        )}
      </div>
    );
  }
}
