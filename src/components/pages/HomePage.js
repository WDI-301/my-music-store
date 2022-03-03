import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../fetchData';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const HomePage = (props) => {
  const [productData, setProductData] = useState();
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get('http://localhost:5100/get-products')
    .then(response => setProductData(response.data))
  }, [])

  if(!productData){
    return null;
  }


  return (
    <Layout>
      <Box p={4}>
        {productData.map(product => (
          <Box
            key={product.id}
            mb={4}
            display="flex"
            alignItems="center"
          >
            <ProductDisplay
              product={{
                id: product.id,
                title: product.title,
                brand: product.brand,
                price: product.price,
                description: product.description,
                image: product.image,
              }}
              /> 
          </Box>
        ))}
      </Box>
    </Layout>
  )
};

export default HomePage;