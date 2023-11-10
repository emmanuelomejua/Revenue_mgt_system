import './topbar.scss'

const Topbar = () => {
  return (
    <nav className='navbar'>
      <section>
        <div className="">
            <img src='naija.png' alt=''/>
            <img src='ifadore.png' alt=''/>
            <span className='span'>Overview</span>
        </div>
        <div className="">
          <img src='pic1.jpg' alt=''/>
          <span>Ayodele Ayodeji</span>
        </div>
      </section>
    </nav>
  )
}

export default Topbar
