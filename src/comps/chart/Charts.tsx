import './chart.scss'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    amt: 2400,
  },
  {
    name: 'Feb',
    amt: 2210,
  },
  {
    name: 'March',
    amt: 6290,
  },
  {
    name: 'April',
    amt: 5000,
  },
  {
    name: 'May',
    amt: 6181,
  },
  {
    name: 'June',
    amt: 4500,
  },
  {
    name: 'July',
    amt: 2100,
  },
  {
    name: 'Aug',
    amt: 2100,
  },
  {
    tax: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    amt: 2100,
  },
  {
    name: 'Nov',
    amt: 3100,
  },
  {
    name: 'Dec',
    amt: 5000,
  },
];

const Charts = () => {
  return (
    <section className='chart'>
      <ResponsiveContainer width={750} aspect={2/1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amt" fill="#256" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
        </ResponsiveContainer>
    </section>
  )
}

export default Charts
