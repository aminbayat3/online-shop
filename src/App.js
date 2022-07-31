import { Routes, Route } from 'react-router-dom';

import HomePage from './routes/home/home-page.component';
import ProductsPage from './routes/products/products-page.component';
import Navigation  from './routes/navigation/navigation.component';
import ContactPage from './routes/contact/contact-page.component';
import Authentication from './routes/authentication/authentication.component';
import AboutUs from './routes/about-us/about-us.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navigation /> }>
          <Route index element={ <HomePage /> } />
          <Route path=':categoryId' element={ <ProductsPage /> } />
          <Route path='auth' element={ <Authentication /> } />
          <Route path='contact' element={ <ContactPage /> } />
          <Route path='aboutus' element={ <AboutUs /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
