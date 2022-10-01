import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import './App.css'
import MyFilter from './components/MyFilter'
import MyTable from './components/MyTable'
import MyPagination from './components/MyPagination'

const App = () => {
  const data = [
    {date: 1, title: 'man', amount: 10, content: 'full'},
    {date: 2, title: 'woman', amount: 11, content: 'skinni'},
  ]

  return (
    <Container>
      <MyFilter data={data}/>
      <MyTable data={data}/>
      <MyPagination data={data}/>
    </Container>
  )
}

export default App
