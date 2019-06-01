import React, { Component, ReactNode } from "react";
import "./textWithImg.scss";
import Text from '../text/Text';
import Img, { FluidObject } from 'gatsby-image'

interface TextWithImgProps {
  textLeft?: boolean;
  textRight?: boolean;
  image?: any;
  children?: ReactNode;
}

export default class TextWithImg extends Component<TextWithImgProps> {
  render() {
    return (
      <div className={`${this.getClassNames} text-img-container`}>
        {this.props.image ? (
          <div className='img-container'>
            <Img className='flex-image' fluid={this.props.image.childImageSharp.fluid} alt='Bild zum Text' />
          </div>
        ) : null}
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
