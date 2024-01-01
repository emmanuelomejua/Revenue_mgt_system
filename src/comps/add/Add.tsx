import { useState } from 'react';
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
            <button onClick={()=>setOpen(!open)}>{revenue}</button>
        </section>
    )
}

export default AddRevenue
