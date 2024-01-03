import './add.scss';
import { Dispatch, SetStateAction } from 'react';
import { modalInputProps } from '../../types/types'

const inputs:modalInputProps[] = [
  {
    id: 0,
    type: 'text',
    placeholder: 'FullName'
  },
  {
    id: 1,
    type: 'number',
    placeholder: 'Phone',
    minLenght: 11,
    maxLenght: 11
  },
  {
    id: 2,
    type: 'text',
    placeholder: 'Address'
  },
  {
    id: 3,
    type: 'number',
    placeholder: 'Amount',
    min: 0
  },
  {
    id: 4,
    type: 'date',
  },
]

interface i {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal:React.FC<i> = ({setOpen}) => {
  return (
    <div className='modal'>
      <section>
        <span onClick={()=>setOpen(false)}>Back</span>

        <h4>Type of Tax</h4>
        {
          inputs.map((input) => (
            <input type={input.type} placeholder={input.placeholder} key={input.id} min={input?.min} required/>
          ))
        }

        <button>SUBMIT</button>
      </section>
    </div>
  )
}

export default Modal
