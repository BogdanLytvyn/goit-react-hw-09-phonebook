import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import styles from './RgisterPage.module.css';


const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage =() => {
const [user, setUser] = useState(initialState)
  const dispatch = useDispatch()

 const handleChange = ({ target: { name, value } }) => {
   setUser(prevUser =>({...prevUser, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(user));
    setUser(initialState);
  };


    return (
      <div className={styles.registerBox}>
        <h1>Please register</h1>
        <form onSubmit={handleSubmit} className="mt-3" autoComplete="off">
          <div className="mb-3">
            <label className="form-label">User name</label>
            <input
              type="text"
              placeholder="user name"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <label className="form-label mt-3">Email address</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="******"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );

}

export default RegisterPage;
