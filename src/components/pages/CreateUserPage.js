import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN_ACTION } from '../../reduxStore/userState';
import Layout from '../layout/Layout';

const CreateUserPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const user = useSelector(state => state.user);

  // If the user is logged in already, redirect them to the home page
  if(user){
    navigate('/');
  };

  // const user = useSelector(state => state.user);
  const [signUpForm, setSignUpForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const onSubmit = () => {
    // Make our network request to create the user.
    console.log('signUpForm: ', signUpForm);


    axios.post('http://localhost:5100/create-user', { user: signUpForm })
    .then(response => {
      console.log('user route was hit successfully!, response: ', response)

      const createdUserData = response.data;
      dispatch({
        type: SIGN_IN_ACTION,
        payload: {
          userData: createdUserData,
        }
      })

    }).catch((error) => {
      console.log('error: ', error)
    })
    ;
  }

  return (
    <Layout>
      <Box p={4}>
        <h1>Create user account</h1>
        <Box pb={3}>
          <TextField
            id="firstName"
            label="First Name"
            variant="standard"
            value={signUpForm.firstName}
            onChange={(event) => {
              setSignUpForm({...signUpForm, firstName: event.target.value});
            }}
          />
        </Box>
        <Box pb={3}>
          <TextField
          id="lastName"
          label="Last Name"
          variant="standard"
          value={signUpForm.lastName}
          onChange={(event) => {
            setSignUpForm({...signUpForm, lastName: event.target.value});
          }}
          />
        </Box>
        <Box pb={3}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={signUpForm.email}
            onChange={(event) => {
              setSignUpForm({...signUpForm, email: event.target.value});
            }}
          />
        </Box>
        <Box pb={3}>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            value={signUpForm.password}
            onChange={(event) => {
              setSignUpForm({...signUpForm, password: event.target.value});
            }}
          />
        </Box>
        <Button variant="contained" onClick={onSubmit}>Create account</Button>
      </Box>
    </Layout>
  )
};

export default CreateUserPage;
