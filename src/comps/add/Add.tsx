import './add.scss';


interface revenueProps {
    tax: string;
    revenue: string
}

const AddRevenue:React.FC<revenueProps> = ({tax, revenue}) =>{
    return(
        <section className='add'>
            <span>{tax}</span>
            <button>{revenue}</button>
        </section>
    )
}

export default AddRevenue
