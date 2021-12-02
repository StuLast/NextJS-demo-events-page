import MainHeader from './main-header';
import MainFooter from './main-footer';
import { Fragment } from 'react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </Fragment>
  );
};

export default Layout;
