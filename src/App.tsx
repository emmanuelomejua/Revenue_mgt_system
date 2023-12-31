import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './app.scss';
import Topbar from './comps/topbar/Topbar';
import Sidebar from './comps/sidebar/Sidebar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { Polltask, Earnings,  Lincence, Fees, NonRevenue, Rent, Others } from './pages/revenues';



function App() {

  const Layout = () => {
    return(
      <section className='app'>
        <Topbar/>
        <section  className='app_cont'>
          <section className='app__sidebar'>
          <Sidebar/>
          </section>
          <section className='app__cont_main'>
          <Outlet/>
          </section>
        </section>
      </section>
    )
  }


  const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout/>,
        children: [
          {
            path: '/',
            element:  <Home/>
          },
          {
            path: '/polltax',
            element:  <Polltask/>
          },
          {
            path: '/nonrevenue',
            element:  <NonRevenue/>
          },
          {
            path: '/licence',
            element:  <Lincence/>
          },
          {
            path: '/earnings',
            element:  <Earnings/>
          },
          {
            path: '/rents',
            element:  <Rent/>
          },
          {
            path: '/fees',
            element:  <Fees/>
          },
          {
            path: '/others',
            element:  <Others/>
          },
        ]
      },
      {
        path: '/login',
        element: <Login/>
      }
  ])


  return (
    <main className="App">
      <RouterProvider router={router}/>
    </main>
  );
}

export default App;
