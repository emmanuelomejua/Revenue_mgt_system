import React, { FC } from 'react';
import { Dashboard, InsertChartOutlinedOutlined, ExitToApp, BarChartOutlined, StackedLineChartOutlined, CheckCircleOutline, Contrast, FilterHdr, Recycling } from '@mui/icons-material'
import './sidebar.scss'
import { Link } from 'react-router-dom'


interface SidebarItems {
    id: number;
    title: string;
    url: string;
    icon: React.ReactElement;
  }


const lists: SidebarItems[] = [
    {
        id: 0,
        title: 'Home',
        url: '/',
        icon: <Dashboard/>
    },
    {
        id: 2,
        title: 'Poll Tax',
        url: '/polltax',
        icon: <BarChartOutlined/>
    },
    {
        id: 3,
        title: 'Non-Revenue',
        url: '/nonrevenue',
        icon: <InsertChartOutlinedOutlined/>
    },
    {
        id: 4,
        title: 'Licence',
        url: '/licence',
        icon: <CheckCircleOutline/>
    },
    {
        id: 5,
        title: 'Earnings',
        url: '/earnings',
        icon: <StackedLineChartOutlined/>
    },
    {
        id: 6,
        title: 'Rent',
        url: '/rents',
        icon: <Contrast/>
    },
    {
        id: 7,
        title: 'Fees',
        url: '/fees',
        icon: <FilterHdr/>
    },
    {
        id: 8,
        title: 'Others',
        url: '/others',
        icon: <Recycling/>
    },

]

const Sidebar: FC = () => {
  return (
    <section className='sidebar'>
        <ul>
            {
                lists.map((item) => (
                <Link to={item.url} className='link li' key={item.id}>
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
