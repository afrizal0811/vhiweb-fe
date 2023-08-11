import React from 'react'
import { Alert } from 'react-bootstrap'

const Alerts = (props) => {
  const { variant, text } = props
  return (
    <div>
      <Alert variant={variant} className='mb-3'>{text}</Alert>
    </div>
  )
}

export default Alerts
