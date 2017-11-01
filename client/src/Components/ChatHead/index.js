import React from 'react'
import styled from 'styled-components'

const CircleImg = styled.img`
  border-radius: 50%;
  height: ${(props) => props.size};
  margin-bottom: 2px;
  width: ${(props) => props.size};
`

const ChatHead = ({ img, size = 'auto', name }) => {  
  return (
    <CircleImg
      size={size}
      src={img}/>
  )
}

export { ChatHead }