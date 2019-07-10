import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store/store'

import MyHeader from './common/Header'
import Footer from './common/Footer'
// import MyCarousel from './components/MyCarousel'
import Index from './pages/index'
import NewsDetail from './pages/NewsDetail'
import Courses from './pages/Courses'
import sign from './components/MyModal'

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <MyHeader/>
          <Route exact  path='/' component={Index} />
          <Route exact  path='/news/:id' component={NewsDetail} />
          <Route exact  path='/courses' component={Courses} />
          <Route exact  path='/login' component={sign} />
          <Footer/>
        </BrowserRouter>
      </Provider>
  );
}
export default App;
