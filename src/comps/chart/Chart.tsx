import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    month: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    month: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    month: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    month: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    month: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    month: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: 'Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: 'Sept',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: 'Oct',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: 'Nov',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    month: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Chart = (): any => {
  return (

       <section className='chart'>
          <ResponsiveContainer width={500} height={400}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            {/* <YAxis /> */}
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#1f17b1" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#6fd416" fill="#58ff8a" />
          </AreaChart>
        </ResponsiveContainer>
      </section>
  )
}

export default Chart
