import { Dashboard, InsertChartOutlinedOutlined, ExitToApp, BarChartOutlined, StackedLineChartOutlined, CheckCircleOutline, Contrast, FilterHdr, Recycling } from '@mui/icons-material'
import './sidebar.scss'
import { Link } from 'react-router-dom'


const lists = [
    {
        title: 'Home',
        url: '/',
        icon: <Dashboard/>
    },
    {
        title: 'Poll Tax',
        url: '/polltax',
        icon: <BarChartOutlined/>
    },
    {
        title: 'Non-Revenue',
        url: '/nonrevenue',
        icon: <InsertChartOutlinedOutlined/>
    },
    {
        title: 'Licence',
        url: '/licence',
        icon: <CheckCircleOutline/>
    },
    {
        title: 'Earnings',
        url: '/earnings',
        icon: <StackedLineChartOutlined/>
    },
    {
        title: 'Rent',
        url: '/rents',
        icon: <Contrast/>
    },
    {
        title: 'Fees',
        url: '/fees',
        icon: <FilterHdr/>
    },
    {
        title: 'Others',
        url: '/others',
        icon: <Recycling/>
    },

]

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <ul>
            {
                lists.map((item) => (
                <Link to={item.url} className='link li'>
                    <span>{item.icon}</span>
                    <p>{item.title}</p>
                </Link>

                ))
            }
        </ul>
        <div>
            <span><ExitToApp/></span>
            <span>Logout</span>
        </div>
    
    </section>
  )
}

export default Sidebar
