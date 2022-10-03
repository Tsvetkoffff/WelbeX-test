import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'

const MyPagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
  let items = []

  for (let number = 1; number <= Math.ceil(totalItems / itemsPerPage); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => paginate(number)}
      >
        {number}
      </Pagination.Item>
    )
  }
  return <Pagination>{items}</Pagination>
}

export default MyPagination
