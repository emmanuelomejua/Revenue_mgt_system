import Table from '../../comps/table/Table'
import { FC } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Earnings:FC = () => {
  return (
    <section className='styles'>
      <AddRevenue
        tax='Earning Taxes'
        revenue='Add Earning Tax'
      />
    <Table/>
    </section>
  )
}

export default Earnings
