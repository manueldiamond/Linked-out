
import InputOption from './InputOption.jsx'
import Post from './Posts.jsx'
import './Feed.css'
import { Photo,Create, CalendarMonth, Article} from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { db } from './firebase.js'

import { addDoc, query ,collection , onSnapshot ,serverTimestamp,orderBy} from "firebase/firestore";
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice.js'
import FlipMove from 'react-flip-move'

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

    useEffect(()=>{
        onSnapshot(query(collection(db,'posts'),orderBy("timestamp","desc")),snapshot=>(
            setPosts(snapshot.docs.map(
                doc=>({
                    id:doc.id,
                    ...doc.data(),
                })
            ))
        ))
    },[])
    
  return (
    <div className="feed flex-col">
        <CreatePost/>
        <div className="posts-separator items-center flex">
            <hr className='dim flex-1 px'/>
            <div className="flex px items-center">
                <p className='dim'>Sort by:</p>
                <b>Top</b>
            </div>
        </div>
        <div className="posts">
            <FlipMove className="posts">
                {posts.map(post=>
                    <Post key={post.id} {...post}/>
                )}
            </FlipMove>
        </div>
    </div>
  )
}


const CreatePost=()=>{

    const [posting,setPosting]=useState(false)
    const [post,setPost]=useState("")

    
    const {photoURL,displayName,} = useSelector(selectUser)

    const sendPost=async(e)=>{
        e.preventDefault()
        setPosting(true)
        await addDoc(collection(db,'posts'),
            {
                name:displayName,
                photoURL,
                desc:"Desc of a fancy post",
                message:post,
                timestamp:serverTimestamp(),
            }
        )
        setPost("")
        setPosting(false)

    }
    return(
        <div className="feed__inputContainer card pad">
            <div className="feed__inputHeader flex w-full items-center ">
                <Avatar  className='avatar' src={photoURL}>
                    {displayName&&displayName[0]}
                </Avatar>   
                <div className={`${posting&&"loading"} feed__input bordered pad flex w-full`}>
                    
                    <Create className={`dim`} style={{display:posting?"none":"block"}}/>
                    <form className='flex w-full'>
                        <input 
                            onChange={
                                (e)=>setPost(e.target.value)
                            } 
                            value={post} 
                            disabled={posting}
                            className='full' type='text' 
                            placeholder='Start a Post'/>
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
    )
}
export default Feed