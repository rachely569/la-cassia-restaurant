import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import HomePage from './components/homePage';
import Foods from './components/foods';
import Register from './components/register';
import LogIn from './components/logIn';
import ShoppingBug from './components/shoppingBug';
import MoreDetails from './components/moreDetails';
import PageNotFound from './components/pageNotFound';
import Manager from './components/manager';
import MainContainer from './components/mainContainer';

function App() {
  return <>
    <Nav ></Nav>
    <Routes>
      <Route path='' element={<HomePage></HomePage>}></Route>
      <Route path='homePage' element={<HomePage></HomePage>}></Route>
      <Route path='minc' element={<MainContainer></MainContainer>}></Route>
      <Route path='foods' element={<Foods></Foods>}></Route>
      <Route path='register' element={<Register ></Register>}></Route>
      <Route path='logIn' element={<LogIn > </LogIn>}></Route>
      <Route path='shopingBug' element={<ShoppingBug></ShoppingBug>}></Route>
      <Route path='homePage' element={<HomePage></HomePage>}></Route>
      <Route path='manager' element={<Manager></Manager>}></Route>
      <Route path='moreDetails/:id' element={<MoreDetails></MoreDetails>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    </Routes>

  </>
}

export default App;
