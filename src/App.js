import React from 'react';
import{ Component } from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';

import AppHeader from './components/header/app-header';
import AppProducts from './components/products/app-products';
import AppServices from './components/services_/app-services';
import AppAboutAs from './components/about_as/app-aboutAs';
import AppPartners from './components/partners/app-partners';
import AppContacts from './components/contacts/app-contacts';


import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){

    return(
      <>
         <menu>
          <div className="menu__navigation">
            <div className="navigation__container">
              <div>
					        <img src="image/Logo-ktc.png" alt="Logo-ktc" />
					    </div>
              <nav>
                <button type="button"><NavLink to='/'>ГЛАВНАЯ</NavLink></button>
                <button type="button"><NavLink to='/products'>ПРОДУКЦИЯ</NavLink></button>
                <button type="button"><NavLink to='/services'>УСЛУГИ</NavLink></button>
                <button type="button"><NavLink to='/aboutas'>О НАС</NavLink></button>
                <button type="button"><NavLink to='/partners'>ПАРТНЕРЫ</NavLink></button>
                <button type="button"><NavLink to='/contacts'>КОНТАКТЫ</NavLink></button>
			        </nav>
            </div>
         </div>
				</menu>
        <Routes>
          <Route path='/' element={<AppHeader/>} />
          <Route path='/products' element={<AppProducts/>} />
          <Route path='/services' element={<AppServices/>} />
          <Route path='/aboutas' element={<AppAboutAs/>}/>
          <Route path='/partners' element={<AppPartners/>}/>
          <Route path='/contacts' element={<AppContacts/>}/>
        </Routes>
        
        
      </>
    )
  }
}

export default App;
