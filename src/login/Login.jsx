import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { HandleButton } from '../utility/handleButton'

const Login = () => {
  const { handleChange, handleSubmit } = HandleButton()
  return (
    <div className='m-5 d-flex justify-content-center align-items-center'>
      <Form className='w-25'>
        <Form.Group
          className='mb-3'
          controlId='formBasicEmail'
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            onChange={handleChange}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formBasicPassword'
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            onChange={handleChange}
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button
          onClick={handleSubmit}
          variant='primary'
          type='submit'
        >
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login
