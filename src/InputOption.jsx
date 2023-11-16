import './InputOption.css'
const InputOption = ({Icon,title,color,className}) => {
  return (
    <div className={`${className} inputOption flex pad items-center`}>
        <Icon style={{color:color}}/>
        <h4 className='dim'>{title}</h4>
    </div>
  )
}

export default InputOption