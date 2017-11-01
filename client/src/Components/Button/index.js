import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { secondary, secondary_dark } from '../../Config/colors'

const Button = ({ children, to }) => {
  const styles = `
    background: ${secondary};
    color: #fff;
    font-size: 18px;
    padding: 5px 20px;
    text-decoration: none;
    width: 100%;

    &:hover {
      background: ${secondary_dark};
    }
  `

  const Component = (typeof to !== 'undefined') ?
    styled(Link)`${styles}` :
    styled.button`${styles}`

  return (
    <Component to={to}>{ children }</Component>
  )
}

export { Button }