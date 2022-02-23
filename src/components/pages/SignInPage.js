import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../fetchData';
import { signInActionCreator } from '../../reduxStore/userState';
import Layout from '../layout/Layout';

const SignInPage = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const handleUserLogIn = () => {
    dispatch(signInActionCreator())
  }
  
  if(user){
    return (
      <Layout>
        <h1>Welcome back {user.firstName} {user.lastName}</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Sign In page</h1>
      <button onClick={handleUserLogIn}>Log in user</button>
    </Layout>
  )
};

export default SignInPage;
