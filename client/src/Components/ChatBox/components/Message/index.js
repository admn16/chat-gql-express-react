import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { ChatHead } from '../../../index'

class Message extends PureComponent {
  state = {
    showDate: false
  }

  toggleDate = () => {
    const { showDate } = this.state;
    this.setState({ showDate: !showDate })
  }
  
  render() {
    const {
      dateTime,
      image,
      message,
      name,
      own
    } = this.props

    const { showDate } = this.state;

    const {
      Container,
      Date,
      Name,
      TextContainer,
      Text
    } = components(own)

    return (
      <Container>
        <ChatHead
          img={image}
          size="30px"/>
   
        <TextContainer onClick={this.toggleDate}>
          <Name>
            { name }
          </Name>
          
          <Text>
            { message }
          </Text>
  
          {showDate && (
            <Date>
              { dateTime }
            </Date>
          )}
        </TextContainer>
      </Container>
    )
  }
}

const components = (own) => ({
  Container: styled.div`
    display: flex;
    flex-direction: ${own ? 'row-reverse' : 'row'};

    & img {
      margin-top: 8px;
    }
  `,

  Date: styled.span`
    align-self: ${own ? 'flex-end' : 'flex-start'};
    font-size: 10px;
  `,

  Name: styled.label`
    align-self: ${own ? 'flex-end' : 'flex-start'};
    font-size: 10px;
    margin-left: 10px;
    visibility: ${own ? 'hidden' : 'visible'};
  `,

  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5px;
  `,

  Text: styled.span`
    background: ${own ? '#5d5d5d' : '#efefef'};
    border-radius: 15px;  
    color: ${own ? '#efefef' : '#232323'};
    font-size: 13px;
    padding: 5px 10px;
    width: auto;
  `
})

export { Message }