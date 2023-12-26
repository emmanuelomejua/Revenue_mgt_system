import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    amt: 2400,
  },
  {
    month: 'Feb',
    amt: 2910,
  },
  {
    month: 'Mar',
    amt: 2290,
  },
  {
    month: 'Apr',
    amt: 4000,
  },
  {
    month: 'May',
    amt: 5181,
  },
  {
    month: 'Jun',
    amt: 3500,
  },
  {
    month: 'Jul',
    amt: 4100,
  },
  {
    month: 'Aug',
    amt: 3100,
  },
  {
    month: 'Sept',
    amt: 2100,
  },
  {
    month: 'Oct',
    amt: 2100,
  },
  {
    month: 'Nov',
    amt: 4100,
  },
  {
    month: 'Dec',
    amt: 2100,
  },
];


const Chart = (): any => {
  return (

       <section className='chart'>
          <ResponsiveContainer width={650} aspect={2 / 1}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />

            <Tooltip />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#6fd416" fill="#0512c0" />
          </AreaChart>
        </ResponsiveContainer>
      </section>
  )
}

export default Chart
