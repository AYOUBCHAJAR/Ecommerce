import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';

const teamMembers = [
  {
    name: "Ayoub Choukh",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1623685463160-f3f501540a91?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ayoub has over 25 years of experience in the electronics industry."
  },
  {
    name: "Alex Smith",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Alex is an expert in tech innovations and leads our tech team."
  },
  {
    name: "David Johnson",
    role: "CFO",
    image: "https://plus.unsplash.com/premium_photo-1670232149329-b3f128058ce8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "David manages all financial aspects of the company."
  }
];

const AboutUs = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: (theme) => theme.spacing(30, 4),
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5">
          Dedicated to Excellence in Electronics
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            padding: (theme) => theme.spacing(8, 2),
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our company! We are dedicated to providing the best electronic products including Mice, Laptops, and Phones. Our mission is to ensure customer satisfaction through high-quality products and excellent service.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: (theme) => theme.spacing(8, 2),
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            Established in 2005, we have grown to become a trusted name in the electronics industry. We strive to innovate and offer the latest technology to our customers. Over the years, we have expanded our product range and continuously improved our services.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: (theme) => theme.spacing(8, 2),
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={member.image}
                    title={member.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            padding: (theme) => theme.spacing(8, 2),
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Our Values
          </Typography>
          <Typography variant="body1" paragraph>
            At our company, we value integrity, innovation, and customer satisfaction. We believe in building strong relationships with our customers and partners, and we are committed to delivering exceptional products and services.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
