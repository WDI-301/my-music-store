import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ApiAxios from '../../apiAxios';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';

const HomePage = (props) => {
  const [productData, setProductData] = useState();
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    ApiAxios.get('/get-products')
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