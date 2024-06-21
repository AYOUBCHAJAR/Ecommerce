import React from 'react';
import { Box, Typography, Container, Paper, List, ListItem, ListItemText } from '@mui/material';

const HelpPage = () => {
  return (
    <Container>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h2" gutterBottom>
          Help
        </Typography>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Frequently Asked Questions (FAQ)
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText
                primary="How do I track my order?"
                secondary="You can track your order by Contacting the Support team ."
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="What payment methods do you accept?"
                secondary="We accept credit/debit cards, PayPal, and bank transfer."
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="How can I return a product?"
                secondary="You can initiate a return by contacting our customer support within 30 days of receiving your order."
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Do you offer international shipping?"
                secondary="Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary."
              />
            </ListItem>
          </List>
        </Paper>
        <Paper sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Support Center
          </Typography>
          <Typography variant="body1" paragraph>
            Our support team is available 24/7 to assist you with any questions or issues you may have.
            Contact us at TwiceBox@gmail.com or call us at +212 5 62 51 20 34.
          </Typography>
        </Paper>
        <Paper sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Feedback
          </Typography>
          <Typography variant="body1" paragraph>
            We value your feedback! Let us know how we're doing and how we can improve our products and services.
            Send us your feedback at TwiceBox@gmail.com .
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default HelpPage;
