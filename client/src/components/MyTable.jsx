import React from 'react'
import Table from 'react-bootstrap/Table'

const MyTable = ({data, sortData}) => {
  return (
    <Table striped>
      <thead>
        <tr>
          {['date', 'title', 'amount', 'distance'].map(h =>
            h !== 'date' ? (
              <th style={{cursor: 'pointer'}} key={h} onClick={() => sortData(h)}>
                {h.toUpperCase()}
              </th>
            ) : (
              <th key={h}>{h.toUpperCase()}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {data.map(e => (
          <tr key={e.id}>
            <td>{e.date}</td>
            <td>{e.title}</td>
            <td>{e.amount}</td>
            <td>{e.distance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default MyTable
