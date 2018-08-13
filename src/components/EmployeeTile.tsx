import * as React from 'react'
import { EmployeeImage, SignatureImage, CenteredPWithWidth, EmployeeDiv, CenteredH4 } from './StyledComponents'

interface Props {
  image: string
  signature: string
  name: string
}

export default class EmployeeTile extends React.Component<Props> {
  render() {
    return (
      <EmployeeDiv>
        <EmployeeImage src={this.props.image} alt="" />
        <CenteredH4>{this.props.name}</CenteredH4>
        <CenteredPWithWidth>Geschäftsführerin</CenteredPWithWidth>
        <SignatureImage src={this.props.signature} alt="" />
      </EmployeeDiv>
    )
  }
}
