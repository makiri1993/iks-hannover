import * as React from 'react'
import styled from 'styled-components'

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain

export const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`
