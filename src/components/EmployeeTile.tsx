import * as React from 'react'
import styled from 'styled-components'
import { fade } from '../styles/mixins'
import { colors, breakpoints } from '../styles/variables'

interface Props {
  team?: boolean
  image: string
  signature?: string
  name: string
  job: string
  alt: string
  title: string
  email?: string
}

export default class EmployeeTile extends React.Component<Props> {
  render() {
    return (
      <EmployeeDiv>
        <EmployeeImage title={this.props.title} alt={this.props.alt} src={this.props.image} />
        <CenteredH4>{this.props.name}</CenteredH4>
        <CenteredPWithWidth>{this.props.job}</CenteredPWithWidth>
        {this.props.team ? (
          <LinkEmailOrange title={this.props.title} href={'mailto:' + this.props.email}>{this.props.email}</LinkEmailOrange>
        ) : (
            <SignatureImage title={this.props.title} alt={this.props.alt} src={this.props.signature} />
          )}
      </EmployeeDiv>
    )
  }
}
export const EmployeeDiv = styled.div`
  width: 250px;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* height: auto;
  padding: 10px; */
  @media only screen and (max-width: ${breakpoints.sm}px) {
    margin:0 auto;
  }
`

export const EmployeeImage = styled.img`
  width: 250px;
  top: 0px;
  left: 0px;
  object-fit: cover;
  animation: ${fade};
  animation-duration: 1.3s;
`

export const CenteredH4 = styled.h4`
  text-align: center;
  font-weight: 500;
  /* padding: 1.4rem; */
  margin: 0.824em;
`

export const CenteredP = styled.p`
  text-align: center;
`

export const CenteredPWithWidth = styled(CenteredP)`
  width: 250px;
`

export const LinkEmail = styled.a`
  cursor: pointer;
  color: ${colors.black};
  text-decoration: underline;
  text-decoration-color: red;
`

export const LinkEmailOrange = LinkEmail.extend`
  text-decoration: underline;
  color: ${colors.orange};
`

export const SignatureImage = styled.img`
  width: 166px;
  left: 12%;
  object-fit: cover;
  animation: ${fade};
  animation-duration: 1.3s;
  @media only screen and (max-width: ${breakpoints.sm}px) {
    left: 0%;
  }
`
