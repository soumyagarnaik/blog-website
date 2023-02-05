import React, { useContext } from 'react';
import { Route, redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, path, ...props }) => {
  const { loggedUserID } = useContext(AuthContext);
  return (
    <Route
      {...props}
      render={(props) => {
        if (loggedUserID) {
          <Component {...props} /> 
        } else {
          <h1 style={{ marginTop: '10rem', textAlign: 'center' }}>You are not authorized</h1>;
        }
        if (!loggedUserID) return redirect('/');
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  authorizedUser: PropTypes.number.isRequired
};

ProtectedRoute.defaultProps = {
  authorizedUser: '',
  component: React.createElement('div'),
  path: ''
};

export default ProtectedRoute;
