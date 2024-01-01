import Table from '../../comps/table/Table'
import { FC } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Rent:FC = () => {
  return (
    <section className='styles'>
      <AddRevenue
          tax='Collected Rents'
          revenue='Add Rent'
      />
      <Table/>
    </section>
  )
}

export default Rent
