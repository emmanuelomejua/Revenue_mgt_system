import './topbar.scss'
import {useState} from 'react'
import {Close, Menu} from '@mui/icons-material'
import Menu1 from './Menu'


const Topbar = (): any => {

  const [menu, setMenu] = useState(false)

  return (
    <nav className='navbar'>
      <section>
        <div className="navbar__first">
            <img src='naija.png' alt=''/>
            <img src='ifadore.png' alt=''/>
        </div>

        <div className="navbar__last">
          <span className='span'>Overview</span>

          <div>
            <img src='pic1.jpg' alt=''/>
            <span>Ayodele Ayodeji</span>
          </div>
        </div>
      </section>


      <section className='section_menu'>
        <section className='section_menu_cont'>
         {!menu ? <img src="ifadore.png" alt="" />: ''}
          <div className="">

            {!menu ? <Menu className='icon' onClick={()=> setMenu(true)}/> : ''}

          {menu &&
            <div className="hamuburg">
              <Close onClick={()=>setMenu(false)} className='icon2'/>
              <Menu1/>
            </div>}
          </div>
        </section>
      </section>
    </nav>
  )
}

export default Topbar
