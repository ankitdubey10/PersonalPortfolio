import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import Navbar from './components/Navbar';
import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tech from './components/Tech';
import Exp from './components/Contact';
import Project from './components/Project';
const router = createBrowserRouter([
  {
    path: "/",
    element:<> <Navbar></Navbar> <ProfilePhoto></ProfilePhoto></>
  },
  {
    path: "/tech",
    element:<Tech></Tech>
  },
  {
    path: "/cont",
    element:<Exp></Exp>
  },
  {
    path: "/proj",
    element:<Project></Project>
  },
])
function App() {
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
