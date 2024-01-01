import { FC } from 'react'
import './styles.scss'
import Table from '../../comps/table/Table'
import AddRevenue from '../../comps/add/Add'

const Polltask:FC = () => {
  return (
    <section className='styles'>
      <AddRevenue
        tax='Poll Taxes'
        revenue='Add Poll Tax'
      />
      <Table/>
    </section>
  )
}

export default Polltask
