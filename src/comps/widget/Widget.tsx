import './widget.scss'
import { ChatBubble, ApprovalOutlined, BarChartOutlined, CheckCircleOutline, Repartition } from '@mui/icons-material'



const Widget = ({type}: any) => {
  let details: string | number | any;
  
  switch(type){
    case 'polltax':
      details = {
        title: 'Poll Tax',
        icon: <BarChartOutlined style={{color: 'orange'}}/>,
        amount: 10000
      }
     break;
    case 'yesterday':
      details = {
        title: 'Yesterday',
        icon: <ApprovalOutlined style={{color: 'green'}}/>,
        amount: 12000
      }
     break;
    case 'licence':
      details = {
        title: 'Total licence',
        icon: <CheckCircleOutline style={{color: 'yellow'}}/>,
        amount: 31000
      }
     break;
    case 'month':
      details = {
        title: 'Last month',
        icon: <Repartition style={{color: 'purple'}}/>,
        amount: 62000
      }
     break;
    case 'total':
      details = {
        title: 'Grand Total',
        icon: <ChatBubble style={{color: '#256'}}/>,
        amount: 132000
      }
     break;
    
    default:
      break;
  }


  return (
    <div className='widget'>
      <div>
        <div className='div'>
          <span>{details.title}</span>
          <span>{details.icon}</span>
        </div>
        <p># {details.amount}</p>
      </div>
      
    </div>
  )
}

export default Widget
