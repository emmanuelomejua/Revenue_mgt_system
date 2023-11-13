import './home.scss'
import Widget from '../../comps/widget/Widget'
import Piechart from '../../comps/piechart/Piechart'
import Chart from '../../comps/chart/Chart'

const Home = (): any=> {
  return (
    <main className='home'>
      <section className='home__cont'>
        <section>
        <Widget type='polltax'/>
        <Widget type='licence'/>
        <Widget type='yesterday'/>
        <Widget type='month'/>
        <Widget type='total'/>
        </section>
        <div>
          <Chart/>
          <Piechart/>
        </div>
      </section>
    </main>
  )
}

export default Home
