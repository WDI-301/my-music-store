import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../layout/Layout';

const CreateUserPage = () => {
  // const user = useSelector(state => state.user);
  const [signUpForm, setSignUpForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const onSubmit = () => {
    // Make our network request to create the user.
    console.log('signUpForm: ', signUpForm);

    axios.post('http://localhost:5100/create-user', { user: signUpForm })
    .then(response => {
      console.log('user route was hit successfully!, response: ', response)
    }).catch((error) => {
      console.log('error: ', error)
    })
    ;
  }

  return (
    <Layout>
      <Box p={4}>
        <h1>Create user account</h1>
        <Box py={4}>
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
        <Box py={4}>
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
        <Box py={4}>
          <TextField
          id="email"
          label="email"
          variant="standard"
          value={signUpForm.email}
          onChange={(event) => {
            setSignUpForm({...signUpForm, email: event.target.value});
          }}
          />
        </Box>
        <button onClick={onSubmit}>Create Account</button>
      </Box>
    </Layout>
  )
};

export default CreateUserPage;
