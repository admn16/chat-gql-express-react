import React from 'react'
import styled from 'styled-components'

const CircleImg = styled.img`
  border-radius: 50%;
  margin-bottom: 2px;
`

const Label = styled.label`
  cursor: pointer;
  display: block;
  font-size: 10px;
  padding: 7px 0 5px;  
  text-align: center;
  width: 100%;

  &:hover {
    background: #cccecc;
  }
`

const ChatHead = ({ img, name }) => {
  const shortName = name.replace(/[a-z\s]/g, '')
  
  return (
    <div>
      <Label>
        <CircleImg src={img}/>
        { shortName }
      </Label>
    </div>
  )
}

export { ChatHead }