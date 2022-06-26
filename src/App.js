import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import ManageItems from './Components/ManageItems/ManageItems';
import AddItem from './Components/AddItem/AddItem';
import Blog from './Components/Blog/Blog';
import MyItems from './Components/MyItems/MyItems';
import Recipes from './Components/Recipes/Recipes';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/manageItems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="/recipes" element={<Recipes></Recipes>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
