import React, { MouseEventHandler } from 'react'

const Button:React.FC<Props> = ({ buttonText, color, onClick }:Props) => (
  <button onClick={onClick}
    style={{ backgroundColor: color }}
    className="btn">
    {buttonText}
  </button>
)

Button.defaultProps = {
    buttonText: 'Button',
    color: '#FF00FF'
}

type Props = {
  buttonText: string,
  color: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export default Button