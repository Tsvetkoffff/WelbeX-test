import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import MyFilter from './components/MyFilter'
import MyTable from './components/MyTable'
import MyPagination from './components/MyPagination'
import {useEffect, useState} from 'react'

const App = () => {
  const mockData = [
    {date: 1, title: 'man', amount: 5, content: 'full'},
    {date: 2, title: 'woman', amount: 4, content: 'skinni'},
    {date: 1, title: 'man', amount: 5, content: 'full'},
    {date: 2, title: 'woman', amount: 4, content: 'skinni'},
    {date: 1, title: 'man', amount: 5, content: 'full'},
    {date: 2, title: 'woman', amount: 4, content: 'skinni'},
    {date: 1, title: 'man', amount: 5, content: 'full'},
    {date: 2, title: 'woman', amount: 4, content: 'skinni'},
    {date: 1, title: 'man', amount: 5, content: 'full'},
    {date: 2, title: 'woman', amount: 4, content: 'skinni'},
    {date: 1, title: 'man', amount: 5, content: 'full'},
    {date: 2, title: 'woman', amount: 4, content: 'skinni'},
  ]

  const rowsTotalCount = mockData.length,
    rowsPerPage = 5,
    pagesTotalCount = Math.ceil(rowsTotalCount / rowsPerPage),
    startPage = 1,
    [activePage, setActivePage] = useState(1)

  const [data, setData] = useState(mockData),
    [sortDirection, setSortDirection] = useState(false)

  const sortData = field => {
    if (field !== 'date') {
      const copyData = data.concat() // make a copy of the data to avoid mutation by the sort and reverse methods
      const sortData = copyData.sort((x, y) => (x[field] > y[field] ? 1 : -1))
      sortDirection ? setData(sortData) : setData(sortData.reverse())
      setSortDirection(!sortDirection)
    }
  }

  const filterData = callback => {
    const filteredData = mockData.filter(callback)
    if (filteredData.length > 0) {
      setData(filteredData)
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

  const resetHandler = () => {
    setActivePage(1)
    paginateData(startPage)
  }

  const paginateData = (currentPage) => {
    const lastItem = currentPage * rowsPerPage,
      firstItem = lastItem - rowsPerPage
    setActivePage(currentPage)
    setData(mockData.slice(firstItem, lastItem))
  }

  useEffect(() => paginateData(startPage, rowsPerPage), [])

  return (
    <Container>
      <MyFilter data={data} filterHandler={filterHandler} resetHandler={resetHandler} />
      <MyTable data={data} sortData={sortData} />
      <MyPagination paginateData={paginateData} pagesTotalCount={pagesTotalCount} activePage={activePage} setActivePage={setActivePage} />
    </Container>
  )
}

export default App
