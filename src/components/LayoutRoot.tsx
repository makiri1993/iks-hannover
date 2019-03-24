import * as React from 'react'
import styled from 'styled-components'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <StyledLayoutRoot className={className}>
    <div style={{ marginBottom: '3rem' }}>Diese Seite befindet sich aktuell im Umbaue und wird in Kürze wieder zür Verfügung stellen.</div>
    <div style={{ fontWeight: 800 }}>Falls Sie mit uns Kontakt aufnehmen wollen, können Sie uns unter dieser Nummer erreichen!</div>
    <div>TEL: 0511 / 210 10 44</div>
  </StyledLayoutRoot>
  // <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
)

export default LayoutRoot

export const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
`
