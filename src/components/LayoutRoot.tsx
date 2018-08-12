import * as React from 'react'
import { StyledLayoutRoot } from './StyledComponents'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
)

export default LayoutRoot
