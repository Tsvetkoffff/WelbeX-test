import React from 'react'
import Table from 'react-bootstrap/Table'

const MyTable = ({data, sortData}) => {
  return (
    <Table striped>
      <thead>
        <tr>
          {Object.keys(data[0]).map(e => (
            <th
              key={Math.random()}
              onClick={() => sortData(e)}
              style={e !== 'date' ? {cursor: 'pointer'} : null}
            >
              {e.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(e => (
          <tr key={Math.random()}>
            <td>{e.date}</td>
            <td>{e.title}</td>
            <td>{e.amount}</td>
            <td>{e.content}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default MyTable
