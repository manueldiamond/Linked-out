
import Header from './Header'
import Credits from './Credits'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './App.css'

const App = () => {
  return (
    <div className='app bg-light'>
      <Header />
      
      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>

      <Credits />
    </div>
  )
}

export default App