import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../constant/baseUrl'
import { postApi } from '../utility/getApi'
import { localStorages } from './localStorages'

export const HandleButton = () => {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const signin = async () => {
    const url = `${baseUrl}/login`
    const response = await postApi(url, values)
    const token = response.data.token
    localStorages(token)
    setLoggedIn(true)
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signin()
    navigate('/users?pages=1')
  }

  const handleLogout = () => {
    setLoggedIn(false)
    localStorage.clear()
    navigate('/')
  }

  return {
    handleChange,
    handleSubmit,
    handleLogout,
    values,
    loggedIn,
  }
}
