import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../constant/baseUrl'
import { postApi } from '../utility/getApi'
import { checkValidToken, localStorages } from '../utility/localStorages'

const Login = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const fetchData = async () => {
    const url = `${baseUrl}/login`
    const response = await postApi(url, values)
    const token = response.data.token
    localStorages(token)
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetchData()
    if (checkValidToken()) {
      navigate('/users?page=1')
    }
  }

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
