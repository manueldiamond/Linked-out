
import './Header.css'
import { Search } from '@mui/icons-material'
import HeaderOption from './HeaderOption'
import { headerOptions } from './consts'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

const Header = () => {
  const dispatch=useDispatch()
  const user=useSelector(selectUser)
  const logoutUser=()=>{
    auth.signOut()
    dispatch(logout())
  }
  
  const onClickHeaderOption=(title)=>{
    switch(title){
      case "Me":
        logoutUser()
        break;
    }
  }
  return (
    <div className='header items-center jc-even w-full bg-card'>
        {/* <h2>This is the header</h2> */}
        <div className="header__left">
            <img src="src/assets/linkedin.png" alt="" />
            <div className="header__search">
                <Search/>
                <input  type='text'/>
            </div>
        </div>
        <div className="header__right">
            {headerOptions.map((headerOptionProps)=>(
              <HeaderOption 
                key={headerOptionProps.title} 
                onClick={onClickHeaderOption}
                {...headerOptionProps}
                avatar={headerOptionProps.title==="Me"&&user&&user.photoURL}
                />
              ))}
        </div>
    </div>
  )
} 

export default Header