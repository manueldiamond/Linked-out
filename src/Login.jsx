import { useEffect, useState } from 'react'
import './login.css'
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import {login as loginAction, logout} from './features/userSlice'

const loginInputs=[
    {
        placeholder:'fullname(requred if registering)',
        name:'fullname'
        
    },
    {
        placeholder:'Profile pic URL(optional)',
        name:'photo'
    },
    {
        placeholder:'Email',
        name:'email',
        type:'email'
    },
    {
        placeholder:'Password',
        name:'password',
        type:'password'
    },
]
const Login = () => {
    const [firstLoad,setFirstLoad]=useState(true)
    const [loading,setLoading]=useState(false)
    const [loginData,setLoginData]=useState({
        fullname:"",email:"",password:"",photo:""
    })
    const dispatch = useDispatch()

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
               dispatchLogin(user)
            }else{
                dispatch(logout())
            }
          setFirstLoad(false)
        })
      },[])

    const setData=(field,value)=>{
        setLoginData(prevData=>(
            {...prevData,[field]:value}
        ))
    }

    const login=async(e)=>{
        e.preventDefault()
        if (loading) return  
        setLoading(true)
        const {email,password}=loginData
        await signInWithEmailAndPassword(auth,email,password)
            .then(userAuth=>dispatchLogin(userAuth.user))
            .catch( ({message})=> alert("ERROR SIGNING IN!! \n"+message))
        setLoading(false)
    }

    const register=async()=>{
        if (loading) return  
        
        const {fullname,email,password,photo}=loginData
        
        if(!fullname){
            return alert("Fullname is required to register")
        }
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email,password)
            .then(userAuth=>updateProfile(userAuth.user,{
                    photoURL:photo,
                    displayName:fullname,
                })
                .then(()=>dispatchLogin(userAuth.user))
                .catch(({message})=>{
                    deleteUser(userAuth.user)
                    alert("ERROR WITH PROFILE: \n"+message)
                }))
            .catch(
                (e)=> alert("ERROR REGISTERING USER! \n"+e.message)
        )
        setLoading(false)
    }

    const dispatchLogin=({email,uid,displayName,photoURL})=>{
        dispatch(loginAction({email,uid,displayName,photoURL}))
    }

  return (
    <div className='login center flex-col jc-center'>
        <img className='py' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' width="320px"/>
        {firstLoad?
            <div className='loading first-load-div card'/>
            :<form className='flex-col'>
                {loginInputs.map(input=>(
                        <input key={input.name}
                            className={loading&&' loading'}
                            disabled={loading}
                            onChange={
                            (e)=>setData(input.name,e.target.value)}
                            {...input}/>
                    
                    ))}
                <button onClick={login} className='py' type='submit'>Sign In</button>
                <hr className='dim'/>
            </form>
        }
        <p className=''>Not a member? <span onClick={register} className='register accent heading'>Register Now</span></p>
    </div>
  )
}

export default Login