import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import MyFilter from './components/MyFilter'
import MyTable from './components/MyTable'
import MyPagination from './components/MyPagination'
import {useEffect, useState} from 'react'
import {$host} from '../http'

const App = () => {
  const [data, setData] = useState([])
  const [filteringData, setFilteringData] = useState(data)
  const [sortDirection, setSortDirection] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(2)

  const getData = async () => {
    const res = await $host.get('/api')
    return res.data
  }

  useEffect(() => {
    getData().then(res => setData(res))
  }, [])

  useEffect(() => {
    setFilteringData(data)
  }, [data])

  // Sorting data by table column
  const sortData = field => {
    const copyData = data.concat() // make a copy of the data to avoid mutation by the sort and reverse methods

    const sortData = copyData.sort((x, y) => (x[field] > y[field] ? 1 : -1))

    sortDirection ? setData(sortData) : setData(sortData.reverse())

    setSortDirection(!sortDirection)
  }

  // Filtering data by columns, condition and request text
  const filterData = callback => {
    const newData = data.filter(callback)
    if (newData.length > 0) {
      setFilteringData(newData)
    } else {
      alert('Sorry, the value you were looking for was not found.')
    }
  }

  const filterHandler = (field, condition, text) => {
    if (!text) return null
    switch (condition) {
      case 'equal':
        filterData(e => e[field] == text)
        break
      case 'contain':
        filterData(e => e[field].includes(text))
        break
      case 'more':
        filterData(e => e[field] > parseInt(text, 10))
        break
      case 'less':
        filterData(e => e[field] < parseInt(text, 10))
        break
    }
  }

  // Reset filtering
  const resetHandler = () => {
    setFilteringData(data)
  }

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteringData.slice(indexOfFirstItem, indexOfLastItem)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <Container>
      <MyFilter filterHandler={filterHandler} resetHandler={resetHandler} />
      <MyTable data={currentItems} sortData={sortData} />
      <MyPagination
        itemsPerPage={itemsPerPage}
        totalItems={filteringData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  )
}

export default App
