import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, Stack, Typography, Dialog } from '@mui/material'
import React, { useState } from 'react';
import Checkout from './Checkout';

export default function ProductDetails({ product }) {
  const [ifta7, setifta7] = useState(false);

  const handleOpenClick = () => {
    setifta7(true);
  };

  const handleCloseClick = () => {
    setifta7(false);
  };

  if (!product) {
    return null; // Return null or a loading indicator if product is not yet available
  }

  return (
    <>
      <Box sx={{display: "flex", alignItems: "center", gap: 2.5, flexDirection: { xs: "column", sm: "row" }}}>
        <Box sx={{ display: "flex" }}>
          <img width={300} src={product.image} alt={product.title} />
        </Box>

        <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}> 
          <Typography variant="h5">{product.title}</Typography>
          <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">{product.price}</Typography>
          <Typography variant="body1">{product.description}</Typography>

          <Stack direction={"row"} sx={{ justifyContent: { xs: "center", sm: "left" } }} gap={1} my={1}>
            {product.images.map((item, index) => (
              <img className='border' style={{ borderRadius: 3, marginTop: '30px' }} width={"20%"} key={index} src={item} alt="" />
            ))}
          </Stack>
          <Button size="small" onClick={handleOpenClick}>
            <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
            Buy now
          </Button>
        </Box>
      </Box>

      <Dialog sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={ifta7}
        onClose={handleCloseClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <Checkout />
      </Dialog>
    </>
  );
}
