import React from 'react'
import styled from 'styled-components'

import { primary } from '../../Config/colors'

const Header = styled.header`
  background: ${primary};
  box-shadow: 0 0 5px;
  height: 50px;
  position: relative;
  width: 100%;
  z-index: 10;
`

const Title = styled.h2`
  color: #fff;
  margin: 0;
  padding: 0;
  position: relative;
  top: 11px;
  text-align: center;
`

const iconStyle = {
  color: '#FF9800'
}

const AppBar = ({ title }) => {
  return (
    <Header>
      <Title>
        <i className="material-icons md-24" style={iconStyle}>whatshot</i>
        { title }
      </Title>
    </Header>
  )
}

export { AppBar }