import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './app.scss';
import Topbar from './comps/topbar/Topbar';
import Sidebar from './comps/sidebar/Sidebar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { Polltask, Lincence } from './pages/revenues/index';


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
            element:  <Home/>
          },
          {
            path: '/licence',
            element:  <Lincence/>
          },
          {
            path: '/licence',
            element:  <Lincence/>
          },
          {
            path: '/rents',
            element:  <Lincence/>
          },
          {
            path: '/fees',
            element:  <Lincence/>
          },
          {
            path: '/others',
            element:  <Lincence/>
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
