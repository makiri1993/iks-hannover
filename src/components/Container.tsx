import React from 'react'

interface ContainerProps {
  className?: string
}

// tslint:disable-next-line:variable-name
const Container: React.SFC<ContainerProps> = ({ children }) => (
  <div className='max-container'>{children} </div>
)

export default Container

