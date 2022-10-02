import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import MyFilter from './components/MyFilter'
import MyTable from './components/MyTable'
import MyPagination from './components/MyPagination'
import {useState} from 'react'

const App = () => {
  const mockData = [
    {date: 1, title: 'man', amount: 5, content: 'full'},
    {date: 2, title: 'woman', amount: 4, content: 'skinni'},
  ]

  const [data, setData] = useState(mockData)
  const [sortDirection, setSortDirection] = useState(false)

  const sortData = field => {
    if (field !== 'date') {
      const copyData = data.concat() // make a copy of the data to avoid mutation by the sort and reverse methods
      const sortData = copyData.sort((x, y) => (x[field] > y[field] ? 1 : -1))
      sortDirection ? setData(sortData) : setData(sortData.reverse())
      setSortDirection(!sortDirection)
    }
  }

  return (
    <Container>
      <MyFilter data={data}/>
      <MyTable data={data} sortData={sortData} />
      <MyPagination data={data} />
    </Container>
  )
}

export default App
