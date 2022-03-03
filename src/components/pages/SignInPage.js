import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInActionCreator, SIGN_IN_ACTION, SIGN_OUT_ACTION } from '../../reduxStore/userState';
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

  const handleSignOut = () => {
    dispatch({ type: SIGN_OUT_ACTION });

    // TODO: actually sign out the user. make a network request to remove the AUTH cookies.
  };

  if(user){
    return (
      <Layout>
      <Box p={4}>
        <h1>Hi, {user.firstName}</h1>
        <Box mt={3}>
          <Button variant="contained" onClick={handleSignOut}>Sign out</Button>
        </Box>
      </Box>
    </Layout>
    )
  }


  return (
    <Layout>
      <Box p={4}>
        <h1>Sign in</h1>
        <Box mb={3}>
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
        <Box mb={3}>
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="standard"
            value={signInForm.password}
            onChange={(event) => {
              setSignInForm({...signInForm, password: event.target.value});
            }}
          />
        </Box>
        <Button variant="contained" onClick={onSubmit}>Sign in</Button>
        <Box mt={3}>
          <Link to="/sign-up">
            <Button variant="contained">Create new user account</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
};

export default SignInPage;
