import Table from '../../comps/table/Table'
import AddRevenue from '../../comps/add/Add'
import { FC } from 'react'
import './styles.scss'

const NonRevenue:FC = () => {
  return (
    <section className='styles'>
     <AddRevenue/>
     <Table/>
     </section>
  )
}

export default NonRevenue
