import React, { useState } from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemText, TextField, Button, Snackbar } from '@mui/material';
import axios from 'axios';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/send-email', formData);
      console.log('Success:', response.data);
      setMessage('Email sent successfully.');
      setOpenSnackbar(true);
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to send email.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Email
          </Typography>
          <Typography variant="body1" paragraph>
            For general inquiries, email us at TwiceBox@gmail.com.
          </Typography>
        </Paper>
        <Paper sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Phone
          </Typography>
          <Typography variant="body1" paragraph>
            Call us at +212 5 62 51 20 34 for customer support or product inquiries.
          </Typography>
        </Paper>
        <Paper sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Locations
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText primary="Headquarters: Casablanca : Technopark Street Dammam, Morroco" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Casablanca : ANNASI Street 12 ZAFZAFI , Morroco" />
            </ListItem>
          </List>
        </Paper>
        <Paper sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              required
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              required
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={message}
      />
    </Container>
  );
};

export default ContactUsPage;
