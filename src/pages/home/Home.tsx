import './home.scss'
import Widget from '../../comps/widget/Widget'

const Home = () => {
  return (
    <main className='home'>
      <section className='home__cont'>
        <section>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
        {/* <Widget/> */}
        </section>
      </section>
    </main>
  )
}

export default Home
