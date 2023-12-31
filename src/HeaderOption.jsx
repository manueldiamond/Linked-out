/* eslint-disable react/prop-types */
import './HeaderOptions.css'
import { Avatar } from '@mui/material'
const HeaderOption = ({onClick,avatar,Icon,title }) => {
  return (
    <div onClick={()=>onClick(title)} className='headerOption jc-center '>
        {Icon&&<Icon className='headerOption__icon' />}
        {avatar&&<Avatar className="headerOption__icon" src={avatar} />}
        <h3 className='headerOption__title '>{title}</h3>
    </div>
  )
}

export default HeaderOption