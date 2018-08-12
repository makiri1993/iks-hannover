import * as React from 'react'
import { StyledContainer } from './StyledComponents'

interface ContainerProps {
  className?: string
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
