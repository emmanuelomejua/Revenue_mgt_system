import Table from '../../comps/table/Table'
import { FC } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Fees:FC = () => {
  return (
    <section className='styles'>
      <AddRevenue
        tax='Fee Taxes'
        revenue='Add Fee Tax'
      />
    <Table/>
    </section>
  )
}

export default Fees
