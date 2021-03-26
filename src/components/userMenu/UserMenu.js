import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { getUsername } from '../../redux/auth/authSelectors';
import defaultAvatar from '../../shared/images/male-user.png';
import styles from './User.module.css';

const UserMenu = ( ) => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (

  <div className={styles.container}>
    <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>{name}</span>
    <button className="btn btn-danger" type="button" onClick={onLogOut}>
      Logout
    </button>
  </div>
)};

export default UserMenu;
