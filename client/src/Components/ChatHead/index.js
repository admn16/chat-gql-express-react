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

const ChatHead = ({ img }) => (
  <div>
    <Label>
      <CircleImg src={img}/>
      ADMN
    </Label>
  </div>
)

export { ChatHead }