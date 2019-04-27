import React, { Component, ReactNode } from "react";
import "./textWithImg.scss";
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
        <p className="text-wrap-pre-line">{this.props.children}</p>
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