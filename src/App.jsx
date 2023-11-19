
import Header from './Header'
// import Credits from './Credits'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './App.css'
import {  useSelector } from 'react-redux'
import {  selectUser } from './features/userSlice'
import Login from './Login.jsx'
import Widgets from './Widgits.jsx'
const App = () => {
  const user = useSelector(selectUser)

  return (
    <div className='app  bg-light'>
      <Header />
      
      {!user?(
        <Login/>
      ):(
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )
      }
      {/* <Credits /> */}
    </div>
  )
}

export default App