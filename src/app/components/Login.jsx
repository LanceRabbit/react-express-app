import React from 'react';
import { connect } from 'react-redux';

const LoginComponent = () => (
  <div>
      <h1> Login Here! </h1>
  </div>
)

const mapStateToProps = state=>state;

export const ConnectedLogin = connect(mapStateToProps)(LoginComponent);