import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';

const products = {
  Phone: [
    'iPhone 15 pro max',
    'OnePlus 11T',
    'Google Pixel 7 Pro',
    'SAMSUNG Galaxy S23 Ultra',
    'Xiaomi Mi 12 Ultra',
    'Sony Xperia 5 Mark III'
  ],
  Laptop: [
    'ACER NITRO 5',
    'HP Spectre x360',
    'ASUS ROG Zephyrus G14',
    'Dell XPS 15',
    'MacBook Pro 14-inch',
    'Microsoft Surface Laptop Studio'
  ],
  Mouse: [
    'Logitech G pro',
    'Corsair Dark Core RGB Pro',
    'Logitech MX Master 3',
    'Razer DeathAdder V2',
    'SteelSeries Rival 650',
    'Microsoft Surface Precision Mouse'
  ]
};

export default function Checkout() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const formRef = useRef(null); // Reference to the form

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      addressLine1: formData.get('addressLine1'),
      addressLine2: formData.get('addressLine2'),
      city: formData.get('city'),
      phone: formData.get('phone'),
      zip: formData.get('zip'),
      country: formData.get('country'),
      productName: formData.get('productName'),
    };

    try {
      await axios.post('http://localhost:8080/orders', data);
      setSubmitted(true);
      setError(null);
      resetForm();
    } catch (error) {
      console.error('Error submitting order:', error);
      setError('An error occurred while submitting your order. Please try again later.');
      setSubmitted(false);
    }
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setCategory('');
    setProductName('');
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setProductName(''); // Reset product name when category changes
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#81C4FA' }}>
          <ShoppingBagOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          BUY NOW
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} ref={formRef}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="first-name"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="last-name"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address-line1"
            label="Address Line 1"
            name="addressLine1"
            autoComplete="address-line1"
          />
          <TextField
            margin="normal"
            fullWidth
            id="address-line2"
            label="Address Line 2"
            name="addressLine2"
            autoComplete="address-line2"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="city"
            label="City"
            name="city"
            autoComplete="address-level2"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="zip"
            label="Zip / Postal Code"
            name="zip"
            autoComplete="postal-code"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="country"
            label="Country"
            name="country"
            autoComplete="country-name"
          />
          <TextField
            select
            margin="normal"
            required
            fullWidth
            id="category"
            label="Category"
            value={category}
            onChange={handleCategoryChange}
          >
            {Object.keys(products).map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="normal"
            required
            fullWidth
            id="product-name"
            label="Product Name"
            name="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            autoComplete="product-name"
            disabled={!category}
          >
            {category && products[category].map((product) => (
              <MenuItem key={product} value={product}>
                {product}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Buy Now
          </Button>
          {submitted && (
            <Typography variant="body1" align="center" color="primary">
              Your order has been submitted successfully!
            </Typography>
          )}
          {error && (
            <Typography variant="body1" align="center" color="error">
              {error}
            </Typography>
          )}
        </Box>
      </Box>

      <Box>
        <Typography color="text.secondary" align="center" sx={{ mt: 2, mb: 3 }}>
          {'Copyright © '}
          <Link color="inherit" href="http://localhost:5173/">
            ElecTech
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}
