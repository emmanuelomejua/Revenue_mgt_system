import Table from '../../comps/table/Table'
import { FC } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Others:FC = () => {
  return (
    <section className='styles'>
      <AddRevenue
        tax='Other Taxes'
        revenue='Add Other Tax'
      />
    <Table/>
  </section>
  )
}

export default Others
