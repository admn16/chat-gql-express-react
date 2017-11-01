import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background: #fff;
  box-shadow: 0 0 10px rgba(20, 20, 20, 0.27);
  padding: 20px;
  width: ${(props) => props.width || '100%'};
`

export { Card }