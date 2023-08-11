import React from 'react'
import { Pagination } from 'react-bootstrap'

const Paginations = (props) => {
  const { page, total } = props

  let items = []

  for (let number = 1; number <= total; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => props.handleClick(`${number}`)}
      >
        {number}
      </Pagination.Item>
    )
  }

  return (
    <div className='mt-5'>
      <Pagination size='sm'>{items}</Pagination>
    </div>
  )
}

export default Paginations
