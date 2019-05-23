import React, { Component, ReactNode } from "react";
import "./textWithImg.scss";
import Text from '../text/Text';
const test = require("../../../static/img/cutmypic.png");

interface TextWithImgProps {
  textLeft?: boolean;
  textRight?: boolean;
  children?: ReactNode;
}

export default class TextWithImg extends Component<TextWithImgProps> {
  render() {
    return (
      <div className={`${this.getClassNames} text-img-container`}>
        <img src={test} />
        <Text preLine>{this.props.children}</Text>
      </div>
    );
  }

  private get getClassNames() {
    const classNames: string[] = [];
    const { textRight, textLeft } = this.props;
    if (textLeft) {
      classNames.push("textLeft");
    }

    if (textRight) {
      classNames.push("textRight");
    }

    return classNames.join(" ");
  }
}
