import { Dashboard, ProductionQuantityLimits, ExitToApp } from '@mui/icons-material'
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
        icon: <ProductionQuantityLimits/>
    },
    {
        title: 'Non-Revenue',
        url: '/nonrevenue',
        icon: <Dashboard/>
    },
    {
        title: 'Licence',
        url: '/licence',
        icon: <Dashboard/>
    },
    {
        title: 'Earnings',
        url: '/earnings',
        icon: <Dashboard/>
    },
    {
        title: 'Rent',
        url: '/rents',
        icon: <Dashboard/>
    },
    {
        title: 'Fees',
        url: '/fees',
        icon: <Dashboard/>
    },
    {
        title: 'Others',
        url: '/others',
        icon: <Dashboard/>
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
