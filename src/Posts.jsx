/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Avatar } from '@mui/material'
import './posts.css'
import InputOption from './InputOption'
import { CommentOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@mui/icons-material'
import { forwardRef } from 'react'

const engagementOptions=[
    {
        title:"Like",
        Icon:ThumbUpOutlined,
        color:"gray",
    },{
        title:"Comment",
        Icon:CommentOutlined,
        color:"gray",
    }, {
        title:"Share",
        Icon:ShareOutlined,
        color:"gray",
    },
    {
        title:"Send",
        Icon:SendOutlined,
        color:"gray",
    }
]
const Posts = forwardRef(({name,photoURL,desc,message},ref) => {
  return (
    <div ref={ref} className='Posts card pad'>
        <div className="post__header flex items-center">
            <Avatar src={photoURL}>
                {name[0]}
            </Avatar>
            <div className='post__info px'>
                <h1 className='heading'>{name}</h1>
                <p className='dim'>{desc}</p>
            </div>
        </div>
        <div className="post__body py">
            <p>{message}</p>
        </div>
        <div className="engagement flex border-top">
            {engagementOptions.map(option=>
               <InputOption className="flex-1 center" key={option.title} {...option}/>)}
        </div>
    </div>
  )
})

export default Posts