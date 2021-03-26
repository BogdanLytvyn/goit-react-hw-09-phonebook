import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component,  redirectTo, ...routeProps }) => {
    const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />)}
    />
  );
}


export default PrivateRoute;

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getIsAuthenticated } from '../../redux/auth/authSelectors';
//
// const PrivateRoute = ({ component: Component, isAuthenticated, redirectTo, ...routeProps }) => (
//   <Route
//     {...routeProps}
//     render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />)}
//   />
// );
//
// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });
//
// export default connect(mapStateToProps)(PrivateRoute);
