import './widget.scss'
import { ChatBubble } from '@mui/icons-material'

const Widget = () => {
  return (
    <div className='widget'>
      <div>
        <div className='div'>
          <span>Poll Tax  </span>
          <span> <ChatBubble/> </span>
        </div>
        <p>#25000</p>
      </div>
      
    </div>
  )
}

export default Widget
