import './add.scss';
import { Dispatch, SetStateAction, useState } from 'react';
import { modalInputProps } from '../../types/types'

const inputs:modalInputProps[] = [
  {
    id: 0,
    type: 'text',
    placeholder: 'FullName',
    name: ''
  },
  {
    id: 1,
    type: 'number',
    placeholder: 'Phone',
    minLenght: 11,
    maxLenght: 11,
    name: ''
  },
  {
    id: 2,
    type: 'text',
    placeholder: 'Address',
    name: ''
  },
  {
    id: 3,
    type: 'number',
    placeholder: 'Amount',
    min: 0,
    name: ''
  },
  {
    id: 4,
    type: 'date',
    name: ''
  },
  {
    id: 5,
    type: 'text',
    placeholder: 'Type of Tax',
    name: ''
  },
]

interface i {
  setOpen: Dispatch<SetStateAction<boolean>>;
  onchange: any;
  onSubmit: any
}

const Modal:React.FC<i> = ({setOpen, onSubmit, onchange}) => {

  const [revenueDetails, setRevenueDetails] = useState({
    fullName: '',
    phone: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = () => {

  }

  const handleSubmit = (e:any) => {

  }

  return (
    <form className='modal' onSubmit={onSubmit}>
      <section>
        <span onClick={()=>setOpen(false)}>Back</span>

        <h4>Type of Tax</h4>
        {
          inputs.map((input) => (
            <input 
              type={input.type} 
              placeholder={input.placeholder} 
              key={input.id} 
              min={input?.min} required
              name={input.name}
              onChange={onchange}
            />
          ))
        }

        <button type='submit'>SUBMIT</button>
      </section>
    </form>
  )
}

export default Modal
