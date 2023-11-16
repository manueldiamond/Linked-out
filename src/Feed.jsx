
import InputOption from './InputOption.jsx'
import Post from './Posts.jsx'
import './Feed.css'
import { Photo,Create, CalendarMonth, Article} from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useState } from 'react'

const inputOptions=[
    {
        Icon:Photo,
        color:"lightblue",
        title:"Photo"
    },
    {
        Icon:CalendarMonth,
        color:"orange",
        title:"Event"
    },
    {
        Icon: Article,
        color:"#ff8e8e",
        title:"Write article"
    },

]
const Feed = () => {
    const [posts,setPosts]=useState([])
    const sendPost=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="feed flex-col">
        <div className="feed__inputContainer card pad">
            <div className="feed__inputHeader flex w-full items-center ">
                <Avatar  className='avatar'/>   
                <div className="feed__input bordered pad flex w-full">
                    
                    <Create className='dim'/>
                    <form className='flex w-full'>
                        <input className='full' type='text' placeholder='Start a Post'/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
            </div>
            <div className="feed__inputOptions px flex jc-space">
                {inputOptions.map(option=>
                    (<InputOption 
                        key={option.title} 
                        {...option}/>)
                )}
            </div>
        </div>
        <div className="posts-separator items-center flex">
            <hr className='dim flex-1 px'/>
            <div className="flex px items-center">
                <p className='dim'>Sort by:</p>
                <b>Top</b>
            </div>
        </div>
        <div className="posts">
            {posts.map(post=>
                <Post key={post.desc} {...post}/>
            )}
            <Post name="Sonny PAPA React" desc="CHAINSAW MAN" message="Doryok mirayi a beautiful star!!! Doryok mirayi a beautiful star!!! Doryok mirayi a beautiful star!!! "/>
        </div>
    </div>
  )
}

export default Feed