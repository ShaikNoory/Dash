import './card.css'

const Card = (props) => {
    const {title,numbers,description} = props
  return (
    <div className='card'>
        <div className='title'>
            {title}
        </div>
        <div className='numbers'>
            {numbers}
        </div>
        <div className='description'>
            {description}
        </div>

        
        </div>
  )
}

export default Card