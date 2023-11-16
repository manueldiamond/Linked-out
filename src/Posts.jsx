import { Avatar } from '@mui/material'
import './posts.css'
import InputOption from './InputOption'
import { CommentOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@mui/icons-material'

const engagementOptions=[
    {
        title:"Like",
        Icon:ThumbUpOutlined,
        color:"gray",
    },{
        title:"Like",
        Icon:CommentOutlined,
        color:"gray",
    }, {
        title:"Share",
        Icon:ShareOutlined,
        color:"gray",
    },
    {
        title:"Like",
        Icon:SendOutlined,
        color:"gray",
    }
]
const Posts = ({name,desc,message,photoUrl}) => {
  return (
    <div className='Posts card pad'>
        <div className="post__header flex items-center">
            <Avatar src={photoUrl}/>
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
}

export default Posts