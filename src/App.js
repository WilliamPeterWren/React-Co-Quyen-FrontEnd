import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Index from './frontend/Index';
import FrontendRoute from './routes/FrontEnd';
import { UserProvider } from './frontend/context/userContext';
import store from './redux/store';

import IndexAdmin from './backend/indexBackend';
import BackendRoute from './routes/BackEnd';


function App() {

  return (
    <Provider store={store}>
      <UserProvider>
        <ToastContainer />
        <Routes>
          
          {/* frontend route */}
          <Route path='/' element={<Index />} >
          {
            FrontendRoute.map((root, index) => {
              const Page = root.component;
              return <Route key={index} path={root.path} element={<Page />} />;
            })
          }        
          </Route>

          {/* backend route */}
          <Route path='/' element={<IndexAdmin />}>
          {
            BackendRoute.map((root, index) => {
              const Page = root.component;
              return <Route key={index} path={root.path} element={<Page />} />;
            })
          }
          </Route>

        </Routes>
      </UserProvider>
    </Provider>
  );
}

export default App;
