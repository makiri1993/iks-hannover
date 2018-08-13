import * as React from 'react'
import { FlexDivContentCenter, OneColumn, ButtonForIcon, IconForButton } from './StyledComponents'

interface Props {}

export default class FourColumns extends React.Component<Props> {
  render() {
    return (
      <FlexDivContentCenter>
        <OneColumn>
          <ButtonForIcon>
            <IconForButton />
          </ButtonForIcon>
        </OneColumn>
      </FlexDivContentCenter>
    )
  }
}
