import './App.css'
import Landing from './components/Landing'
import Loading from './components/Loading'
import ResultPage from './components/ResultPage'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const {loading, error, view} = useSelector((state) => state.pincodeLookup)

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      {
        view === 'lookup' && 
        <Landing />
      }
      {
        loading === true && 
        <Loading />
      }
      {
        view === 'error' && error
      }
      {
        view === 'result' && <ResultPage />
      }
      
    </div>
  )
}

export default App
