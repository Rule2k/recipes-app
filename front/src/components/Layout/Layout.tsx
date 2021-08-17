import React, { ReactChild } from 'react';
import Header from '../Header';
import styles from './Layout.module.css';
import Loader from '../../components/Loader';

const Layout = ({
  children,
  loading,
}: {
  children: ReactChild;
  loading: boolean;
}) => (
  <div className={styles.Layout}>
    <Header />
    {loading ? <Loader /> : children}
  </div>
);

export default Layout;
