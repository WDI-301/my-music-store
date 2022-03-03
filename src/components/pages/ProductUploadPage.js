import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../layout/Layout';

// "title": "Blue Drumset",
// "brand": "Yamaha",
// "description": "This is a great drum set you should buy it today!",
// "image": "https://img.grouponcdn.com/stores/xeedMRUK7jjx6xqd8S8mD7aNKuL/storespi892307-1000x600/v1/c870x524.jpg",
// "price": 89999,

const uploadFromInitialState = {
  title: '',
  brand: '',
  description: '',
  image: '',
  price: '',
};

const ProductUploadPage = (props) => {
  const [uploadProductForm, setUploadProductForm] = useState(uploadFromInitialState);

  const onSubmit = () => {
    try{
      axios.post(
        'http://localhost:5100/upload-product',
        { productData: {...uploadProductForm, price: Number(uploadProductForm.price) }}
      ).then(() => {
        setUploadProductForm(uploadFromInitialState);
      })
    } catch (error){
      console.log('error: ', error);
    }
  };

  return (
    <Layout>
      <Box p={4}>
        <Box py={2}>
          <h1>Upload product</h1>
        </Box>
        <Box pb={3}>
          <TextField
            id="title"
            label="Title"
            variant="standard"
            value={uploadProductForm.title}
            onChange={(event) => {
              setUploadProductForm({...uploadProductForm, title: event.target.value});
            }}
          />
        </Box>
        <Box pb={3}>
          <TextField
            id="brand"
            label="Brand"
            variant="standard"
            value={uploadProductForm.brand}
            onChange={(event) => {
              setUploadProductForm({...uploadProductForm, brand: event.target.value});
            }}
          />
        </Box>
        <Box pb={3}>
          <TextField
            id="description"
            label="Description"
            variant="standard"
            value={uploadProductForm.description}
            onChange={(event) => {
              setUploadProductForm({...uploadProductForm, description: event.target.value});
            }}
          />
        </Box>
        <Box pb={3}>
          <TextField
            id="image"
            label="Image"
            variant="standard"
            value={uploadProductForm.image}
            onChange={(event) => {
              setUploadProductForm({...uploadProductForm, image: event.target.value});
            }}
          />
        </Box>
        <Box pb={3}>
          <TextField
            id="price"
            label="Price"
            type="number"
            variant="standard"
            value={uploadProductForm.price}
            onChange={(event) => {
              setUploadProductForm({...uploadProductForm, price: event.target.value});
            }}
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={onSubmit}>Upload product</Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductUploadPage;