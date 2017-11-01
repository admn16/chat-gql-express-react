import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { secondary, secondary_dark } from '../../../../Config/colors'

const Form = styled.form`
  margin: 10px;
  position: relative;
`

const InputArea = styled.textarea`
  border: none;
  border-radius: 10px;
  font-size: 14px;
  height: 50px;
  outline-color: #c7c7c7;
  outline-width: 2px;
  resize: none;
  width: 100%;
`

const SubmitButton = styled.button`
  background: ${secondary};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  padding: 3px 0 0 3px;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 40px;

  &:hover {
    background: ${secondary_dark};
  }

  & i {
    color: #fff;
    font-size: 20px;
  }
`

class TextBox extends PureComponent {
  state = {
    inputAreaValue: ''
  }

  listenType(e) {
    if ((e.ctrlKey || e.metaKey) && (e.keyCode == 13 || e.keyCode == 10)) {
      document.getElementById('message-submit').click();
    }
  }

  sendMessage = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  updateState = (e) => {
    if (e.target.id === 'message') {
      this.setState({ inputAreaValue: e.target.value })
    }
  }

  render() {
    const { inputAreaValue } = this.state;

    return (
      <Form onSubmit={this.sendMessage}>
        <InputArea 
          id="message"
          onChange={this.updateState}
          onKeyDown={this.listenType}
          value={inputAreaValue} />

        <SubmitButton id="message-submit">
          <i className="material-icons">send</i>
        </SubmitButton>
      </Form>
    )
  }
}

export { TextBox }