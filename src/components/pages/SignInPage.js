import { Box, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInActionCreator, SIGN_IN_ACTION } from '../../reduxStore/userState';
import Layout from '../layout/Layout';

const SignInPage = () => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  })

  const onSubmit = () => {
    console.log('signInForm: ', signInForm);

    axios.post('http://localhost:5100/sign-in', {
      userCredentials: signInForm,
    }).then( response => {
        
      console.log("response: ", response.data);
      dispatch({
        type: SIGN_IN_ACTION,
        payload: {
          userData: response.data,
        }
      })
    })
  };


  return (
    <Layout>
      <Box p={4}>
        <h1>Create user account</h1>
        <Box py={4}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={signInForm.email}
            onChange={(event) => {
              setSignInForm({...signInForm, email: event.target.value});
            }}
          />
        </Box>
        <Box py={4}>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            value={signInForm.password}
            onChange={(event) => {
              setSignInForm({...signInForm, password: event.target.value});
            }}
          />
        </Box>
        <button onClick={onSubmit}>Create Account</button>
      </Box>
    </Layout>
  )
};

export default SignInPage;
