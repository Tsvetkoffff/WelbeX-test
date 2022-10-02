import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'

const MyPagination = ({paginateData, pagesTotalCount, activePage, setActivePage}) => {
  let items = []

  const changePage = current => {
    setActivePage(current)
    paginateData(current)
  }

  for (let number = 1; number <= pagesTotalCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => changePage(number)}>
        {number}
      </Pagination.Item>
    )
  }
  return <Pagination>{items}</Pagination>
}

export default MyPagination
