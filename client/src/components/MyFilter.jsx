import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const MyFilter = ({filterHandler, resetHandler}) => {
  const [columnValue, setColumnValue] = useState('title')
  const [conditionValue, setConditionValue] = useState('equal')
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='d-flex justify-content-center my-4'>
      <div className='mx-4'>
        <Form.Label htmlFor='columnSelect'>Select the column</Form.Label>
        <Form.Select
          id='columnSelect'
          aria-label='Default select example'
          value={columnValue}
          onChange={event => setColumnValue(event.target.value)}
        >
          {['title', 'amount', 'distance'].map(e => (
            <option key={e} value={e}>
              {e.toUpperCase()}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='mx-4'>
        <Form.Label htmlFor='conditionSelect'>Select the condition</Form.Label>
        <Form.Select
          id='conditionSelect'
          aria-label='Default select example'
          value={conditionValue}
          onChange={event => setConditionValue(event.target.value)}
        >
          {['equal', 'contain', 'more', 'less'].map(e => (
            <option key={e} value={e}>
              {e.toUpperCase()}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className='mx-4'>
        <Form.Label htmlFor='filterValue'>Enter the value</Form.Label>
        <div className='d-flex'>
          <Form.Control
            type='text'
            id='filterValue'
            placeholder='desired value'
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
          />
          <Button variant='primary' className='mx-3' onClick={() => filterHandler(columnValue, conditionValue, searchValue)} >
            Search
          </Button>
          <Button variant='danger' onClick={() => resetHandler()} >Reset</Button>
        </div>
      </div>
    </div>
  )
}

export default MyFilter
