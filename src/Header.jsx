
import './Header.css'
import { Search } from '@mui/icons-material'
import HeaderOption from './HeaderOption'
import { headerOptions } from './consts'

const Header = () => {
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
            {headerOptions.map((headerOptionProps)=><HeaderOption key={headerOptionProps.title} {...headerOptionProps}/>)}
            <HeaderOption avatar="src/assets/man_2202112.png"  title="Me" />
        </div>
    </div>
  )
} 

export default Header