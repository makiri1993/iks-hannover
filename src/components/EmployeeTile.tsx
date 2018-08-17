import * as React from 'react'
import { EmployeeImage, SignatureImage, CenteredPWithWidth, EmployeeDiv, CenteredH4 } from './StyledComponents'

interface Props {
  image: string
  signature: string
  name: string
  alt: string
  title: string
}

export default class EmployeeTile extends React.Component<Props> {
  render() {
    return (
      <EmployeeDiv>
        <EmployeeImage title={this.props.title} alt={this.props.alt} src={this.props.image} />
        <CenteredH4>{this.props.name}</CenteredH4>
        <CenteredPWithWidth>Geschäftsführerin</CenteredPWithWidth>
        <SignatureImage title={this.props.title} alt={this.props.alt} src={this.props.signature} />
      </EmployeeDiv>
    )
  }
}
