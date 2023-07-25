import { Avatar } from '@mui/material'

import './Sidebar.css'
import { profile } from './consts'
import { Padding } from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className='sidebar center'>
      <div className='sidebar__profile card'>
        <img className=' w-full sidebar__profile-bg' src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        <div className=''>
          <div className="sidebar__top flex-col">
            <Avatar onClick={()=>{}} className='sidebar__avatar center' src={profile.img} />
            <div className='pad'>
              <h4 className='heading'>{`${profile.firstName} ${profile.lastName}`}</h4>
              <p className='sidebar__email dim w-full'>{profile.email}</p>
            </div>
          </div>
          <div className='sidebar_stats pad'>
            {Object.keys(profile.stats).map((stat)=>(
              <div className='sidebar_stat jc-space items-center'>
                  <p className='heading dim'>{stat}</p>
                  <p className='heading accent' >{profile.stats[stat]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar