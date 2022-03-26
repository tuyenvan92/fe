import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// configs
import { routesConfig } from 'routes/routesConfig';

export default function MiniDrawer() {

  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((route, index) => {
          const Component = route.element;
          const Layout = route.layout || React.Fragment;
          
          return (
            <Route
              key={index} 
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              } 
            />
          )
        })}
      </Routes>
    </BrowserRouter>
    
  );
}
