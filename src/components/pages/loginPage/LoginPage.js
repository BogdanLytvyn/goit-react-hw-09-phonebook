import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import styles from './LoginPage.module.css';


const initialState = {
  email: '',
  password: '',
};

const LoginPage = ()=>  {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setUser(prevUser => ({...prevUser, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( logIn(user));
    setUser(initialState)
  };


    // console.log(email, password);
    return (
      <div className={styles.loginBox}>
        <form onSubmit={handleSubmit} className="mt-3" autoComplete="off">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Log in
          </button>
        </form>
      </div>
    );

}



export default LoginPage;


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { logIn } from '../../../redux/auth/authOperations';
// import styles from './LoginPage.module.css';
//
// class LoginPage extends Component {
//   state = {
//     email: '',
//     password: '',
//   };
//
//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };
//
//   handleSubmit = e => {
//     e.preventDefault();
//
//     this.props.onLogin(this.state);
//
//     this.setState({ name: '', email: '', password: '' });
//   };
//
//   render() {
//     const { email, password } = this.state;
//     console.log(email, password);
//     return (
//       <div className={styles.loginBox}>
//         <form onSubmit={this.handleSubmit} className="mt-3" autoComplete="off">
//           <div className="mb-3">
//             <label className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail2"
//               aria-describedby="emailHelp"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword2"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-success">
//             Log in
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
//
// const mapDispatchToProps = {
//   onLogin: logIn,
// };
//
// export default connect(null, mapDispatchToProps)(LoginPage);
