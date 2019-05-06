import React, { Component } from "react";
import "./jobTile.scss";
import Heading from '../heading/Heading';
import Text from '../text/Text';
import { Link } from '@reach/router';

interface JobTileProps {
  title?: string;
  text?: string;
  link?: string;
}

export default class JobTile extends Component<JobTileProps> {
  render() {
    return (
      <div className="job-tile-container">
        <div className="job-tile-title">
          <Heading size={1} uppercase left orange fontWeight={500}>
            {this.props.title}
          </Heading>
        </div>
        <div className="job-tile-text">
          <Text preLine>
            {this.props.text}
          </Text>
        </div>
        <div className="job-tile-link">
          <Link to={this.props.link}>mehr erfahren und bewerben ></Link>
        </div>
      </div>
    );
  }
}
