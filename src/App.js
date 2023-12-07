import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PropertyPage from './components/property/PropertyPage';
import PropertyDetail from './components/property/PropertyDetail';
import UserInfoForm from './components/users/UserInfoForm';
import ConfirmationDetail from './components/users/ConfirmationDetail';
import MyBookedPage from './components/users/MyBookedPage';


function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        
        <Route path='/' element={<Home />} exact />
        <Route path='/houses' element={<PropertyPage />} exact />
        <Route path='/houses/:id' element={<PropertyDetail />} exact />
        <Route exact path="/book/:id" element={<UserInfoForm />} />
        <Route exact path='/confirm' element={<ConfirmationDetail />} />
        <Route exact path='/mybookings' element={<MyBookedPage />} />




      </Routes>
    </BrowserRouter>


  );
}

export default App;
