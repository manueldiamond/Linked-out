import { Avatar } from '@mui/material'

import './Sidebar.css'
import { profile } from './consts'
import { Add, Bookmark, ChevronRight } from '@mui/icons-material'
const Sidebar = () => {
  const connections=100
  const invitations=21
  return (
    <div className='sidebar flex-col'>
      <div className='sidebar__card card'>
        <img className='w-full sidebar__profile-bg' src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        
        <div className="sidebar__top flex-col">
          <Avatar onClick={()=>{}} className='sidebar__avatar center' src={profile.img} />
          <div className='pad'>
            <h4 className='heading'>{`${profile.firstName} ${profile.lastName}`}</h4>
            <p className='headline dim w-full'>{profile.headline}</p>
          </div>
        </div>
        <div className='profile__section network border-top heading py text-left'>
          <div className="hover-gray pad">
            <div className='jc-space'>
              <span className='dim'>Connections</span>
              <span className='accent'>{connections}</span>
            </div>
            <div className=''>Connect with alumni</div>
          </div>
          { invitations&&
            <div className="hover-gray pad">
              <div className='jc-space'>
                <span className='dim'>Invitations</span>
                <span className='accent'>{invitations}</span>
              </div>
            </div>
          }
        </div>
        <div className='profile__section hover-gray promo border-top pad text-left'>
          <p className='dim'>Access exclusive tools & insights</p>
          <div className='icon-text heading  flex '>
            <span className='premium-ico'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className="mercado-match" width="20" height="20" focusable="false">
              <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
              <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
              </svg>
            </span>
            <u>Try Premium free.</u></div>
        </div>
        <div className='profile__section hover-gray myitems border-top pad text-left'>
          <div className='items-center icon-text'>
           <Bookmark className='dim' />
            <span className='heading'>My items</span>
          </div>
        </div>
      </div>
      <div className=' sidebar__card card'>
        <div className='pad'>
          <div className="jc-space item-center grouped-list">
            <p className='pad'>Recent</p>
            <ChevronRight className='dim icon chev'/>
          </div>
          <div className="jc-space grouped-list">
            <p className='pad heading accent'>Groups</p>
            <ChevronRight className='dim icon chev'/>
          </div>
          <div className="jc-space grouped-list">
            <p className='pad heading accent'>Events</p>
            <Add className='dim icon'/>
          </div>
          <div className="jc-space grouped-list">
          <p className='pad heading accent'>Followed Hashtags</p>
        </div>
        </div>
        <div className='border-top heading hover-gray dim center pad'>  Discover more </div>
      </div>
    </div>
  )
}

// const GroupedList=()=>{
//   return(
//     <></>
//   )
// }
export default Sidebar