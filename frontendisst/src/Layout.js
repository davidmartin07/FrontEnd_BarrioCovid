import React from 'react';
import AppCard from './AppCard';

const Layout = ({ children }) => {
  return (
    <div>
      <AppCard />
      {children}
    </div>
  );
};

export default Layout;