import React from 'react'
import Form from 'react-bootstrap/Form'

const MyFilter = ({data}) => {
  return (
    <div className='d-flex justify-content-center my-4'>
      <div className='mx-4'>
        <Form.Label htmlFor='columnSelect'>Select the column</Form.Label>
        <Form.Select id='columnSelect' aria-label='Default select example'>
          {Object.keys(data[0]).map((e, i) => (
            <option key={e} value={i+1}>{e.toUpperCase()}</option>
          ))}
        </Form.Select>
      </div>
      <div className='mx-4'>
        <Form.Label htmlFor='conditionSelect'>Select the condition</Form.Label>
        <Form.Select id='conditionSelect' aria-label='Default select example'>
          <option value='1'>equal</option>
          <option value='2'>contain</option>
          <option value='3'>more</option>
          <option value='4'>less</option>
        </Form.Select>
      </div>
      <div className='mx-4 flex-grow'>
        <Form.Label htmlFor='filterValue'>Enter the value</Form.Label>
        <Form.Control type='text' id='filterValue' placeholder='desired value'/>
      </div>
    </div>
  )
}

export default MyFilter
