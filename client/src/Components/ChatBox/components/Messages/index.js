import React from 'react'
import styled from 'styled-components'
import { Message } from '../index'

const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0as 10px #bdbdbd;
  display: block;
  height: 70%;
  margin: 10px;
  padding: 5px 10px;
`

const FakeData = [
  {
    message: 'Random String that I typed :P',
    dateTime: '03/23/2017 10:00 AM',
    sender: {
      img: 'http://via.placeholder.com/35x35',    
      name: 'Random Name'
    }
  },
  {
    message: 'I am the message mwahahahahahahhahahahaha',
    dateTime: '03/23/2017 10:00 AM',
    sender: {
      img: 'http://via.placeholder.com/35x35',    
      name: 'Anton Duane Nocum'
    }
  },
  {
    message: 'Mother of god!!!',
    dateTime: '03/23/2017 10:00 AM',
    sender: {
      img: 'http://via.placeholder.com/35x35',    
      name: 'Random Name'
    }
  },
  {
    message: 'West side is the best',
    dateTime: '03/23/2017 10:00 AM',
    sender: {
      img: 'http://via.placeholder.com/35x35',    
      name: 'Anton Duane Nocum'
    }
  },
  {
    message: 'Lorem ipsum something something',
    dateTime: '03/23/2017 10:00 AM',
    sender: {
      img: 'http://via.placeholder.com/35x35',    
      name: 'Anton Duane Nocum'
    }
  },
]

const Messages = () => {
  const messages = FakeData.map((item, i) => {
    const isOwn = item.sender.name === 'Anton Duane Nocum'

    return (
      <Message
        dateTime={item.dateTime}
        image={item.sender.img}
        key={i}
        message={item.message}
        name={item.sender.name}
        own={isOwn}
      />
    )
  })

  return (
    <Container>
      { messages }
    </Container>
  )
}

export { Messages }