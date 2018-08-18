import * as React from 'react'
import styled from 'styled-components'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
)

export default LayoutRoot

export const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
`
