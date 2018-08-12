import * as React from 'react'
import { StyledPage } from './StyledComponents'

interface PageProps {
  className?: string
}

const Page: React.SFC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
