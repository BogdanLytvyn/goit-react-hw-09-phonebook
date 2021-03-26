import React from 'react';
import Navigation from '../navigaton/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../navigaton/AuthNavigation';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isAuthenticated=useSelector(getIsAuthenticated)
  return <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
}

export default AppBar;
