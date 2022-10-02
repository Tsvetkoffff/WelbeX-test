import React, {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'

const MyPagination = ({paginateData, pagesTotalCount}) => {
  const [active, setActive] = useState(1)
  let items = []

  const changePage = current => {
    setActive(current)
    paginateData(current)
  }

  for (let number = 1; number <= pagesTotalCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => changePage(number)}>
        {number}
      </Pagination.Item>
    )
  }
  return <Pagination>{items}</Pagination>
}

export default MyPagination
