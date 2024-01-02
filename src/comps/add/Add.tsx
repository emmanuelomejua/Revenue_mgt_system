import { useState, MouseEvent } from 'react';
import Modal from './Modal';
import './add.scss';


interface revenueProps {
    tax: string;
    revenue: string;
}

const AddRevenue:React.FC<revenueProps> = ({tax, revenue}) =>{

    const [open, setOpen] = useState<boolean>(false)

    return(
        <section className='add'>
            <span>{tax}</span>
            <button onClick={(e:MouseEvent<HTMLButtonElement>) => setOpen(!open)}>{revenue}</button>

            {  open && <Modal/>}
        </section>
    )
}

export default AddRevenue
