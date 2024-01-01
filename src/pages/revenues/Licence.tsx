import Table from '../../comps/table/Table'
import { FC } from 'react'
import './styles.scss'
import AddRevenue from '../../comps/add/Add'

const Licence:FC = () => {
  return (
    <section className='styles'>
      <AddRevenue
        tax='Lincence Taxes'
        revenue='Add Lincence Tax'
      />
      <Table/>
    </section>
  )
}

export default Licence
