import { FiberManualRecord, InfoRounded } from '@mui/icons-material'
import './widgets.css'


const articles=[
    {
        heading:"Manuel makes Linkedin",
        subtitle:"WOOT WOOT",
        readers:0,
    },
    {
        heading:"PAPA REACT IS BACK",
        subtitle:"Top News",
        readers:999,

    },
    {
        heading:"BITCOIN IS DED",
        subtitle:"WOW",
        readers:"999+"
    },
    {
        heading:"Linked in News is FAKE??",
        subtitle:"find out more",
        readers:"12"
    },
    
]
const Widgits = () => {


  return (
    <div className='widgets card pad'>
        <div className="flex jc-space">
            <h4>Linked News</h4>
            <InfoRounded/>
        </div>
        <div className="articles flex-col py">
        {articles.map(({heading,subtitle,readers})=>(
            <div key={heading} className="article flex ">
                <FiberManualRecord className='dim'/>
                <div className="article-right">
                    <h4 className='dim'>{heading}</h4>
                    <p>
                        {subtitle} 
                        <span className='dim'> - {readers} readers</span>
                    </p>
                </div>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Widgits